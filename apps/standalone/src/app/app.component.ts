import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '@lonely-or-not/standalone/header';

@Component({
  selector: 'lonely-or-not-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, HeaderComponent, CommonModule],
  standalone: true,
})
export class AppComponent {
  title = 'standalone';
}
