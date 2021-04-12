import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Article } from '../_models/articles';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  
  newItem:string;
  // items: string [];
  items: Article[];


  constructor( 
    private actionSheetCtrl: ActionSheetController,
    private storage : NativeStorage
    ) {
   }

  ngOnInit() {
    this.items = [];
    this.storage.getItem('ITEMS').then(data => {
      this.items = data;
    })
  }

  add(){
    // si on a un élément = on push dans la list
    // si autre chose on exécute rien ( falsing de js)
    if(this.newItem){
    // this.items.push(this.newItem);
    this.items.push({name: this.newItem, isChecked: false});
    this.newItem = null;
    this.save();
   }
  }
  // openActionSheet(){
  //   this.actionSheetCtrl.create({
  //     header:'',
  //    buttons: [
  //      { text: 'Cocher'},
  //      { text:'Supprimer'}
  //    ]
    //}).then(as =>as.present());  //voir doc pour afficher l'actionSheep= pas par <3 
  //ici use la syntaxe de base car on est avec une promesse => use then
 // synthase moderne / nouvelle:

async openActionSheet(item: Article){
 const as = await this.actionSheetCtrl.create({
   header:'Action',
   buttons: [
     { text: item.isChecked? 'Decocher' : 'Cocher', handler: ()=> {
       item.isChecked = !item.isChecked; //permet de changer et avoir cocher/décocher
     }},
     { text:'Supprimer', handler:()=>{
      //possibilité de faire avec splice:
        const i = this.items.indexOf(item);
        this.items.splice(i,1);
      //ou avec filter qui créer filtre et recréer une nouvelle list:
      // this.items = this.items.filter(x => x !== item)

      this.save();
     }}
   ]
    });

  as.present();
  }

  clearAll(){
  // peut créer une new liste vide
  //  this.items [];
  //mais préfère ne pas recréer une liste vide
  this.items.splice(0);
  this.save();
  }

  save(){
    this.storage.setItem('ITEMS', this.items)
  }

}
