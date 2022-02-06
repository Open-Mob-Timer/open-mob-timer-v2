import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbFormFieldModule, NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home.component';
import { CreateMobComponent } from './components/create-mob/create-mob.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        NbFormFieldModule,
        NbInputModule,
        NbButtonModule,
        NbIconModule,
        NbEvaIconsModule
    ],
    declarations: [HomeComponent, CreateMobComponent],
    exports: [HomeComponent]
})
export class HomeModule {}
