import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Auth }       from '../auth.service';

@Component({
    moduleId: module.id,
    selector: "home-page",
    templateUrl: "home.component.html",
    styleUrls: ["home.component.css"]
})

export class HomeComponent implements OnInit {
    constructor(private auth: Auth) {}
    ngOnInit(): void {}

}