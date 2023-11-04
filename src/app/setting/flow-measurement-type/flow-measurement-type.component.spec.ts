import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowMeasurementTypeComponent } from './flow-measurement-type.component';

describe('FlowMeasurementTypeComponent', () => {
  let component: FlowMeasurementTypeComponent;
  let fixture: ComponentFixture<FlowMeasurementTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowMeasurementTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowMeasurementTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
