import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
    MatButtonModule,
    MatStepperModule,
 } from '@angular/material'

@NgModule({
  imports:[
    CommonModule,
    MatButtonModule,
    MatStepperModule,
  
  ],
  exports:[
    MatStepperModule,
  ],
  providers:[]

})
export class MaterialModule{}