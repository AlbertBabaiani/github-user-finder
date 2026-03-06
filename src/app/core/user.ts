import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { UserModel } from '../shared/user_model';

@Injectable({
  providedIn: 'root',
})
export class User {
  private readonly BASE_URL = 'https://api.github.com/users/';
  private http = inject(HttpClient);

  // Todo: Convert To toObservable

  searched_user = signal<UserModel | null>(null);

  searchUser(): void {
    this.http.get<UserModel>(this.BASE_URL + 'octocat').subscribe({
      next: (data: UserModel) => {
        this.searched_user.set(data);
      },
    });
  }
}
