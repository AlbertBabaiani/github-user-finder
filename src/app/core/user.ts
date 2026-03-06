import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { UserModel } from '../shared/user_model';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  private readonly BASE_URL = 'https://api.github.com/users/';
  private http = inject(HttpClient);

  private _searched_user = signal<UserModel | null>(null);
  readonly searched_user = this._searched_user.asReadonly();

  private _err_msg = signal<boolean>(false);
  readonly err_msg = this._err_msg.asReadonly();

  searchUser(searched_user: string): void {
    this._err_msg.set(false);
    this.http
      .get<UserModel>(this.BASE_URL + searched_user)
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this._searched_user.set(data);
        },
        error: () => {
          this._err_msg.set(true);
        },
      });
  }
}
