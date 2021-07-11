import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { StoreInterface } from 'src/app/store/store';
import { DomaineFacade } from '../domaine.facade';
import { Domaine } from '../domaine.model';

@Component({
  selector: 'app-domaines-form',
  templateUrl: './domaines-form.component.html',
  styleUrls: ['./domaines-form.component.css']
})
export class DomainesFormComponent implements OnInit {
  @Input() title:string;
  @Input() new:boolean=false;

  @Input()domaine:Domaine

  constructor(
    public activeModal: NgbActiveModal,
    private domainefacade:DomaineFacade,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(this.new){
    this.domaine=new Domaine()
    }
  }

  onSubmit(form:NgForm){
    if(form.valid){
      if(this.new){

        this.domainefacade.create(this.domaine)
      }else{

        this.domainefacade.update(this.domaine)

      }
      this.activeModal.close();
      location.reload()
    }

  }

  confirmer(){}

}
