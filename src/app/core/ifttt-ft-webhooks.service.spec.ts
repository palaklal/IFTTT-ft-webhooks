import { TestBed } from '@angular/core/testing';

import { IftttFtWebhooksService } from './ifttt-ft-webhooks.service';

describe('IftttFtWebhooksService', () => {
  let service: IftttFtWebhooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IftttFtWebhooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
