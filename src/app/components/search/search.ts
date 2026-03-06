import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  searched_user = signal<string>('');

  searchUser = output<string>();

  submit() {
    if (!this.searched_user().trim().length) return;

    this.searchUser.emit(this.searched_user().trim());
    this.searched_user.set('');
  }
}
