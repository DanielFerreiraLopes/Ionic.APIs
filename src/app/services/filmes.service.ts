import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  splice(firstKey: string, arg1: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  /* http:lmcapifilmes.herokuapp.com/api/productions
     http:lmcapifilmes.herokuapp.com/api/productions13 */

  ListarProducoes(){  

    console.log("no ListarProducoes");
    return new Promise((resolve, reject) => {
      this.http.get('https://lmcapifilmes.herokuapp.com/api/productions', {}) 
      .subscribe
        ( (data: any) => {
          console.log("retorno",data.Production);          
          return resolve(data.Production)

        }), (error => {
          return reject(error)
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

        });
  });
  }

    InformacaoDoFilme(){
      console.log("no InformacaoDoFilme");
      return new Promise ((resolve, reject) => {
        this.http.get('http:lmcapifilmes.herokuapp.com/api/productions13', {})
        .subscribe
        ( (data: any) => {
          console.log("retorno",data.Production);          
          return resolve(data.Production)

        }), (error => {
          return reject(error)
          console.log(error.status);
          console.log(error.error); // error message as string
          console.log(error.headers);

        });
        
      })
    }
  
}

