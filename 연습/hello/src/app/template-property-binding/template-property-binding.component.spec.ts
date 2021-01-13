import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePropertyBindingComponent } from './template-property-binding.component';

describe('TemplatePropertyBindingComponent', () => {
  let component: TemplatePropertyBindingComponent;
  let fixture: ComponentFixture<TemplatePropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatePropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
