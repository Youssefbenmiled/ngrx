import { Entity, Key } from "@briebug/ngrx-auto-entity"


@Entity({modelName:'domaine',uriName:'domaine'})
export class Domaine{
  @Key id_domaine:number
  libelle_domaine:string
}
