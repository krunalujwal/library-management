import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './routes/app-routing.module';
import { OnboardComponent } from './layout/onboard/onboard.component';
import { OnboardModule } from './modules/onboard/onboard.module';
import { AdminModule } from './layout/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    OnboardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    OnboardModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
