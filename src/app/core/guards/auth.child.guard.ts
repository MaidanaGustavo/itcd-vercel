import {Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthChildGenericGuard implements CanActivateChild {

    constructor(private auth: AuthService, private router: Router, private activatedRouter: ActivatedRoute) {
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        if (this.auth.usuarioLogado) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
