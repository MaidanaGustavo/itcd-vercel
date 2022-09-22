import { Component, OnInit } from '@angular/core';
import { UsuarioLogado } from 'src/app/shared/model/usuario.model';
import { AuthService } from '../../service/auth.service';
export class Mensagem {
  id :number;
  descricao : string;
  tipo : string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  usuarioLogado: UsuarioLogado;
  constructor(private auth : AuthService) { }
  mensagens : Mensagem[] = [
    {
      id: 1,
      descricao:
        "A Análise da Guia  n.xxxx foi finalizada, o DAEMS referente a esta Guia já se encontra liberado para pagamento",
      tipo: "info",
    },
    {
      id: 2,
      descricao:
        "A Análise da Reclamação  n.xxxx foi finalizada, a resposta da análise já se encontra disponível",
      tipo: "warning",
    },
  ];
  ngOnInit() {
    this.auth.usuarioSessao.subscribe(us=>{
      if(us)
      this.usuarioLogado = us;
    })
  }
  marcarComoLida(item: any) {
    let msgs = this.mensagens.filter((element) => element.id !== item.id);
    this.mensagens = msgs;
  }

}
