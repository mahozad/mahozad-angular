import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutographComponent } from './autograph.component';

describe('AutographComponent', () => {
  let component: AutographComponent;
  let fixture: ComponentFixture<AutographComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutographComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
