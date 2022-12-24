import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import {
  ProfileIntroComponent,
  ProfileJourneyComponent,
  ProfileLayoutComponent,
} from './profile-compos/index';

@NgModule({
  declarations: [
    AppComponent,
    ProfileLayoutComponent,
    ProfileIntroComponent,
    ProfileJourneyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
