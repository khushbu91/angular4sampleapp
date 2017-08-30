import { Injectable } from '@angular/core';
import {User} from "./../user"

export class SigninService{
	
	existingUsers: User[] =[];
	setUserData(user){
		var existingUsers = this.getUserData();
		if(existingUsers){
			existingUsers = JSON.parse(existingUsers);
		}
		existingUsers.push(user);
	}
	getUserData(){
		 return localStorage.getItem('users');
	}
}