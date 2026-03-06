import { Component, input } from '@angular/core';
import { UserModel } from '../../shared/user_model';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.html',
  styleUrl: './user-info.scss',
})
export class UserInfo {
  user = input.required<any | null>();
}
