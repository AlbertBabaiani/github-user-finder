import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './core/user';
import { UserInfo } from './components/user-info/user-info';
import { Header } from './components/header/header';
import { ThemeChanger } from './core/theme-changer';
import { Search } from './components/search/search';

import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInfo, Header, Search],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [
    trigger('expandFade', [
      transition(':enter', [
        style({ height: '0px', opacity: 0, marginTop: '0px', overflow: 'hidden' }),

        animate(
          '500ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ height: '*', opacity: 1, marginTop: '*' }),
        ),
      ]),
      transition(':leave', [
        style({ overflow: 'hidden' }),
        animate(
          '400ms cubic-bezier(0.4, 0, 0.2, 1)',
          style({ height: '0px', opacity: 0, marginTop: '0px' }),
        ),
      ]),
    ]),
  ],
})
export class App {
  protected readonly title = signal('github-user-finder');
  private themeChanger = inject(ThemeChanger);
  isDark = this.themeChanger.isDark;

  private user = inject(User);

  searched_user = this.user.searched_user;
  err_msg = this.user.err_msg;
  isLoading = this.user.isLoading;

  changeTheme(new_theme: boolean): void {
    this.themeChanger.changeTheme(new_theme);
  }

  searchUser(userName: string): void {
    this.user.searchUser(userName);
  }
}
