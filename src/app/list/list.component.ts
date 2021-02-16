import { EnvoiService } from './../services/envoi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public navigation_url : any;//pour récupérer l'url saisi au niveau du navigateur  
  
  listEnvoi:any //pour récupérer la liste des envois
    
    
  constructor(private envoiService:EnvoiService) {

    envoiService.listEnvoi() //Appelle la methode ListEnvoi dans EnvoiService
  .subscribe(
    result=>{
      console.log(result);
      this.listEnvoi=result;
    },
    error=>{console.log(error);
    }

  ); 
  }

  ngOnInit(): void {
  }

}
