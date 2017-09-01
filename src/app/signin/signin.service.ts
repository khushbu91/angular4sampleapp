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
					console.log("success");
				}else{
					console.log("Doesn't Exist");
				}
			}
		}
	}
	
	getUserData(){
		 return localStorage.getItem('users');
	}
}