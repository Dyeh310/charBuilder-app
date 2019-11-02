import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterConfirmationComponent } from './character-confirmation.component';

describe('CharacterConfirmationComponent', () => {
  let component: CharacterConfirmationComponent;
  let fixture: ComponentFixture<CharacterConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
