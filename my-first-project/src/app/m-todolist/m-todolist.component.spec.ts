import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTodolistComponent } from './m-todolist.component';

describe('MTodolistComponent', () => {
  let component: MTodolistComponent;
  let fixture: ComponentFixture<MTodolistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTodolistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
