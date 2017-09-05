import { Component, OnInit} from '@angular/core';
import {FormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {SigninService} from './signin.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
	rForm : FormGroup;
	post :any;
	email: string ='';
	password:string ='';
  	constructor(private fb: FormBuilder,private service:SigninService, private router : Router) {
  		this.rForm = fb.group({
  			'email' :[null,Validators.required],
  			'password' :[null,Validators.compose([Validators.required, Validators.minLength(30)])]
  		})

  	}

  	ngOnInit() {
  			
  	}
  	addPost(post){
      var logInStatus = this.service.checkUserExistence(post);
      if(logInStatus){
        this.router.navigateByUrl("/shoppingList");
      }else{
        alert("Login id and password mismatch");
      }
  	}

}
