import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-chronometre',
  templateUrl: './chronometre.page.html',
  styleUrls: ['./chronometre.page.scss'],
})
export class ChronometrePage implements OnInit {

  time: number;
  idInterval: any;
  times:number[];

  constructor(
  //créer un service ionic affiche alert a l'écran
  //faut bien importer ligne 2=> c'est de la dependency injection
  private alertController: AlertController) { 
    
  }

  ngOnInit() {
    this.time = 0;
    this.times = [];
    //  doit absolument créer cette liste vide au depart pour faire le save
   }

  stop() {
     // clearInterval(this.idInterval);
    // this.idInterval = null;
    this.alertController.create({
      header: 'Confirmation',
      message: 'Êtes-vous sûr de vouloir stop votre chronomètre',
      // buttons: ['oui', 'non']
      buttons: [{
        text:'oui',
        handler:()=> {
          clearInterval(this.idInterval);
          this.idInterval = null;
        }
      }, 'non']
    }).then(a => a.present())
    // rappel .then  => cela s'utilise sur les promesses en js (vu quand fait requete ajax en js)
   
  }

  start() {
    this.times = [];
    const start = Date.now();
    this.idInterval = setInterval(() => {
      this.time = Date.now() - start;
    }, 1);
  }

  save() {
    this.times.push(this.time);
  }

}
