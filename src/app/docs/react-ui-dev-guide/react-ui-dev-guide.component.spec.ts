import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactUiDevGuideComponent } from './react-ui-dev-guide.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('ReactUiDevGuideComponent', () => {
  let component: ReactUiDevGuideComponent;
  let fixture: ComponentFixture<ReactUiDevGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ReactUiDevGuideComponent]
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
