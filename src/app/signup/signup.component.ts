import { Component, OnInit } from '@angular/core';
import {FormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignupService} from './signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	rForm : FormGroup;
	post :any;
	email: string ='';
	password:string ='';

  	constructor(private fb: FormBuilder,private service:SignupService) { 
  		this.rForm = fb.group({
  			'email' :[null,Validators.required],
  			'password' :[null,Validators.compose([Validators.required, Validators.minLength(30)])]
  		})

  	}

  	ngOnInit() {
  			
  	}
  	addPost(post){
  		this.email = post.email;
  		this.password = post.password;
  		
      this.service.setUserData(post);
  	}

}
