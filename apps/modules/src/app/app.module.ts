import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from '@lonely-or-not/header-module';
import { ListModule } from '@lonely-or-not/list-module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HeaderModule, ListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
