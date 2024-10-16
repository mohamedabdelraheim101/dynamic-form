import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormSerService } from 'src/app/services/form-ser.service';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.css']
})
export class SecondFormComponent implements OnInit {

myForm!:FormGroup;
formData=this._FormSerService.formData;



  constructor(private fb:FormBuilder,private _FormSerService:FormSerService ) { }

  ngOnInit(): void {
this.myForm=this.fb.group({
name:[''],
age:[''],

})

   
   
  }

onSubmit(){
  
}

}
