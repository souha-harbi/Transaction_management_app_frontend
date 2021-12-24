import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { transaction } from 'src/app/entities/transaction';
import { TransactionService } from "../transaction/transaction.service";

@Component({
  selector: 'app-deposer-argent',
  templateUrl: './deposer-argent.component.html',
  styleUrls: ['./deposer-argent.component.scss']
})
export class DeposerArgentComponent implements OnInit {


  transaction : transaction = new transaction()
  constructor(private TransactionService : TransactionService,  private router: Router) { }

  ngOnInit(): void {
  }
  RetirerArgrent(){

    this.TransactionService.DeposerArgent(this.transaction).subscribe(data => {
      console.log("******");
      })
      this.router.navigate(['/dashboard']);
  }

}
