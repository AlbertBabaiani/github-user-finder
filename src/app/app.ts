import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './core/user';
import { UserInfo } from './components/user-info/user-info';
import { Header } from './components/header/header';
import { ThemeChanger } from './core/theme-changer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInfo, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('github-user-finder');
  private themeChanger = inject(ThemeChanger);
  isDark = this.themeChanger.isDark;

  private service = inject(User);

  searched_user = this.service.searched_user;

  constructor() {
    this.service.searchUser();
    setTimeout(() => {
      console.log(this.searched_user());
    }, 1000);
  }

  changeTheme(new_theme: boolean) {
    this.themeChanger.changeTheme(new_theme);
  }
}
