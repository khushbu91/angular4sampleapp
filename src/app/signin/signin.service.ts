import { Injectable } from '@angular/core';
import {User} from "./../user"
import { CookieService } from 'ngx-cookie-service';

@Injectable()

export class SigninService{
	existingUsers: User[] = [];

	constructor(private cookieService : CookieService){

	}
	checkUserExistence(user){
		var data = this.getUserData();
		var today = new Date();
		var sessionExpireTime = new Date(today).setSeconds(today.getMinutes()+1);
		if(data){
			this.existingUsers = JSON.parse(data);
			for(var i=0;i<this.existingUsers.length;i++){
				if(this.existingUsers[i].email == user.email && this.existingUsers[i].password == user.password){
					this.cookieService.set("loginSession",'true',sessionExpireTime);
					return true
				}else{
					return false;
				}
			}
		}
	}
	getUserData(){
		 return localStorage.getItem('users');
	}
}