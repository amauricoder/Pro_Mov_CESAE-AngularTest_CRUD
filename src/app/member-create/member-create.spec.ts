import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberCreate } from './member-create';
import { RouterLink } from '@angular/router';

describe('MemberCreate', () => {
  let component: MemberCreate;
  let fixture: ComponentFixture<MemberCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberCreate, RouterLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
