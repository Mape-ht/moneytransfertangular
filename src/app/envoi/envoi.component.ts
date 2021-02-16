import { EnvoiService } from './../services/envoi.service';

import { Envoi } from './../models/envoi';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emetteur } from '../models/emetteur';
import { Recepteur } from '../models/recepteur';

@Component({
  selector: 'app-envoi',
  templateUrl: './envoi.component.html',
  styleUrls: ['./envoi.component.css']
})
export class EnvoiComponent implements OnInit {

  newEnvoi = new Envoi();

  constructor(private envoiService:EnvoiService, private router: Router ) { }

  addEnvoi(){

    //pour ajouter envoi on click
    this.envoiService.addEnvoi(this.newEnvoi).subscribe(data=>console.log(data));

    this.router.navigate(['list']); //redirection vers la liste apres envoi
  }

  
  ngOnInit(): void {

    this.newEnvoi.emetteur = new Emetteur // pour insérer un emetteur
    this.newEnvoi.recepteur = new Recepteur(); 
  }

}
