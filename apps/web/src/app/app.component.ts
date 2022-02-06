import { Component, Inject, OnInit } from '@angular/core';
import { Environment } from '../environments/environment.interface';
import { ENVIRONMENT } from '../environments/environment.token';

@Component({
    selector: 'omt-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(@Inject(ENVIRONMENT) private environment: Environment) {}

    public ngOnInit(): void {
        console.log(this.environment);
    }
}
