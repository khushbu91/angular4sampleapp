import { Injectable } from '@angular/core';
import {User} from "./../user"

@Injectable()

export class SigninService{
	existingUsers: User[] = [];

	checkUserExistence(user){
		var data = this.getUserData();
		if(data){
			this.existingUsers = JSON.parse(data);
			for(var i=0;i<this.existingUsers.length;i++){
				if(this.existingUsers[i].email == user.email && this.existingUsers[i].password == user.password){
					return this.checkAuth(true);
				}else{
					return this.checkAuth(false);
				}
			}
		}
	}
	
	getUserData(){
		 return localStorage.getItem('users');
	}

	checkAuth(logInSuccess){
		return logInSuccess;
	}
}