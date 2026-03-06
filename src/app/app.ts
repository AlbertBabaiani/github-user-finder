import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './core/user';
import { UserInfo } from './components/user-info/user-info';
import { Header } from './components/header/header';
import { ThemeChanger } from './core/theme-changer';
import { Search } from './components/search/search';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInfo, Header, Search],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('github-user-finder');
  private themeChanger = inject(ThemeChanger);
  isDark = this.themeChanger.isDark;

  private user = inject(User);

  searched_user = this.user.searched_user;
  err_msg = this.user.err_msg;

  changeTheme(new_theme: boolean): void {
    this.themeChanger.changeTheme(new_theme);
  }

  searchUser(userName: string): void {
    this.user.searchUser(userName);
  }
}
