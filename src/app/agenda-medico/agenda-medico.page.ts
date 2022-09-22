import { Component, OnInit } from '@angular/core';
import { AgendasService } from '../services/agendas.service';
import { IMedico } from '../models/IMedico.model';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dados-medico',
  templateUrl: './agenda-medico.page.html',
  styleUrls: ['./agenda-medico.page.scss'],
})
export class DadosMedicoPage implements OnInit {

  medico: IMedico;
  consultas: any[] = []; //Matriz tarefas (nome, feito)
  constructor(
    public agendasService: AgendasService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController) {

        //Carregando tarefas a partir do localStorage
        const consultaJson = localStorage.getItem('consultaDb');
        if (consultaJson != null) {
          this.consultas = JSON.parse(consultaJson);
        }
     }

  ngOnInit() {
    this. medico = this.agendasService.buscarAgendas('medico');
    console.log('Médico Enviado', this.medico);
  }

  async addConsulta() {
    const alerta = await this.alertCtrl.create({
      header: 'Escolha o Horário da sua consulta',
      inputs: [
        {name: 'txtnome', type: 'text', placeholder: 'Digite o seu nome...'},
        { name: 'txthora', type: 'time'}
      ],
      buttons: [{
        text: 'Cancelar', role: 'cancel', cssClass: 'light', handler: () => {
          //Comandos executados caso o usuário click em cancelar
          console.log('Você Cancelou');
        }
      },
      {
        text: 'OK', handler: (form) => {
          // console.log(form);
          this.add(form);
        }
      }]

    });
    alerta.present();
  }
  async add(nova: any) {
    if (nova.length < 1) {
      const toast = await this.toastCtrl.create({
        message: 'Iforme o que vc deseja fazer',
        duration: 2000,
        position: 'middle',
        color: 'warning'
      });
      toast.present();
    }else{
      const consulta = { nome: nova.txtnome, hora: nova.txthora, feito: false };
      this.consultas.push(consulta);
      //Armazenando no dispositivo
      this.atualizaLocalStorage();
      const toast = await this.toastCtrl.create({
        message: 'Consulta marcada com sucesso!',
        duration: 2000,
        position: 'middle',
        color: 'success'
      });
      toast.present();
    }

  }
  async abrirOpcoes(consulta: any) {
    const actsheet = await this.actionSheetCtrl.create({
      header:'Escolha uma ação!',
      buttons:[
        {text:consulta.feito?'Marcar Consulta':'Desmarcar Consulta',
         icon:consulta.feito?'radio-Button-off':'checkmark-circle',
        handler:()=>{
          consulta.feito=!consulta.feito;
          this.atualizaLocalStorage();
        }},
        {
          text:'Cancelar', icon:'close', role:'cancel',
          handler:()=>{}
        }
      ]
    });
    actsheet.present();
  }
  excluir(consulta: any) {
    // eslint-disable-next-line eqeqeq
    this.consultas = this.consultas.filter(res => consulta != res);
    this.atualizaLocalStorage();
  }
  //Grava no dispositivo do usuário
  atualizaLocalStorage(){
    localStorage.setItem('consultaDb',JSON.stringify(this.consultas));
  }

  sair(){
    this.router.navigate(['home']);
  }
}


