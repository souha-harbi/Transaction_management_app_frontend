import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { transaction } from "src/app/entities/transaction";
import { TransactionService } from "./transaction.service";


@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  transactionList : transaction[]

  constructor(private TransactionService:TransactionService,  private router: Router) {}

  ngOnInit() {
    this.AllTransaction()
  }

  AllTransaction () {
    this.TransactionService.getAllTransaction().subscribe(data => {
      this.transactionList= data;
      console.log("all compte");
      console.log(this.transactionList[0]);})
    }


  retirerArgent(){
    this.router.navigate(['/RetirerArgent']);
  }




}