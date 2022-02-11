import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableOptionsComponent } from './available-options.component';

describe('AvailableOptionsComponent', () => {
  let component: AvailableOptionsComponent;
  let fixture: ComponentFixture<AvailableOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
