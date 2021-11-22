import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports:      [
    FlexLayoutModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [],
  exports: [
    FlexLayoutModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { } 