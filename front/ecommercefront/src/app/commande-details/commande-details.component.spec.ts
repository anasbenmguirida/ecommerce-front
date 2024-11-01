import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeDetailsComponent } from './commande-details.component';

describe('CommandeDetailsComponent', () => {
  let component: CommandeDetailsComponent;
  let fixture: ComponentFixture<CommandeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
