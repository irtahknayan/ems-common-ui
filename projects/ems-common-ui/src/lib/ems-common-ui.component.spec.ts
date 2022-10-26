import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsCommonUiComponent } from './ems-common-ui.component';

describe('EmsCommonUiComponent', () => {
  let component: EmsCommonUiComponent;
  let fixture: ComponentFixture<EmsCommonUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsCommonUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsCommonUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
