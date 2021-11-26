import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformDevGuideComponent } from './platform-dev-guide.component';

import { RouterTestingModule } from '@angular/router/testing';

describe('PlatformDevGuideComponent', () => {
  let component: PlatformDevGuideComponent;
  let fixture: ComponentFixture<PlatformDevGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PlatformDevGuideComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformDevGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
