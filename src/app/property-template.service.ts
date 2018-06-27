import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { PropertyTemplate } from '../classes/propertyTemplate';
import { PROPERTYTEMPLATES } from '../_mock-data_/propertyTemplate';

@Injectable({
  providedIn: 'root'
})
export class PropertyTemplateService {

  constructor() {
  }

  getPropertyTemplates(): Observable<PropertyTemplate[]> {
    return of(PROPERTYTEMPLATES);
  }
}
