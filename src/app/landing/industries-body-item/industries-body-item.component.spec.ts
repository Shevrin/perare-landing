import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesBodyItemComponent } from './industries-body-item.component';

describe('IndustriesBodyItemComponent', () => {
  let component: IndustriesBodyItemComponent;
  let fixture: ComponentFixture<IndustriesBodyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriesBodyItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesBodyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
