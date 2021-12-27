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

  GetCompteById(idcompte : string) :Observable<compte> {
    return this.http.get<compte>(`${this.Url}/GetCompteById/${idcompte}`);
  }

  createCompte(compte : compte): Observable<any> {
    return this.http.post<compte>(`${this.Url}/CreateCompte`,compte);
  }

  deleteCompte(id: string): Observable<any> {
    return this.http.delete(`${this.Url}/DeleteCompte${id}`, { responseType: 'text' });
  }
}
