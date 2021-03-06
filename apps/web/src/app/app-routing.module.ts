import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('@omt/web/feature/home').then((module) => module.HomeModule) },
    { path: ':id', loadChildren: () => import('@omt/web/feature/mob').then((module) => module.MobModule) },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
