import { Component, OnInit } from '@angular/core';
import { DomaineFacade } from '../domaine.facade';
import { Domaine } from '../domaine.model';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DomainesFormComponent } from '../domaines-form/domaines-form.component';

@Component({
  selector: 'app-domaines-list',
  templateUrl: './domaines-list.component.html',
  styleUrls: ['./domaines-list.component.css']
})
export class DomainesListComponent implements OnInit {
  domaines$:any
  domaine:Domaine

  constructor(private domaineFacade:DomaineFacade,private modalService: NgbModal,) {
    domaineFacade.loadAll()
   }

  ngOnInit(): void {
    this.domaineFacade.all$.subscribe(domaines=>this.domaines$=domaines)
  }

  editDomaine(domaine:Domaine){
    const modalRef = this.modalService.open(DomainesFormComponent);
    modalRef.componentInstance.title = "Modification domaine";
    modalRef.componentInstance.new = false;
    modalRef.componentInstance.domaine = {...domaine};

  }

  deleteDomaine(domaine:Domaine){
    this.domaineFacade.delete(domaine)
  }

  addDomaine(){


    const modalRef = this.modalService.open(DomainesFormComponent);
    modalRef.componentInstance.title = "Nouveau domaine";
    modalRef.componentInstance.new = true;

  }

}
