import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
// export interface CountyGroup {
//   capital: string;
//   names: string[];
// }
// export const _filter = (opt: string[], value: string): string[] => {
//   const filterValue = value.toLowerCase();

//   return opt.filter((item) => item.toLowerCase().includes(filterValue));
// };
@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit {
  // countyForm!: FormGroup;
  // constructor(private formBuilder: FormBuilder) {}

  // ngOnInit() {
  //   this.countyForm = this.formBuilder.group({
  //     countyGroup: '',
  //   });
  //   this.countyGroupOptions = this.countyForm
  //     .get('countyGroup')!
  //     .valueChanges.pipe(
  //       startWith(''),
  //       map((value) => this.filterGroup(value))
  //     );
  // }
  // private filterGroup(value: string): CountyGroup[] {
  //   if (value) {
  //     return this.countyGroups
  //       .map((group) => ({
  //         capital: group.capital,
  //         names: _filter(group.names, value),
  //       }))
  //       .filter((group) => group.names.length > 0);
  //   }
  //   return this.countyGroups;
  // }
  // countyGroups: CountyGroup[] = [
  //   {
  //     capital: 'B',
  //     names: [
  //       'Bath and North East Somerset',
  //       'Bedfordshire',
  //       'Berkshire',
  //       'Bristol',
  //       'Buckinghamshire',
  //     ],
  //   },
  //   {
  //     capital: 'C',
  //     names: [
  //       'Cambridgeshire',
  //       'Cheshire',
  //       'Cornwall',
  //       'County Durham',
  //       'Cumbria',
  //     ],
  //   },
  //   {
  //     capital: 'D',
  //     names: ['Derbyshire', 'Devon', 'Dorset'],
  //   },
  //   {
  //     capital: 'E',
  //     names: ['East Riding of Yorkshire', 'East Sussex', 'Essex'],
  //   },
  //   {
  //     capital: 'G',
  //     names: ['Gloucestershire', 'Greater London', 'Greater Manchester'],
  //   },
  //   {
  //     capital: 'H',
  //     names: ['Hampshire', 'Herefordshire', 'Hertfordshire'],
  //   },
  //   {
  //     capital: 'I',
  //     names: ['Isle of Wight', 'Isles of Scilly'],
  //   },
  //   {
  //     capital: 'K',
  //     names: ['Kent'],
  //   },
  //   {
  //     capital: 'L',
  //     names: ['Lancashire', 'Leicestershire', 'Lincolnshire'],
  //   },
  //   {
  //     capital: 'M',
  //     names: ['Merseyside'],
  //   },
  //   {
  //     capital: 'N',
  //     names: [
  //       'Norfolk',
  //       'North Somerset',
  //       'North Yorkshire',
  //       'Northamptonshire',
  //       'Northumberland',
  //       'Nottinghamshire',
  //     ],
  //   },
  //   {
  //     capital: 'O',
  //     names: ['Oxfordshire'],
  //   },
  //   {
  //     capital: 'R',
  //     names: ['Rutland'],
  //   },
  //   {
  //     capital: 'S',
  //     names: [
  //       'Shropshire',
  //       'Somerset',
  //       'South Gloucestershire',
  //       'South Yorkshire',
  //       'Staffordshire',
  //       'Suffolk',
  //       'Surrey',
  //     ],
  //   },
  //   {
  //     capital: 'T',
  //     names: ['Tyne & Wear'],
  //   },
  //   {
  //     capital: 'W',
  //     names: [
  //       'Warwickshire',
  //       'West Midlands',
  //       'West Sussex',
  //       'West Yorkshire',
  //       'Wiltshire',
  //       'Worcestershire',
  //     ],
  //   },
  // ];
  // countyGroupOptions!: Observable<CountyGroup[]>;

  formControl = new FormControl();
  protected countries: string[] = [
    'England',
    'Scotland',
    'Wales',
    'Northern Ireland',
  ];

  filteredCountries!: Observable<string[]>;
  ngOnInit() {
    this.filteredCountries = this.formControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.filter(value))
    );
  }
  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
