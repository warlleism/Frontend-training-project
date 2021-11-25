import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerdPlayerComponent } from './nerd-player.component';

describe('NerdPlayerComponent', () => {
  let component: NerdPlayerComponent;
  let fixture: ComponentFixture<NerdPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NerdPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NerdPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
