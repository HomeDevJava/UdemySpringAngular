import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  public listCursos: string[] = ['TypeScript', 'Java SE', 'JavaScript', 'Python', 'C#'];

  habilitar = true;

  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar == true) ? false : true;
  }


}
