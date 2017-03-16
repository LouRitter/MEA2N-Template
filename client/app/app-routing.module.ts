import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { FeedComponent } from "./feed/feed.component";
import { ModuleWithProviders }         from '@angular/core';
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "feed", component: FeedComponent }
];

export const appRoutingProviders: any[] = [

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}