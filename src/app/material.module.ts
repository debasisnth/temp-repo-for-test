
import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
//import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';


@NgModule ({
  imports: [
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    //MatStepperModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports:[
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    //MatStepperModule,
    MatFormFieldModule,
    MatCardModule
  ]

})
export class MatrialModule {}