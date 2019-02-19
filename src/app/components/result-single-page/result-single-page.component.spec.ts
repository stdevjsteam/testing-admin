import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSinglePageComponent } from './result-single-page.component';

describe('ResultSinglePageComponent', () => {
  let component: ResultSinglePageComponent;
  let fixture: ComponentFixture<ResultSinglePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSinglePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSinglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
