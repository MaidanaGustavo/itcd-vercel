import { Component, OnInit } from '@angular/core';
import { EGrupoSistema } from '../../shared/enum/grupo-sistema.enum';
import { UsuarioLogado } from '../../shared/model/usuario.model';
import { AuthService } from "../service/auth.service";

@Component({
  selector: 'itcd-menu-header',
  templateUrl: './menu-header.component.html'
})
export class MenuHeaderComponent implements OnInit {
    
  usuarioSessao: UsuarioLogado;
  eGrupoSistema = EGrupoSistema;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.usuarioSessao.subscribe(x => {
      this.usuarioSessao = x;
    });
  }
}
