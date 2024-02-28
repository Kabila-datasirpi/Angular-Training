import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestcomponentComponent } from './restcomponent.component';

describe('RestcomponentComponent', () => {
  let component: RestcomponentComponent;
  let fixture: ComponentFixture<RestcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
