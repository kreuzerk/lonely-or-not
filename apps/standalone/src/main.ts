import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

const routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@lonely-or-not/standalone/home').then((c) => c.HomeComponent),
  },
  {
    path: 'list',
    loadComponent: () =>
      import('@lonely-or-not/standalone/list').then((c) => c.ListComponent),
  },
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes as any)),
    importProvidersFrom(BrowserAnimationsModule),
  ],
}).catch((err) => console.error(err));
