import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormSerService } from 'src/app/services/form-ser.service';



@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css'],
})
export class FormCompComponent implements OnInit {
  myForm!: FormGroup;
  formData=this._FormSerService.formData;

  constructor(private fb: FormBuilder,private _FormSerService:FormSerService) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [''],
      age: [''],
      email: [''],
    });

  }

  onSubmit(){
    console.log(this.myForm.value);
  }




}
