import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = 'teste';

        if (token) {
            request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        }

        request = request.clone({headers: request.headers.set('Accept', 'application/json')});

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
            }));
    }

}
