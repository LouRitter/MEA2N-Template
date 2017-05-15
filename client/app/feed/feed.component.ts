import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "feed-page",
    templateUrl: "feed.component.html",
    styleUrls: ["feed.component.css"]
})

export class FeedComponent implements OnInit {
    constructor(private router: Router) {}
    
    ngOnInit(): void {}

}