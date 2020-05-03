import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File = null;
  fileName: string;
  fileSize: any;
  fileType: any;
  uploader:any;
  hasBaseDropZoneOver:boolean;
  hasAnotherDropZoneOver:boolean;
  response:string;
  progress: string;
  downlodaSpeed: string;
  time: string;
  size: string;
  value: string;
 
  constructor() { }

  ngOnInit() {
    this.progress ='0';  
    //this.progressvar();

  }
 
  handleFileInput(files: FileList) {
    if(files.item(0)){
      this.value=null;
    }
    this.fileToUpload = files.item(0);
    this.fileName= files.item(0).name;
    this.fileSize = files.item(0).size;
    this.fileType = files.item(0).type;
    //this.progress = '80';  
}

     

    uploadFile(){
      this.value=null;
      if(this.fileToUpload){
        setTimeout (() => {
          this.progressvar();
       }, 1000);
      }
      else{
        this.value=" * please add file for upload";
      }
      
    }

    progressvar(){
      this.progress = '100';
      this.downlodaSpeed="5.91MBps";
      this.time = "1:28";
      this.size = "46.78MB";
    }

 



}
