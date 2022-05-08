import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModuleHeader } from '@lonely-or-not/module-header';
import { ModuleShell } from '@lonely-or-not/module-shell';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ModuleHeader, ModuleShell],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
