import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAutoEntityService, IEntityInfo } from '@briebug/ngrx-auto-entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({providedIn:'root'})

export class UserEntityService implements IAutoEntityService<User> {

  constructor(private http:HttpClient) { }

  load(entityInfo: IEntityInfo, id: number): Observable<User> {
    return this.http.get<User>(
      `${environment.rootUrl}/${entityInfo.modelName}/${id}`
    );
  }

  loadAll(entityInfo: IEntityInfo): Observable<any> {
    return this.http.get(
      // `${environment.rootUrl}/${entityInfo.modelName}`
      `${environment.rootUrl}`
    );
  }

  create(entityInfo: IEntityInfo, entity: User): Observable<User> {
    return this.http.post<User>(
      `${environment.rootUrl}/${entityInfo.modelName}`,
      entity
    );
  }

  update(entityInfo: IEntityInfo, entity: User): Observable<User> {
    return this.http.patch<User>(
      `${environment.rootUrl}/${entityInfo.modelName}/${entity.id}`,
       entity
    );
  }

  delete(entityInfo: IEntityInfo, entity: User): Observable<User> {
    return this.http.delete<User>(
      `${environment.rootUrl}/${entityInfo.modelName}/${entity.id}`
    ).pipe(map(() => entity));
  }

}
