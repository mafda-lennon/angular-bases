import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  // Variable 'flag' para mostrar/ocultar el botón de reset
  resetButtonVisible: boolean = false;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`;
  }
  //changeHero debe cambiar el nombre del superhéroe
  changeHero():void {
    this.name = 'spiderman';
    this.showResetButton();
  }
  //changeAge cambia la edad del superhéroe
  changeAge():void {
    this.age = 25;
    this.showResetButton();
  }

  reset():void {
    this.name = 'ironman';
    this.age = 45;
    this.hideResetButton();
  }

  private showResetButton() {
    this.resetButtonVisible = true;
  }

  private hideResetButton() {
    this.resetButtonVisible = false;
  }

}
