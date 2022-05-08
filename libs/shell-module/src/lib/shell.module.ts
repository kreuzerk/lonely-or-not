import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@lonely-or-not/home-module').then((m) => m.HomeModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('@lonely-or-not/list-module').then((m) => m.ListModule),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes as any)],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
