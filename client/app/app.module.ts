import "./rxjs-extensions";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FeedComponent } from "./feed/feed.component";
import { appRoutingProviders } from './app-routing.module';
import { Auth } from './auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent, 
    HomeComponent,
    FeedComponent
  ],
  providers: [ appRoutingProviders, AUTH_PROVIDERS],
  bootstrap: [ AppComponent ]
})

export class AppModule { }