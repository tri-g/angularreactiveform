import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {MustMatch} from './must-matchvalidator'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveformvalidation';
  registerForm:FormGroup;
  submit=false;
  constructor(private formbuilder:FormBuilder){}
  ngOnInit()
  {
  this.registerForm=this.formbuilder.group({
  	firstname:['',Validators.required],
  	lastname:['',Validators.required],
  	email:['',[Validators.required,Validators.email]],
  	password:['',[Validators.required,Validators.minLength(6)]],
  	confirmPassword:['',Validators.required]},
  	{ validator: MustMatch('password','confirmPassword')});
}
get f()
{
  return this.registerForm.controls;
}
onsubmit()
{
  this.submit=true;
  if(this.registerForm.invalid)
  {
    return;
  }
  alert("success"+JSON.stringify(this.registerForm.value));
}
}
