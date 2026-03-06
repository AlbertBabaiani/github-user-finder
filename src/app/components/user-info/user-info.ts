import { Component, input } from '@angular/core';
import { UserModel } from '../../shared/user_model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-info',
  imports: [DatePipe],
  templateUrl: './user-info.html',
  styleUrl: './user-info.scss',
})
export class UserInfo {
  user = input.required<UserModel | null>();

  formatUrl(url: string | null | undefined): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    return `https://${url}`;
  }
}
