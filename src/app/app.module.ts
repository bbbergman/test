import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import {MyService} from "./myservice.service";
import { FourComponent } from './four/four.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpService} from "./httpService.service";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MyService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
