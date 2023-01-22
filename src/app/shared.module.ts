import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleOptionComponent } from './components/multiple-option/multiple-option.component';
import { MultiplePictureComponent } from './components/multiple-picture/multiple-picture.component';
import { BarProgressComponent } from './components/bar-progress/bar-progress.component';
import { CorrectMessageComponent } from './components/correct-message/correct-message.component';
import { IncorrectMesageComponent } from './components/incorrect-mesage/incorrect-mesage.component';



@NgModule({
  declarations: [
    MultipleOptionComponent,
    MultiplePictureComponent,
    BarProgressComponent,
    CorrectMessageComponent,
    IncorrectMesageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MultipleOptionComponent,
    MultiplePictureComponent,
    BarProgressComponent,
    CorrectMessageComponent,
    IncorrectMesageComponent
  ]
})
export class SharedModule { }
