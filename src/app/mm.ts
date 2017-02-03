import { Component } from '@angular/core';

@Component({
  selector: 'mega-menu',
  templateUrl: './mm.html',
  styleUrls:['./mm.css']
})
export class MegaMenu {
  public showSub:boolean = false;
  private subMenuLabel:string = "";

  constructor(){

  }  

  private showSubMenu(togg:boolean, name:string){
    this.subMenuLabel = name;
    this.showSub = togg;
  }
  
}
