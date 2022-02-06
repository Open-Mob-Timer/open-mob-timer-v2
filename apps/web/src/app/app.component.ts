import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'omt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('here');
    }
}
