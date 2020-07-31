import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule, HttpClientModule],
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});