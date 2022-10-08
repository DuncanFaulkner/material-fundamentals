import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleControlsComponent } from './simple-controls.component';

describe('SimpleControlsComponent', () => {
  let component: SimpleControlsComponent;
  let fixture: ComponentFixture<SimpleControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
