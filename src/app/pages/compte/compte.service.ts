import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { compte } from 'src/app/entities/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private Url = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) { }

  getAllCompte(): Observable<compte[]> {
    return this.http.get<compte[]>(`${this.Url}/GetAllCompte`);
  }

  createCompte(compte : compte): Observable<any> {
    return this.http.post<compte>(`${this.Url}/CreateCompte`,compte);
  }
}
