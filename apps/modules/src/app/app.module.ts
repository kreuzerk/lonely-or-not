import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from '@lonely-or-not/header-module';
import { ShellModule } from '@lonely-or-not/shell-module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HeaderModule, ShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
