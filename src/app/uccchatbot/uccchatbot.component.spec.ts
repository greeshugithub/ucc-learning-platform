import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UccchatbotComponent } from './uccchatbot.component';

describe('UccchatbotComponent', () => {
  let component: UccchatbotComponent;
  let fixture: ComponentFixture<UccchatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UccchatbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UccchatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
