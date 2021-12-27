import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { compte } from 'src/app/entities/compte';
import { CompteService } from '../compte/compte.service';

@Component({
  selector: 'app-createcompte',
  templateUrl: './createcompte.component.html',
  styleUrls: ['./createcompte.component.scss']
})
export class CreatecompteComponent implements OnInit {

  constructor(private compteservice:CompteService, private router: Router) { }
  NewCompte : compte=new compte()
  Compt : compte=new compte()
  submitted = false;

  ngOnInit(): void {
  }

  createcompte(){
  this.compteservice.createCompte(this.NewCompte).subscribe(data => {
    console.log("////");
    
    this.Compt = data;})
    this.router.navigate(['/compte']);
}

changeValue(sexe : string){
  this.NewCompte.sexe=sexe;
}


}
