import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  apiUrl = 'https://estagioteste.herokuapp.com/';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  cadastrar(contato: any) {
    return this.http.post(`${this.apiUrl}` + `add`, contato);
  }
}
