import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnstatisticsComponent } from './unstatistics.component';

describe('UnstatisticsComponent', () => {
  let component: UnstatisticsComponent;
  let fixture: ComponentFixture<UnstatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnstatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnstatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
