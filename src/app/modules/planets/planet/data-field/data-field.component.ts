import { Component, OnInit, Input } from '@angular/core';
import { DataField } from 'src/app/data/modules/planets/models';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-data-field',
  templateUrl: './data-field.component.html',
  styleUrls: ['./data-field.component.scss']
})
export class DataFieldComponent implements OnInit {
  @Input() field: DataField;
  @Input() value: string | string[];

  constructor(private decimalPipe: DecimalPipe) { }

  ngOnInit(): void {
  }

  displayValue() {
    if (!this.value) {
      return '';
    }

    const isNumber = parseInt(this.value as string, 10);

    return isNumber ?
      this.decimalPipe.transform(isNumber) :
      this.value
  }

}
