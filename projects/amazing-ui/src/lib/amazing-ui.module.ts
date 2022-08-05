import { NgModule } from '@angular/core';
import { AmazingButtonComponent } from './amazing-button/amazing-button.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';



@NgModule({
  declarations: [
    AmazingButtonComponent
  ],
  imports:[
    ButtonsModule
  ],
  exports: [
    AmazingButtonComponent
  ]
})
export class AmazingUiModule { }
