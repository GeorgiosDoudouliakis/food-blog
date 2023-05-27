/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Place your component imports here */
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

/* Place your service imports here */
import { RandomMealService } from './services/random-meal.service';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), LoaderComponent],
    declarations: [HomeComponent],
    providers: [RandomMealService],
})
export class HomeModule {}
