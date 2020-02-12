import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
  myGroup: FormGroup;

  
  constructor(private formbuilder:FormBuilder,private router:Router) {

    
   }

  ngOnInit() {
    this.myGroup = new FormGroup({
      firstName: new FormControl(),
      address: new FormControl(),
   });


  }
  submit() {
    this.router.navigateByUrl('aws');
  }

}
