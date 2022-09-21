import {Component, OnInit} from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
    selector: 'itcd-sidebar-quick',
    templateUrl: './sidebar-quick.component.html'
})
export class SidebarQuickComponent implements OnInit {

    // super_poderes: boolean = false;
    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        // this.auth.usuarioSessao.subscribe(us => {
        // if (us && us.user && us.user.userName) {
        //   this.super_poderes = (us.user.userName === 'rtsouza'
        //     ||  us.user.userName === 'mmcavanha'
        //     || us.user.userName === 'kmikuri');
        // }
        // });
    }
}
