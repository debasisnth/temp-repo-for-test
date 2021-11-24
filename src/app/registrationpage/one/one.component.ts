import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  selectFormControl = new FormControl('', Validators.required);
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }


  goToTwo(){
    console.log("goToTwo...");
  }

}
