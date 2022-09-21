import {Component, OnInit} from '@angular/core';
import {AlertService} from "ngx-alerts";
import { AuthService } from './core/service/auth.service';
import { UsuarioLogado } from './shared/model/usuario.model';

@Component({
    selector: 'itcd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'itcd';
    usuarioLogado: UsuarioLogado;

    constructor(private auth: AuthService,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.auth.usuarioSessao.subscribe(us => this.usuarioLogado = us);
        this.auth.mensagemW_.subscribe(m => {
            if (m && m.length > 0) {
                this.alertService.warning(m);
            }
        });
        this.auth.mensagemD_.subscribe(m => {
            if (m && m.length > 0) {
                this.alertService.danger(m);
            }
        });
        this.auth.mensagemI_.subscribe(m => {
            if (m && m.length > 0) {
                this.alertService.info(m);
            }
        });
    }
}
