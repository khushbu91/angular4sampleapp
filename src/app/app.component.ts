import { Component } from '@angular/core';
import { Item } from 'ng2-simple-dropdown';

@Component({
  selector: 'app-root',
  template: '<app-header></app-header><router-outlet></router-outlet>'
})
export class AppComponent {
	 items:Item[]=[];

  constructor() {
  this.items = [new Item('Edit','Edit'),
  						new Item('Delete','Delete')] }


}