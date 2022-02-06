import { Component, Inject, OnInit } from '@angular/core';
import { ENVIRONMENT, Environment } from '@omt/web/core';

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
