import "./rxjs-extensions";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { FeedComponent } from "./feed/feed.component";
import { routing,
         appRoutingProviders } from './app.routes';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    routing
  ],
  declarations: [
    AppComponent, 
    HomeComponent,
    FeedComponent
  ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }