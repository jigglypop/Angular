import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateClassBindingComponent } from './template-class-binding.component';

describe('TemplateClassBindingComponent', () => {
  let component: TemplateClassBindingComponent;
  let fixture: ComponentFixture<TemplateClassBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateClassBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
