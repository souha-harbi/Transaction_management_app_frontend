import { Component, OnInit } from '@angular/core';
import { transaction } from 'src/app/entities/transaction';
import { TransactionService } from "../transaction/transaction.service";
import { Router } from '@angular/router';
import { CompteService } from '../compte/compte.service';

@Component({
  selector: 'app-retirer-argent',
  templateUrl: './retirer-argent.component.html',
  styleUrls: ['./retirer-argent.component.scss']
})
export class RetirerArgentComponent implements OnInit {

  constructor(private TransactionService:TransactionService ,  private router: Router, private CompteService : CompteService) { }
  transaction : transaction = new transaction()
  montant : number
  submitted = false;

  ngOnInit(): void {
  }
  RetirerArgrent(){
    this.CompteService.GetCompteById(this.transaction.idcompte).subscribe(data => {
      if (data.solde > this.transaction.montant){
        this.TransactionService.RetirerArgent(this.transaction).subscribe(data => {
        console.log(data);
        })}
        else{
          alert("Solde insuffisant");
      }
      })
    this.router.navigate(['/transaction']);
  }

}
