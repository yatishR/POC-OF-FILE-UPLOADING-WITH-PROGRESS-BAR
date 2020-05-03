import { Directive,ElementRef,AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appCommon]'
})
export class CommonDirective implements AfterViewInit {

  constructor(private eleref:ElementRef) { 
    
  }
  ngAfterViewInit(){
    this.eleref.nativeElement.style.color='red';
  }
  change(changeColor:string){
    this.eleref.nativeElement.style.color=changeColor;
  }

}
