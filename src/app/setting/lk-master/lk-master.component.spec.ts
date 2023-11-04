import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LkMasterComponent } from './lk-master.component';

describe('LkMasterComponent', () => {
  let component: LkMasterComponent;
  let fixture: ComponentFixture<LkMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LkMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LkMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
