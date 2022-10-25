import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustriesBodyHeaderComponent } from './industries-body-header.component';

describe('IndustriesBodyHeaderComponent', () => {
  let component: IndustriesBodyHeaderComponent;
  let fixture: ComponentFixture<IndustriesBodyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustriesBodyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustriesBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
