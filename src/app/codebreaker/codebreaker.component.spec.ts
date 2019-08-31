import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodebreakerComponent } from './codebreaker.component';

describe('CodebreakerComponent', () => {
  let component: CodebreakerComponent;
  let fixture: ComponentFixture<CodebreakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodebreakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodebreakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
