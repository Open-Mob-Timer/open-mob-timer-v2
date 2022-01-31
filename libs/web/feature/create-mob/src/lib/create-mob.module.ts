import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMobComponent } from './create-mob.component';
import { NbFormFieldModule, NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
    imports: [CommonModule, NbFormFieldModule, NbInputModule, NbButtonModule, NbIconModule, NbEvaIconsModule],
    declarations: [CreateMobComponent],
    exports: [CreateMobComponent]
})
export class CreateMobModule {}
