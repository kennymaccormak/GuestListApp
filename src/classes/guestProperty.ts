export class GuestProperty {
  constructor(
    public fullName: string,
    public description: string,
    public facebookAccount: string,
    public genderType: string,
    public isInvited: boolean,
    public participationConfirm: boolean,
    public tableNumber: number
  ) {
  }
}
