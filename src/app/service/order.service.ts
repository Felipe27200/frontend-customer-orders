
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private prefix = '/api';
  // private prefix = environment.base;

  constructor(
    private http: HttpClient,
  ) { }

  getOrder(formData: any)
  {
    let url = `${this.prefix}/orders/search`;

    return this.http.post<any>(url, formData)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  public handleError(error: HttpErrorResponse)
  {
    if (error.status === 0)
    {
      // Error del lado del cliente o de red.
      console.error('Ocurrio un error:\n\t', error.error);
    }
    else
    {
      // El backend retorna un código de respuesta no exitoso.
      console.error(`El Backend retorno el código ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error('Algo malo paso, por favor intente de nuevo más tarde.'));
  }
}