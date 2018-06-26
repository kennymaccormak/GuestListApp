import { PropertyTemplate } from '../classes/propertyTemplate';

export const propertyTemplates: PropertyTemplate[] = [
  {
    code: 'fullName',
    isVisible: true,
    name: 'Guest Name',
    typeCode: 'text',
    options: ''
  },
  {
    code: 'description',
    isVisible: true,
    name: 'Description',
    typeCode: 'text',
    options: ''
  },
  {
    code: 'facebookAccount',
    isVisible: true,
    name: 'Facebook Account',
    typeCode: 'link',
    options: ''
  },
  {
    code: 'genderType',
    isVisible: true,
    name: 'Gender',
    typeCode: 'select',
    options: {
      'female': 'f',
      'male': 'm',
      'child': 'c'
    }
  },
  {
    code: 'isInvited',
    isVisible: true,
    name: 'Is invited',
    typeCode: 'select',
    options: {
      'yes': true,
      'no': false
    }
  },
  {
    code: 'participationConfirm',
    isVisible: true,
    name: 'Participation confirm',
    typeCode: 'select',
    options: {
      'yes': true,
      'no': false
    }
  },
  {
    code: 'tableNumber',
    isVisible: true,
    name: 'Table number',
    typeCode: 'text',
    options: ''
  }
];
