import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../services/filmes.service';




@Component({
  selector: 'app-detalhefilmes',
  templateUrl: './detalhefilmes.page.html',
  styleUrls: ['./detalhefilmes.page.scss'],
})
export class DetalhefilmesPage implements OnInit {
  


  constructor(private FilmesService: FilmesService) {  }

 async ngOnInit() {
  console.log('Deu bom');
  this.FilmesService.InformacaoDoFilme();
}
}
