import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'meeza-auto-call';

  constructor(private router: Router) {}

  isSelected(path: string): boolean {
    console.log(this.router.url);
    if (!path) {
      if (this.router.url === '/') return true;
      else return false;
    }
    return this.router.url.includes(path);
  }
}
