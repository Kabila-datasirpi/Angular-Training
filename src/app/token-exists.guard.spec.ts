import { TestBed } from '@angular/core/testing';



describe('TokenExistsGuard', () => {
  let guard: TokenExistsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TokenExistsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
