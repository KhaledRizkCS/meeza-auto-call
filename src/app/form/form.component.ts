import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  selectData = [
    {
      model: 'auto_call.Room',
      pk: 1,
      fields: {
        name: 'CT ',
      },
    },
    {
      model: 'auto_call.Room',
      pk: 2,
      fields: {
        name: 'MRI ',
      },
    },
    {
      model: 'auto_call.Room',
      pk: 3,
      fields: {
        name: 'US ',
      },
    },
    {
      model: 'auto_call.Room',
      pk: 4,
      fields: {
        name: 'XRAY ',
      },
    },
    {
      model: 'auto_call.Room',
      pk: 5,
      fields: {
        name: 'ECG ',
      },
    },
    {
      model: 'auto_call.Room',
      pk: 6,
      fields: {
        name: 'EMG ',
      },
    },
    {
      model: 'auto_call.Room',
      pk: 7,
      fields: {
        name: 'EEG ',
      },
    },
    {
      model: 'auto_call.Room',
      pk: 8,
      fields: {
        name: 'DEXA ',
      },
    },
    {
      model: 'auto_call.Room',
      pk: 9,
      fields: {
        name: 'MAMO ',
      },
    },
  ];

  constructor() {}
}
