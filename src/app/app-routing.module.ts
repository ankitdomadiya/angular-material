import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { MainComponent } from './pages/main/main.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'buttons', component:ButtonsComponent
  },
  {
    path:'button-toggle',
    component:ButtonToggleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
