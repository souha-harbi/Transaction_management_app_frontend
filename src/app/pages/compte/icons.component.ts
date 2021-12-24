import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { compte } from "src/app/entities/compte";
import { CompteService } from "./compte.service";

@Component({
  selector: "app-icons",
  templateUrl: "icons.component.html"
})
export class IconsComponent implements OnInit {
  constructor(private compteservice:CompteService,  private router: Router) {}
  compteList : compte[]

  ngOnInit() {
    this.AllCompte()
  }

  AllCompte () {
    this.compteservice.getAllCompte().subscribe(data => {
      this.compteList= data;
      console.log("all compte");
      console.log(this.compteList[15]);})
    }

  createcompte(){
    this.router.navigate(['/addcompte']);
  }
}
