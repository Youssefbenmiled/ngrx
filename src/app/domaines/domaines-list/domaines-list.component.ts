import { Component, OnInit } from '@angular/core';
import { DomaineFacade } from '../domaine.facade';
import { Domaine } from '../domaine.model';

@Component({
  selector: 'app-domaines-list',
  templateUrl: './domaines-list.component.html',
  styleUrls: ['./domaines-list.component.css']
})
export class DomainesListComponent implements OnInit {
  domaines$:any
  domaine:Domaine

  constructor(private domaineFacade:DomaineFacade) {
    domaineFacade.loadAll()
   }

  ngOnInit(): void {
    this.domaineFacade.all$.subscribe(domaines=>this.domaines$=domaines)
  }

  editDomaine(domaine:Domaine){

  }

  deleteDomaine(domaine:Domaine){
    this.domaineFacade.delete(domaine)
  }

  addDomaine(){
    const domaine = prompt("Please enter your libelle:");
      if (domaine !== null || domaine !== "") {
        this.domaineFacade.create(this.domaine)

      }
  }

}
