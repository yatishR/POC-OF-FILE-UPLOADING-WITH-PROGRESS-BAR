import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from 'src/app/shared/common/services/data-share-service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() data;
  objData: any;
  //private testdata:any 
  constructor(
    private router:Router,
    private dataShareService :DataShareService
    ) { }

  ngOnInit() {
    //this.data;
   // debugger;
  }

  gotoNextPage(objData){
    this.dataShareService.setData(objData);
    this.router.navigate(["user-details"]);
  }
  gotoUploadFilepage(){
    this.router.navigate(["dashboard/file-upload"]);
  }

}
