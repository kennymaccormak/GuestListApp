import { GuestProperty } from './guestProperty';

export class Guest {
  constructor(
    public id: number,
    public imgName: string,
    public properties: GuestProperty
  ) {
  }
}
