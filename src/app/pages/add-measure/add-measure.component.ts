import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
// @ts-ignore
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'dd MM YYYY',
  },
};

export interface Times {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-add-measure',
  templateUrl: './add-measure.component.html',
  styleUrls: ['./add-measure.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class AddMeasureComponent {
  date = new FormControl(moment());
  serializedDate = new FormControl(new Date().toISOString());


  times: Times[] = [
    {value: 0, viewValue: 'Na czczo'},
    {value: 1, viewValue: '2h po śniadaniu'},
    {value: 2, viewValue: 'Przed obiadem'},
    {value: 3, viewValue: '2h po obiedzie'},
    {value: 4, viewValue: 'Przed kolacją'},
    {value: 5, viewValue: '2h po kolacji'},
    {value: 6, viewValue: 'Przed snem'},
    {value: 7, viewValue: '3 w nocy'},
    {value: 8, viewValue: 'Po aktywności'},
  ];

}
