import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertListComponent } from './propert-list.component';

describe('PropertListComponent', () => {
  let component: PropertListComponent;
  let fixture: ComponentFixture<PropertListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertListComponent]
    });
    fixture = TestBed.createComponent(PropertListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
