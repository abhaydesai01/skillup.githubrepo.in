import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLink } from './blog-link';

describe('BlogLink', () => {
  let component: BlogLink;
  let fixture: ComponentFixture<BlogLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
