import { Directive, ElementRef, Input,HostListener,EventEmitter,Output} from '@angular/core';

@Directive({selector:'[validateImage]'})

export class ImageUrlValidator{
	@Output() isValidUrl = new EventEmitter();

	constructor(private elm:ElementRef){
	}
  @HostListener('change') onChange() {
  	var imageUrl = this.elm.nativeElement.value;
  	if(!!this.isValidUrl){
  		var isCheck = imageUrl.match(/\.(jpeg|jpg|gif|png)$/) != null;
  		this.isValidUrl.emit({'isCheck':isCheck});
  	}
  }
}