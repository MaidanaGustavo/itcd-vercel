import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogado } from '../../shared/model/usuario.model';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'itcd-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    usuarioLogado: UsuarioLogado;
    developer = false;

    constructor(private router: Router,
                private auth: AuthService) {
    }

    ngOnInit() {

        this.auth.usuarioSessao.subscribe(us => {
            if (us) {
                this.usuarioLogado = us;
            }
        });
    }

    toggleCollapsed() {
        if (this.developer) {
            const dom: any = document.querySelector('body');
            dom.classList.toggle('page-quick-sidebar-open');
        }
    }

    processLoaded() {
        return true;
    }

}
