import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrl: './topnavbar.component.scss'
})
export class TopnavbarComponent {
  activeLink: string = 'home';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes('home')) {
          this.activeLink = 'home';
        } else if (this.router.url.includes('works')) {
          this.activeLink = 'works';
        }
        else if (this.router.url.includes('about')) {
          this.activeLink = 'about';
        }
        else if (this.router.url.includes('contact')) {
          this.activeLink = 'contact';
        }
      }
    });
  }
}
