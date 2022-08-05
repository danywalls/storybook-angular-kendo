
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmazingUiModule } from 'amazing-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmazingUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
