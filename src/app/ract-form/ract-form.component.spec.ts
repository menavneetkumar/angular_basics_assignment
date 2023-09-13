import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RactFormComponent } from './ract-form.component';

describe('RactFormComponent', () => {
  let component: RactFormComponent;
  let fixture: ComponentFixture<RactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RactFormComponent]
    });
    fixture = TestBed.createComponent(RactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
