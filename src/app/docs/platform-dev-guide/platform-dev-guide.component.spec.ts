import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformDevGuideComponent } from './platform-dev-guide.component';

describe('PlatformDevGuideComponent', () => {
  let component: PlatformDevGuideComponent;
  let fixture: ComponentFixture<PlatformDevGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformDevGuideComponent ]
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
