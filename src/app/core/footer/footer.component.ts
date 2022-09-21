import { Component, OnInit } from '@angular/core';
import { UsuarioLogado } from '../../shared/model/usuario.model';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'itcd-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

    usuarioLogado: UsuarioLogado;
    dataPublicacao: Date;
    versao: string;

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.auth.usuarioSessao.subscribe(us => this.usuarioLogado = us);
        this.auth.dataPublicacao.subscribe(dt => this.dataPublicacao = dt);
        this.auth.versaoObservable.subscribe(vs => this.versao = vs);
    }
}
