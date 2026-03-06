import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeChanger {
  private LOCALSTORAGE_KEY = 'devfinder';

  isDark = signal<boolean>(JSON.parse(localStorage.getItem(this.LOCALSTORAGE_KEY) ?? 'false'));

  constructor() {
    effect(() => {
      const dark = this.isDark();
      document.body.classList.toggle('dark', dark);
      localStorage.setItem(this.LOCALSTORAGE_KEY, JSON.stringify(dark));
    });
  }

  changeTheme(new_theme: boolean): void {
    this.isDark.set(new_theme);
  }
}
