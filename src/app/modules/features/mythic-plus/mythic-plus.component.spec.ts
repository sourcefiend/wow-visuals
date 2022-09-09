import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MythicPlusComponent } from './mythic-plus.component';

describe('MythicPlusComponent', () => {
  let component: MythicPlusComponent;
  let fixture: ComponentFixture<MythicPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MythicPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MythicPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
