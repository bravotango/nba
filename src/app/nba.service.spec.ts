import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NbaService } from './nba.service';

describe('NbaService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: NbaService = TestBed.get(NbaService);
    expect(service).toBeTruthy();
  });
});
