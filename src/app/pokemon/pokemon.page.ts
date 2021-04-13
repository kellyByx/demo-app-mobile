import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PokemonResult } from '../_models/pokemon-result';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  result: PokemonResult;//indéfinis

  constructor(
    private http: HttpClient ,
    private modalCtrl: ModalController
    ) { }

    // ----- Ancienne version:------
  // ngOnInit() {
  //   // this.http.get('https://pokeapi.co/api/v2/pokemon')
  //   // .subscribe(console.log)
  //   //=>permet voir infos dont les propriété presente: next et previous dans console

  //   this.http.get<PokemonResult>('https://pokeapi.co/api/v2/pokemon')
  //   .subscribe(data => {
  //     this.result = data;
  //    });

  // }

  // next(){
  //   this.http.get<PokemonResult>(this.result.next)
  //   .subscribe(data => {
  //     this.result = data;
  //    });
  // }

  // previous(){
  //   this.http.get<PokemonResult>(this.result.previous)
  //   .subscribe(data => {
  //     this.result = data;
  //   });
  // }

 
  // ----- version simplifier:------
 ngOnInit() {
   this.load('https:pokeapi.co/api/v2/pokemon');
 }

 next() {
   this.load(this.result.next);
 }

 previous() {
   this.load(this.result.previous);
 }

 private load(url:string) {
   this.http.get<PokemonResult>(url)
   .subscribe(data => {
     this.result = data;
   });
 }

async openDetails(url:string){
  const modal = await this.modalCtrl.create({ 
    component: DetailsComponent,
    componentProps:{
      url:url
    }
  
  });

  modal.present();
}
 
}

