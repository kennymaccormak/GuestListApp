import { Component, OnInit } from '@angular/core';

import { Guest } from '../../classes/guest';
import { GuestService } from '../guest.service';

import { PropertyTemplate } from '../../classes/propertyTemplate';
import { PropertyTemplateService } from '../property-template.service';

@Component({
  selector: 'app-guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.css']
})
export class GuestsTableComponent implements OnInit {
  guests: Guest[];
  propertyTemplates: PropertyTemplate[];

  constructor(
    private guestService: GuestService,
    private propertyTemplateService: PropertyTemplateService
  ) {
  }

  ngOnInit() {
    this.getGuests();
    this.getPropertyTemplates();
    console.log(this.guests);
    console.log(this.propertyTemplates);
  }

  getGuests(): void {
    this.guestService.getGuests()
      .subscribe(guests => this.guests = guests);
  }

  getPropertyTemplates(): void {
    this.propertyTemplateService.getPropertyTemplates()
      .subscribe(templates => this.propertyTemplates = templates);
  }

}
