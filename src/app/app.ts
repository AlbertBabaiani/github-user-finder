import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './core/user';
import { UserInfo } from './components/user-info/user-info';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserInfo],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('github-user-finder');

  service = inject(User);

  searched_user = this.service.searched_user;

  constructor() {
    this.service.searchUser();
  }
}
