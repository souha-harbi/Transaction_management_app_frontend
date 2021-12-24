import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerArgentComponent } from './deposer-argent.component';

describe('DeposerArgentComponent', () => {
  let component: DeposerArgentComponent;
  let fixture: ComponentFixture<DeposerArgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeposerArgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeposerArgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
