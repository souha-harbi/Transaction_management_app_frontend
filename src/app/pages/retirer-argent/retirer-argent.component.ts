import { Component, OnInit } from '@angular/core';
import { transaction } from 'src/app/entities/transaction';
import { TransactionService } from "../transaction/transaction.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-retirer-argent',
  templateUrl: './retirer-argent.component.html',
  styleUrls: ['./retirer-argent.component.scss']
})
export class RetirerArgentComponent implements OnInit {

  constructor(private TransactionService:TransactionService ,  private router: Router) { }
  transaction : transaction = new transaction()
  idcompte : number
  montant : number
  submitted = false;

  ngOnInit(): void {
  }
  RetirerArgrent(){

    this.TransactionService.RetirerArgent(this.transaction).subscribe(data => {
      console.log("////");
      })
      this.router.navigate(['/dashboard']);
  }

}
