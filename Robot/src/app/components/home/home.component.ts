import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

    result: string;

    constructor() {
        this.result = "yeah!";
    }

    ngOnInit(): void {
    }

}