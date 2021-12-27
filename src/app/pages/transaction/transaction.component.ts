import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { of } from "rxjs";
import { transaction } from "src/app/entities/transaction";
import { TransactionService } from "./transaction.service";


@Component({
  selector: "app-transaction",
  templateUrl: "transaction.component.html"
})
export class TransactionComponent implements OnInit {
  transactionList : transaction[]
  CreditTransactionList : transaction[] =[]
  DebitTransactionList : transaction[] = []
  FiltertransactionList : transaction[] = []
  startdate : Date
  enddate : Date
  list : {}
  trans : any
  

  constructor(private TransactionService:TransactionService,  private router: Router) {}

  ngOnInit() {
    this.AllTransaction()
  }

  AllTransaction () {
    this.TransactionService.getAllTransaction().subscribe(data => {
      this.transactionList= data;
      this.FiltertransactionList = this.transactionList
      console.log(this.transactionList);
      for (this.trans of this.transactionList){
        console.log(typeof(this.DebitTransactionList))
        if (this.trans.type == "crédit")
          this.CreditTransactionList.push(this.trans)
        else if (this.trans.type == "débit"){
          this.DebitTransactionList.push(this.trans)
        }}
      console.log(this.transactionList[0]);})
    }

  FilteringByDate(){
    //this.FiltertransactionList.filter(d => new Date(d.date) > this.startdate && new Date(d.date)< this.enddate )
    for (this.trans of this.FiltertransactionList){
      console.log(this.startdate,this.enddate)
      if (this.trans.date in [new Date(this.startdate),new Date(this.enddate)]){
        this.FiltertransactionList.push(this.trans)
      }}
      console.log(this.FiltertransactionList)
  }

  AllTransactionListFilter(){
    this.FiltertransactionList = this.transactionList
  }

  CreditTransactionListFilter(){
    this.FiltertransactionList = this.CreditTransactionList
  }

  DebitTransactionListFilter(){
    this.FiltertransactionList = this.DebitTransactionList
  }

  retirerArgent(){
    this.router.navigate(['/RetirerArgent']);
  }
  deposerArgent(){
    this.router.navigate(['/DeposerArgent']);
  }




}