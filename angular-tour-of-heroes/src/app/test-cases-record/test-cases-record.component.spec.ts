import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCasesRecordComponent } from './test-cases-record.component';

describe('TestCasesRecordComponent', () => {
  let component: TestCasesRecordComponent;
  let fixture: ComponentFixture<TestCasesRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCasesRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCasesRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
