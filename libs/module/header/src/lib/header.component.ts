import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <mat-toolbar color="primary">
      <nav>
        <a routerLink="home">Home</a>
        <a routerLink="list">List</a>
      </nav>
    </mat-toolbar>
  `,
  styles: [
    `
      nav {
        display: flex;
        gap: 20px;
      }

      a {
        cursor: pointer;
        color: white;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class HeaderComponent {}
