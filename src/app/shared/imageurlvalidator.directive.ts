import { Directive, ElementRef, Input,HostListener } from '@angular/core';

@Directive({selector:'[validateImage]'})

export class ImageUrlValidator{
	isValidUrl :Boolean = true;
	constructor(private elm:ElementRef){
	}
  @HostListener('blur') onBlur() {
  	var imageUrl = this.elm.nativeElement.value;
  	if(!!this.isValidUrl){
  		this.isValidUrl = imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null;
  	}
  }
}