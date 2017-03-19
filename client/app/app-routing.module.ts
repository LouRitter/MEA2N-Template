import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { FeedComponent } from "./feed/feed.component";
import { ModuleWithProviders }         from '@angular/core';
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: "feed", component: FeedComponent },
  { path: '**', redirectTo: '' },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
