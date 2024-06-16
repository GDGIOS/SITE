import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaixaComponent } from './faixa.component';

describe('FaixaComponent', () => {
  let component: FaixaComponent;
  let fixture: ComponentFixture<FaixaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaixaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaixaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
