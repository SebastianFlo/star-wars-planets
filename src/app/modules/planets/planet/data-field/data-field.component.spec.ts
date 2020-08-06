import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFieldComponent } from './data-field.component';

describe('DataFieldComponent', () => {
  let component: DataFieldComponent;
  let fixture: ComponentFixture<DataFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set the name as UPPERCASE', () => {
    component.field = {
      field: 'name',
      name: 'Navn',
      order: 0
    };

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.planet-data-field-name').innerText).toEqual('NAVN');
  });

  it('should set the value', () => {
    component.value = 'Death Star';

    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.planet-data-field-value').innerText).toEqual('Death Star');
  });
});
