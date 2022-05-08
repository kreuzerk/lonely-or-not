import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'header',
  imports: [CommonModule, MatToolbarModule, RouterModule],
  standalone: true,
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
