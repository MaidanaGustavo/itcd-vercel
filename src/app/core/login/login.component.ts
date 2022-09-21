import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'itcd-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  statusLoad = 'Iniciando Sessão...';

  constructor(private activatedRouter: ActivatedRoute, private router: Router, private auth: AuthService) {
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(param => {
      const txt = param['TXT'];
      if (txt) {
        this.auth.login(txt);
      }
    });
  }
}
