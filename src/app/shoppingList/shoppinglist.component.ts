import { Component, OnInit } from '@angular/core';
import {FormsModule,FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from "./../user";
import { NgFor } from '@angular/common';
import {ShoppingItem} from "./../shoppingItem";
import {ShoppingListService} from './shoppinglist.service';
@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html'
})

export class ShoppingListComponent implements OnInit{
	shoppingForm : FormGroup;
	name: string='';
	price:number;
	item :any;
	shoppingCartItems: ShoppingItem[]= [];
	constructor(private fb : FormBuilder,private shoppingListService : ShoppingListService){
		this.shoppingForm =fb.group({
			'name': ['',Validators.required],
			'price': ['',Validators.required]
		})
	}
	saveShopppingItem(item){
		this.shoppingListService.setItems(item);
		this.shoppingCartItems = this.shoppingListService.getItems();
	
	}
	ngOnInit(){
		this.shoppingCartItems = this.shoppingListService.getItems();
	}
}