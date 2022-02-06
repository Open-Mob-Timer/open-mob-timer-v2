import { ENVIRONMENT } from './environments/environment.token';
import { environment } from './environments/environment';

import { NgModule } from '@angular/core';

@NgModule({
    providers: [
        {
            provide: ENVIRONMENT,
            useValue: environment
        }
    ]
})
export class CoreModule {}
