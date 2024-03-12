import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParComponenet } from '../components/par/par.component';
import { HeadComponent } from '../components/head/head.component';

@NgModule({
  declarations: [AppComponent, ParComponenet, HeadComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
