import { Component, OnInit } from '@angular/core';
import {FormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  	constructor(private fb: FormBuilder) { 
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
  		console.log(post);
  	}

}
