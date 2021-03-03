import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isDevMode } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
const apikey = "EAAFc0IurJEcBAEGV9Nm7Pn2xMrymLusKT6NVW7zPj5klUDeXCaqOrNZAyvuXhyoLTKq5iFGoHJYgXo5765EzMtRYgpDJAubWrQP1rT46FgKqx3Ho4WX8x1DWXAnEWu0oBZBm56rdhV961s4TrSkPzCEBsNrMBHbuOWzTByPJuxniGzGlOLZA5ZBWvFrPJfpSvPl6XFmk7AZDZD"
const serverAddress = 'http://localhost:9800'//'http://185.247.119.207:9800';//
@Injectable({
  providedIn: 'root'
})

export class AppService<T> {
  static serverAddress = serverAddress;
  protected headers;
  protected url;
  public serverAddress = serverAddress;
  constructor(public http: HttpClient, private service: string) {
    this.url = `${this.serverAddress}/api/v1/${service.split('.').join('/')}`;


    try {
      let data = JSON.parse(localStorage.getItem("local_everest_key"));
      this.headers = new HttpHeaders({ apikey: apikey, authorization: data.filter(o => o.key === 'current_user')[0].data.apikey })
    } catch (e) { }

  }
  get apikey() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' })
    return this.http.get('./angular.json', { headers });
  }
  protected getOne(s: string): Observable<any> {
    return this.http.get(this.url + '/' + s, { 'headers': this.headers })
  }

  protected getAll(a: any): Observable<any> {
    let str = '';
    
    for (var key in a) {
      if (str !== '') {
        str += '&';
      }
      str += key + '=' + encodeURIComponent(a[key]);
    }
    return this.http.get(this.url + '?' + str, { 'headers': this.headers })
  }

  protected createOne(o: T): Observable<any> {
    return this.http.post(this.url, o, { 'headers': this.headers })
  }

  protected updateOne(o: any): Observable<any> {
    return this.http.put(this.url, o, { 'headers': this.headers })
  }

  protected deleteOne(id): Observable<any> {
    return this.http.delete(this.url + '/' + id, { 'headers': this.headers })
  }
}
