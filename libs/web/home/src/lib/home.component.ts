import { Component } from '@angular/core';

@Component({
    selector: 'omt-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public onCreateMobClick(mobName: string): void {
        console.log(mobName);
    }
}
