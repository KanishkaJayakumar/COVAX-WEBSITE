import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcenterpageComponent } from './addcenterpage.component';

describe('AddcenterpageComponent', () => {
  let component: AddcenterpageComponent;
  let fixture: ComponentFixture<AddcenterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddcenterpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcenterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
