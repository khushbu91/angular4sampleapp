import { Injectable } from '@angular/core';
import {User} from "./../user"
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class SigninService{
	existingUsers: User[] = [];
	private logInState = new BehaviorSubject<string>("false");
	isUserLoggedIn = this.logInState.asObservable();
	constructor(private cookieService : CookieService){}

	checkUserExistence(user){
		var data = this.getUserData();
		var date = new Date();
		date.setTime(date.getTime() + (10 * 1000));
		if(data){
			this.existingUsers = JSON.parse(data);
			for(var i=0;i<this.existingUsers.length;i++){
				if(this.existingUsers[i].email == user.email && this.existingUsers[i].password == user.password){
					this.cookieService.set("loginSession",'true',date);
					this.checkAuth();
					return true
				}else{
					this.checkAuth();
					return false;
				}
			}
		}
	}

	getUserData(){
		 return localStorage.getItem('users');
	}

	checkAuth(){
		var isLoggedIn = this.cookieService.get("loginSession");
		this.logInState.next(isLoggedIn);
		if(isLoggedIn == "true"){
			//return true;
		}
	}
}