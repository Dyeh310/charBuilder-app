import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoComponentFoundComponent } from './no-component-found.component';

describe('NoComponentFoundComponent', () => {
  let component: NoComponentFoundComponent;
  let fixture: ComponentFixture<NoComponentFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoComponentFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoComponentFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
