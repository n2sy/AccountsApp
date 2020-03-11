import { TestBed } from '@angular/core/testing';

import { ManageAccountsService } from './manage-accounts.service';

describe('ManageAccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageAccountsService = TestBed.get(ManageAccountsService);
    expect(service).toBeTruthy();
  });
});
