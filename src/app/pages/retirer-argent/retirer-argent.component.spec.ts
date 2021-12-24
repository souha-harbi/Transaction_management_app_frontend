import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirerArgentComponent } from './retirer-argent.component';

describe('RetirerArgentComponent', () => {
  let component: RetirerArgentComponent;
  let fixture: ComponentFixture<RetirerArgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirerArgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirerArgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
