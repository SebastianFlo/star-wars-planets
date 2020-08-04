import { Component, OnInit, Input } from '@angular/core';
import { DataField } from 'src/app/data/modules/planets/models';

@Component({
  selector: 'app-data-field',
  templateUrl: './data-field.component.html',
  styleUrls: ['./data-field.component.scss']
})
export class DataFieldComponent implements OnInit {
  @Input() field: DataField;
  @Input() value: string | string[];

  constructor() { }

  ngOnInit(): void {
  }

}
