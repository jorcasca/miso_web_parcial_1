import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ICoffee } from '../../interfaces/coffee.interface';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  constructor(private http: HttpClient) {}

  baseUrl = `${environment.baseUrl}`;

  getCoffeeList(): Observable<ICoffee[]> {
    return this.http.get<ICoffee[]>(
      `${this.baseUrl}/202212_MISW4104_Grupo3.json`
    );
  }
}
