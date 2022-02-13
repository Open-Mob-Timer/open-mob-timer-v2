import { Component } from '@angular/core';
import { MobsService } from '@omt/web/data-access';
import { take } from 'rxjs';

@Component({
    selector: 'omt-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public constructor(private mobsService: MobsService) {}
    public onCreateMobClick(mobName: string): void {
        this.mobsService.createMob(mobName).pipe(take(1)).subscribe();
    }
}
