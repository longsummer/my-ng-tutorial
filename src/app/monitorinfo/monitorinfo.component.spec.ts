import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorinfoComponent } from './monitorinfo.component';

describe('MonitorinfoComponent', () => {
  let component: MonitorinfoComponent;
  let fixture: ComponentFixture<MonitorinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
