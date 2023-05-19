import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { MainComponent } from './pages/main/main.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { BedgeComponent } from './pages/bedge/bedge.component';
import { BottomSheetComponent } from './pages/bottom-sheet/bottom-sheet.component';
import { CardComponent } from './pages/card/card.component';
import { CheckBoxComponent } from './pages/check-box/check-box.component';
import { ChipsComponent } from './pages/chips/chips.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { DialogComponent } from './pages/dialog/dialog.component';

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
  },
  {
    path:'bedge',
    component:BedgeComponent
  },
  {
    path:'bottom-sheet',
    component:BottomSheetComponent
  },
  {
    path:'card',
    component:CardComponent
  },
  {
    path:'check-box',
    component:CheckBoxComponent
  },
  {
    path:'chips',
    component:ChipsComponent
  },
  {
    path:'datepicker',
    component:DatepickerComponent
  },
  {
    path:'dialog',
    component:DialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
