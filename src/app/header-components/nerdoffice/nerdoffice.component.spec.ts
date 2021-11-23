import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerdofficeComponent } from './nerdoffice.component';

describe('NerdofficeComponent', () => {
  let component: NerdofficeComponent;
  let fixture: ComponentFixture<NerdofficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NerdofficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NerdofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
