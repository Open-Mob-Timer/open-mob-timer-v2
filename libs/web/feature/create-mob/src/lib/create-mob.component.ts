import { Component } from '@angular/core';

@Component({
    selector: 'omt-create-mob',
    templateUrl: './create-mob.component.html',
    styleUrls: ['./create-mob.component.scss']
})
export class CreateMobComponent {
    public createMob(): void {
        console.log('createMob');
    }
}
