import { Component, OnInit } from '@angular/core';
import { UsuarioLogado } from 'src/app/shared/model/usuario.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-guias',
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.css']
})
export class GuiasComponent implements OnInit {
  usuarioLogado : UsuarioLogado;
  constructor(private authService: AuthService) {

  }
   elements = [
    {
      cpf : '07812365447',
      nome : 'Xxxxxxx xxxx',
      numeroGuia: 3122,
      dataMov : '12/02/2020',
      status : 'Ativo',
      isGuiaComplementar : true
    },
    {
      cpf : '077123265447',
      nome : 'Xxxxxxx xxxx',
      numeroGuia: 3123,
      dataMov : '12/03/2021',
      status : 'Ativo',
      isGuiaComplementar : false
    },
    {
      cpf : '07812365497',
      nome : 'Xxxxxxx xxxx',
      numeroGuia: 3124,
      dataMov : '12/02/2020',
      status : 'Ativo',
      isGuiaComplementar : true
    },
    {
      cpf : '06812365447',
      nome : 'Xxxxxxx xxxx',
      numeroGuia: 3125,
      dataMov : '12/02/2020',
      status : 'Ativo',
      isGuiaComplementar : false
    },
    {
      cpf : '55812366547',
      nome : 'Xxxxxxx xxxx',
      numeroGuia: 3126,
      dataMov : '12/05/2020',
      status : 'Ativo',
      isGuiaComplementar : false
    },
    {
      cpf : '07812365555',
      nome : 'Xxxxxxx xxxx',
      numeroGuia: 3127,
      dataMov : '16/02/2013',
      status : 'Ativo',
      isGuiaComplementar : false
    }
  ]
  ngOnInit() {
    this.authService.usuarioSessao.subscribe(resp=>{
       if(resp)
       this.usuarioLogado = resp;
    })
  }

}
