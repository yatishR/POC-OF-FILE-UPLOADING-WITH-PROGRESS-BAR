import { Component, OnInit } from '@angular/core';
import { DataService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private allData:any;
  constructor(private dataService:DataService) { }
  //parentmesg="hello";
  ngOnInit() {
   this.getData();
  }

  getData(){
    this.dataService.getConfig().subscribe(data=>{
     this.allData  = data;
    });
}

}
