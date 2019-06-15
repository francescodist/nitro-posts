import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: CrudService<any> = TestBed.get(CrudService);
    expect(service).toBeTruthy();
  });
});
