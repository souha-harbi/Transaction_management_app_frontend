import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { transaction } from 'src/app/entities/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private Url = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {
   }
  
   getAllTransaction(): Observable<transaction[]> {
    return this.http.get<transaction[]>(`${this.Url}/GetAllTransaction`);
  }

  GetTransactionById(idtransaction : string) :Observable<transaction> {
    return this.http.get<transaction>(`${this.Url}/GetTransactionById/${idtransaction}`);
  }

  RetirerArgent(transaction : transaction) : Observable<any> {
    return this.http.post(`${this.Url}/RetirerArgent`,transaction);
  }

  
  DeposerArgent(transaction : transaction,idcompte : string) : Observable<any> {
    return this.http.put(`${this.Url}/DeposerArgent/${idcompte}`, transaction);
  }


}
