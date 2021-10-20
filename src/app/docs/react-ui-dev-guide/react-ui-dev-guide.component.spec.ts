import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactUiDevGuideComponent } from './react-ui-dev-guide.component';

describe('ReactUiDevGuideComponent', () => {
  let component: ReactUiDevGuideComponent;
  let fixture: ComponentFixture<ReactUiDevGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactUiDevGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactUiDevGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
