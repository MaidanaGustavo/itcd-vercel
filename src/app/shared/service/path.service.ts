import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_BASE, Error, ResponseModel } from '../../app.api';
import { AuthService } from '../../core/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor(private authService: AuthService, private http: HttpClient) {
  }

  getRepositorioPath(url: string): string {
    switch (this.authService.profileObservable.getValue()) {
      case 'Development':
      case 'Homologation':
      case 'dev':
      case 'hom':
      case 'local':        
      case 'Production':
      case 'prd':        
      default:
        return null;
    }
  }

  public GerarToken(): Observable<any> {
    return this.http.get<ResponseModel>(API_BASE + '/Token').pipe(
      catchError(Error.error)
    );
  }
}
