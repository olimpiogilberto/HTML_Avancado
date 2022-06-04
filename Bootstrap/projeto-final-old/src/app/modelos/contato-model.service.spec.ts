import { TestBed } from '@angular/core/testing';

import { ContatoModelService } from './contato-model.service';

describe('ContatoModelService', () => {
  let service: ContatoModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
