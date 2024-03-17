import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculatorsComponent } from './calculators/calculators.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'calculator/:name', component: CalculatorsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
