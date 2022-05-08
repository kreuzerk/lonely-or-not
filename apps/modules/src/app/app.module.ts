import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModuleHeader } from '@lonely-or-not/module-header';

import { AppComponent } from './app.component';

const routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@lonely-or-not/module-home').then((m) => m.ModuleHome),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('@lonely-or-not/module-list').then((m) => m.ModuleList),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModuleHeader,
    RouterModule.forRoot(routes as any),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
