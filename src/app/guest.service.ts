import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Guest } from '../classes/guest';
import { GUESTS } from '../_mock-data_/guests';

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  constructor() {
  }

  getGuests(): Observable<Guest[]> {
    return of(GUESTS);
  }
}
