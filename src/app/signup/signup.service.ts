import { Injectable } from '@angular/core';
import {User} from "./../user"

@Injectable()

export class SignupService{
	existingUsers: User[] = [];

	setUserData(user){
		var data = this.getUserData();
		if(data){
			this.existingUsers = JSON.parse(data);
		}
		this.existingUsers.push(user);
		localStorage.setItem("users",JSON.stringify(this.existingUsers));
	}
	getUserData(){
		 return localStorage.getItem('users');
	}
}
