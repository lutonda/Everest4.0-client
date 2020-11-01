import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StorageServices } from './storage.service';
import { IService } from './service.interface';
import { User } from './../models/user';
import { AppService } from './app.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AppService<User> implements IService<User> {

  public user: User;
  constructor(public http: HttpClient, private store: StorageServices) {
    super(http, 'users');
  }


  upgrade(u: User, to: string): Observable<User> {
    u.roleId = to;
    return this.update(u)
  }

  one(id: string): Observable<User> {
    return this.getOne(id)
  }

  all(f: any): Observable<Array<User>> {
    return this.getAll(f)
  }

  update(o: any): Observable<User> {
    return this.updateOne(o);
  }

  create(o: any): Observable<User> {
    return this.createOne(o)
  }

}