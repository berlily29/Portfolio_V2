import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  activeLink: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes('home') && this.router.url.includes('div1')) {
          this.activeLink = 'home';
        } else if (this.router.url.includes('home') && this.router.url.includes('div2')) {
          this.activeLink = 'about';
        } else if (this.router.url.includes('home') && this.router.url.includes('div3')) {
          this.activeLink = 'skills';
        } else if (this.router.url.includes('works')) {
          this.activeLink = 'works';
        }
      }
    });
  }
}
