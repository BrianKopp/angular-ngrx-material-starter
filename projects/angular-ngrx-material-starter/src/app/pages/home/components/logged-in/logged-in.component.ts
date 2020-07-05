import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
