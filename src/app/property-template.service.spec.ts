import { TestBed, inject } from '@angular/core/testing';

import { PropertyTemplateService } from './property-template.service';

describe('PropertyTemplateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyTemplateService]
    });
  });

  it('should be created', inject([PropertyTemplateService], (service: PropertyTemplateService) => {
    expect(service).toBeTruthy();
  }));
});
