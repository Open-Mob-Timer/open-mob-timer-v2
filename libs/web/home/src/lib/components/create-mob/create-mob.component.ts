import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'omt-create-mob',
    templateUrl: './create-mob.component.html'
})
export class CreateMobComponent {
    @Output() public createMobClick: EventEmitter<string>;
    public mobName?: string;

    constructor() {
        this.createMobClick = new EventEmitter<string>();
    }

    public createMob(): void {
        this.createMobClick.emit(this.mobName);
    }
}
