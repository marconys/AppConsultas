import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  private agendas: any = [];
  constructor() { }

  //Guarda os dados e retorna um booleano
  guardarAgendas(index: string, agendas: any): boolean{
    //Verifica se o index recebido é válido
    if (index) {
      this.agendas[index] = agendas;
      return true;
    }else{
      return false;
    }
  }
//Busca os dados armazenados e retorna  qualquer coisa
  buscarAgendas(index: string): any{
    if (index) {
      return this.agendas[index];
    }else{
      return null;
    }
  }

  //Deleta dados e retornar um booleano
  deletarAgendas(index: string): boolean{
    if(index){
      return delete this.agendas[index];
    }
  }
}
