import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImg } from './my-img';

describe('MyImg', () => {
  let component: MyImg;
  let fixture: ComponentFixture<MyImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyImg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyImg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
