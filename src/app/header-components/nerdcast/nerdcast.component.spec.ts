import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerdcastComponent } from './nerdcast.component';

describe('NerdcastComponent', () => {
  let component: NerdcastComponent;
  let fixture: ComponentFixture<NerdcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NerdcastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NerdcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
