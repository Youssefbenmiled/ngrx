import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAutoEntityService, IEntityInfo } from '@briebug/ngrx-auto-entity';
import { Observable,of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Domaine } from './domaines/domaine.model';

@Injectable({
  providedIn: 'root'
})
export class SharedEntityService  implements IAutoEntityService<any> {

  constructor(private http:HttpClient) { }
  load(entityInfo: IEntityInfo, id: number): Observable<any> {
    return this.http.get<any>(
      `${environment.rootUrl}/${entityInfo.modelName}/${id}`
    );
  }

  loadAll(entityInfo: IEntityInfo): Observable<any> {
    return this.http.get(
      `${environment.rootUrl}/${entityInfo.modelName}/getAll2`
      // `${environment.rootUrl}`
    );
  }

  create(entityInfo: IEntityInfo, entity: any): Observable<any> {
    return this.http.post<any>(
      `${environment.rootUrl}/${entityInfo.modelName}/add2`,
      // `${environment.rootUrl}`,
      entity
    );
  }

  update(entityInfo: IEntityInfo, entity: any): Observable<any> {
    return this.http.patch<any>(
      `${environment.rootUrl}/${entityInfo.modelName}/update2`,
       entity
    );
  }

  delete(entityInfo: IEntityInfo, entity: any): Observable<any> {
    return this.http.delete<any>(
      `${environment.rootUrl}/${entityInfo.modelName}/delete/${entity.id_domaine}`
    ).pipe
    (map(() => entity));
  }
}
