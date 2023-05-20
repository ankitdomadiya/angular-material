import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './appModules/mat.module';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { ButtonToggleComponent } from './pages/button-toggle/button-toggle.component';
import { BedgeComponent } from './pages/bedge/bedge.component';
import { BottomSheetComponent } from './pages/bottom-sheet/bottom-sheet.component';
import { CardComponent } from './pages/card/card.component';
import { CheckBoxComponent } from './pages/check-box/check-box.component';
import { ChipsComponent } from './pages/chips/chips.component';
import { DatepickerComponent } from './pages/datepicker/datepicker.component';
import { DividerComponent } from './pages/divider/divider.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    BedgeComponent,
    BottomSheetComponent,
    CardComponent,
    CheckBoxComponent,
    ChipsComponent,
    DatepickerComponent,
    DividerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // import mat module
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
