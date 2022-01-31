import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbFormFieldModule, NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { WebHomeComponent } from './web-home.component';

@NgModule({
    imports: [CommonModule, NbFormFieldModule, NbInputModule, NbButtonModule, NbIconModule, NbEvaIconsModule],
    declarations: [WebHomeComponent],
    exports: [WebHomeComponent]
})
export class WebHomeModule {}
