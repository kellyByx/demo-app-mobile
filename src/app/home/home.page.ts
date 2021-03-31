import { Component, OnInit } from '@angular/core';
import { BooleanValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firstName: string;
  chaine: string;
  nombre: number;
  date: Date;

  isAdmin: Boolean;

  list:string[];

  constructor() { }

  ngOnInit() {
    this.firstName = 'Kelly';
    this.chaine = 'Ma super CHAINE de caractères';
    this.nombre = 42.428796;
    this.date = new Date();
    this.isAdmin = false;
    this.list = ['sel','poivre', 'sucre'];
  }

  changeName(){
    this.firstName ='Antoine';
  }

}
