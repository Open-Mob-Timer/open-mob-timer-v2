import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MobComponent } from './mob.component';

@NgModule({
    imports: [RouterModule.forChild([{ path: '', pathMatch: 'full', component: MobComponent }])],
    exports: [RouterModule]
})
export class MobRoutingModule {}
