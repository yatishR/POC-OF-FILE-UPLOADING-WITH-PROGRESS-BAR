import { Injectable } from "@angular/core";

@Injectable({
 providedIn: 'root'
})

export class DataShareService {
    data:any;
    constructor(){}

   getData(){
       return this.data;
   }
   setData(data){
       this.data = data; 
   }
    
}