import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toTime'
})
export class ToTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): any {
    let minutes = Math.floor(value / 60000);  // Math.floor => Permet arrondir a l'unité
    let secondes = Math.floor( value %60000 / 1000); // va use modulo
    let millisecondes = value % 1000;

     return ('0' + minutes).slice(-2) + ':'
      + ('0'+ secondes).slice(-2) + ':' 
      + ('00'+ millisecondes).slice(-3);

    //ou il est possible de faire la meme chose mais avec les ternaires:
     
    //  return(minutes <10) ?'0' + minutes : minutes +':' +
    //       (secondes <10) ? '0' + secondes  : secondes + ':'+ 
    //       // ici double ternaire:
    //       (millisecondes <10) ? '00' + millisecondes ? (millisecondes <100) ? '0' + millisecondes: millisecondes
  }

}
