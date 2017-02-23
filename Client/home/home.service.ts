// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// ────────────────────────────────────────────────────────────────────────────────

@Injectable()
export class HomeService {
  constructor(private http: Http) {}
}
