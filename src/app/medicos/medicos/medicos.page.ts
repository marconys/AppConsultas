import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.page.html',
  styleUrls: ['./medicos.page.scss'],
})
export class MedicosPage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  irAgendaHans(){
    this.router.navigate(['agenda-hans']);
  }
  irAgendaElias(){
    this.router.navigate(['agendaelias']);
  }

}
