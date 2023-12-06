import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-alert',
  templateUrl: './field-alert.component.html',
  styleUrls: ['./field-alert.component.scss']
})
export class FieldAlertComponent implements OnInit {

  @Input()
  public alertMessage = '';

  @Input()
  public hasError = false;

  constructor() { }

  ngOnInit(): void {
  }

}
