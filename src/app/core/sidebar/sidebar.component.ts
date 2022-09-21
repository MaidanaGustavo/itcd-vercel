import { Component, OnInit } from '@angular/core';
import { UsuarioLogado } from '../../shared/model/usuario.model';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'itcd-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

    usuarioLogado: UsuarioLogado;
    atividadeAtual;
    processo: any;
    documentos: any[];
    documento: any;

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.auth.usuarioSessao.subscribe(us => {
            this.usuarioLogado = us;
        });
    }

    usuarioSessao(): boolean {
        return !!(this.usuarioLogado && this.usuarioLogado.user);
    }

    baixarArquivo(chave: string, filename: string) {
        
    }
}
