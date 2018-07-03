import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule' }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ]
})

export class AppRoutingModule {
}
