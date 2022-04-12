import { Component, OnInit, Input } from '@angular/core';
//import { HEROES } from '../mock-heroes';

export interface HeroTable {
  id : string;
  name: string;
}

const HERO_DATA: HeroTable[] = [
  { id : "11", name : "Dr Nice" },
{ id : "12", name : "Narco" },
{ id : "13", name : "Bombasto" },
{ id : "14", name : "Celeritas" },
{ id : "15", name : "Magneta" },
{ id : "16", name : "RubberMan" },
{ id : "17", name : "Dynama" },
{ id : "18", name : "Dr IQ" },
{ id : "19", name : "Magma" },
{ id : "20", name : "Tornado" }
];

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit {
  //heroes = HEROES;

  title = 'HeroesTable';

   displayedColumns: string[] = ['ID', 'name'];
   dataSource = HERO_DATA;
  


  constructor() { }

  ngOnInit(): void {
    
  }
  

}
