import { Component } from '@angular/core';

@Component({
    selector: 'omt-web-home',
    templateUrl: './web-home.component.html',
    styleUrls: ['./web-home.component.scss']
})
export class WebHomeComponent {
    public createMob(): void {
        console.log('createMob');
    }
}
