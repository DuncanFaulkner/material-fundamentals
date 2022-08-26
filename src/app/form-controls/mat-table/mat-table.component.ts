import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface SuperHeroes {
  position: number;
  name: string;
  weapons: string;
  power: string;
}

const SUPERHERO_DATA: SuperHeroes[] = [
  {
    position: 1,
    name: 'Captain America',
    weapons: 'Indestructible Shield',
    power: 'Strength',
  },
  {
    position: 2,
    name: 'Black Panther',
    weapons: 'Energy dagger',
    power: 'Enhanced senses',
  },
  {
    position: 3,
    name: 'Killmonger',
    weapons: 'Firearms',
    power: 'Expert Tactician',
  },
  {
    position: 4,
    name: 'Groot',
    weapons: 'His powers',
    power: 'Marksmanship',
  },
  {
    position: 5,
    name: 'Hawkeye',
    weapons: 'Bows and arrows',
    power: 'Marksmanship',
  },
  {
    position: 6,
    name: 'Black Widow',
    weapons: 'Bite',
    power: 'Assassin',
  },
  {
    position: 7,
    name: 'Winter Soldier',
    weapons: 'Snipers',
    power: 'Martial Artist',
  },
  {
    position: 8,
    name: 'Star-Lord',
    weapons: 'Element Gun',
    power: 'Cybernetic Enhancements',
  },
  {
    position: 9,
    name: 'Wolverine',
    weapons: 'Adamantium claws',
    power: 'Indestructible Skeleton',
  },
  {
    position: 10,
    name: 'Iron Man',
    weapons: 'Repulsor rays',
    power: 'Genius level intellect',
  },
];

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss'],
})
export class MatTableComponent implements OnInit {
  @ViewChild(MatTable) table!: MatTable<SuperHeroes>;
  displayedColumns: string[] = ['drag', 'position', 'name', 'weapons', 'power'];
  dataSource = [...SUPERHERO_DATA];
  constructor() {}

  drop(event: CdkDragDrop<SuperHeroes[]>) {
    moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
    this.table.renderRows();
  }

  ngOnInit(): void {}
}
