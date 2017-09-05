import { Component, OnInit} from '@angular/core';
import {SigninService} from "./../signin/signin.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit{
	isUserLoggedIn:string;
  	constructor(private signinService :SigninService){}
  	ngOnInit() {
  		this.signinService.isUserLoggedIn.subscribe(isUserLoggedIn => this.isUserLoggedIn = isUserLoggedIn);
  	}
}