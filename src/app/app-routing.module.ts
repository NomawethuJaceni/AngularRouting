import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent} from './angular/angular.component';
import {AwsComponent} from './aws/aws.component';
import { from } from 'rxjs';


const routes: Routes = [
 {path:'angular',component: AngularComponent},
 {path:'aws',component: AwsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
