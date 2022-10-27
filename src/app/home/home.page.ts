import { Component } from '@angular/core';
import { FilmesService } from '../services/filmes.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  filmes:any = []
  destaque: any  


  constructor( private FilmesService: FilmesService) { }

  async ng0nInit(){
    console.log('passou no home');
    this.FilmesService.ListarProducoes();

  }

  

async carregaFilmes() {
  this.filmes = await this.FilmesService.ListarProducoes();
  console.log("filmes carregados", this.filmes)
  const [firstKey] = Object.keys(this.filmes);
  this.destaque = this.filmes[firstKey];

  this.FilmesService.splice(firstKey, 1)
  console.log('firstKey', firstKey)
  console.log('destaque',this.destaque)
  console.log('filmes',this.filmes)
  
}


}
