import { SharedModule } from './shared..module';
import { MatrialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './registrationpage/one/one.component';
import { TwoComponent } from './registrationpage/two/two.component';
import { ThreeComponent } from './registrationpage/three/three.component';
import { FourComponent } from './registrationpage/four/four.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatrialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
