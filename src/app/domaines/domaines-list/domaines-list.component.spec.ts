import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainesListComponent } from './domaines-list.component';

describe('DomainesListComponent', () => {
  let component: DomainesListComponent;
  let fixture: ComponentFixture<DomainesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomainesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
