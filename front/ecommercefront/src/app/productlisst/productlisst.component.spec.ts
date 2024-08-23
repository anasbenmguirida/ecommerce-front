import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlisstComponent } from './productlisst.component';

describe('ProductlisstComponent', () => {
  let component: ProductlisstComponent;
  let fixture: ComponentFixture<ProductlisstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductlisstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlisstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
