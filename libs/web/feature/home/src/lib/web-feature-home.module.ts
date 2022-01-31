import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbFormFieldModule, NbInputModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { WebFeatureHomeComponent } from './web-home.component';

@NgModule({
    imports: [CommonModule, NbFormFieldModule, NbInputModule, NbButtonModule, NbIconModule, NbEvaIconsModule],
    declarations: [WebFeatureHomeComponent],
    exports: [WebFeatureHomeComponent]
})
export class WebFeatureHomeModule {}
