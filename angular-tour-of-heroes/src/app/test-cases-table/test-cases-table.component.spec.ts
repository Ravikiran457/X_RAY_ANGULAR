import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCasesTableComponent } from './test-cases-table.component';

describe('TestCasesTableComponent', () => {
  let component: TestCasesTableComponent;
  let fixture: ComponentFixture<TestCasesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCasesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCasesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
