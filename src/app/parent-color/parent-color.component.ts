import { Component, OnInit, ViewChild} from '@angular/core';
import { CommonDirective } from '../common.directive';


@Component({
  selector: 'app-parent-color',
  templateUrl: './parent-color.component.html',
  styleUrls: ['./parent-color.component.scss']
})
export class ParentColorComponent implements OnInit {
 //@ViewChild(CommonDirective) commonDirective:CommonDirective;
 //@ViewChild(CommonDirective) commonDirective:CommonDirective

//  changeColor(color:string){
//    this.commonDirective.change(color);
//  }
//  changeColor1(color:string){
//   this.commonDirective.change(color);
// }
  constructor() { }

  ngOnInit() {
  }


}
