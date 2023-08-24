import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isNotAuthenticatedGuardTsGuard } from './is-not-authenticated.guard.ts.guard';

describe('isNotAuthenticatedGuardTsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isNotAuthenticatedGuardTsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
