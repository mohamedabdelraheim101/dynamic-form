import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


export class FormSerService {
  constructor() {}

formData=[
{label:'name',type:'text',class:'',FormControlName:'name'},
{label:'age',type:'number',class:'',FormControlName:'age'},


]
  // formData = [
  //   { label: 'Name', type: 'text', formControlName: 'name' },
  //   { label: 'Age', type: 'number', formControlName: 'age' },
  //   { label: 'Email', type: 'email', formControlName: 'email' },
  // ];
}
