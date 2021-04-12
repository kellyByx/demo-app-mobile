//name:string, isChecked:boolean

//1er façon de faire qui fonctionne mais il existe une manière + simple pour travailler
// class Articles{
//     name: string;
//     isChecked: boolean;
// }

export interface Article{
    name: string;
    isChecked: boolean;
}
//avantage pas obliger de transofrmer les objet en instance d'article =>pas faire le new ...
