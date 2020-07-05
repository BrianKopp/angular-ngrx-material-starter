import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedOutComponent } from './components/logged-out/logged-out.component';
import { RouterModule } from '@angular/router';
import { LoggedInComponent } from './components/logged-in/logged-in.component';



@NgModule({
  declarations: [LoggedOutComponent, LoggedInComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([{
      path: '',
      component: LoggedOutComponent
    }])
  ]
})
export class HomeModule { }
