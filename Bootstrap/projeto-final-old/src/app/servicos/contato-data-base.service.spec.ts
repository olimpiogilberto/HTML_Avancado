import { TestBed } from '@angular/core/testing';

import { ContatoDataBaseService } from './contato-data-base.service';

describe('ContatoDataBaseService', () => {
  let service: ContatoDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
