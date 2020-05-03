import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Data, Router } from "@angular/router";
import { DataShareService } from "../shared/common/services/data-share-service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit {
  fetchData: any;
  userId: FormControl;
  id: any;
  title: any;
  body: any;
  name = new FormControl("");
  // @Input() data;
  constructor(
    private formBuilder: FormBuilder,
    private dataShareService: DataShareService,
    private router : Router
  ) {}
  ngOnInit() {
    this.fetchData = this.dataShareService.getData();
    this.personalFormGroup.patchValue({
      userId: this.fetchData.userId,
      id: this.fetchData.id,
      title: this.fetchData.title,
      body: this.fetchData.body,
    });

    console.log(this.fetchData);
  }

  personalFormGroup = this.formBuilder.group({
    userId: new FormControl("", [Validators.required]),
    id: new FormControl("", [Validators.required]),
    title: new FormControl("", [Validators.required]),
    body: new FormControl("", [Validators.required]),
  });

  submitData() {
    let userData = {
      userId: this.personalFormGroup.controls.userId.value,
      id: this.personalFormGroup.controls.id.value,
      title: this.personalFormGroup.controls.title.value,
      body: this.personalFormGroup.controls.body.value,
    };
  }

  uploadDataFile(){
    this.router.navigate(["dashboard/file-upload"]);
  }
}
