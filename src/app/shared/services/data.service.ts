import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  // encodeQueryParams(params) {
  //   let ret = [];
  //   for (let d in params)
  //     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(params[d]));
  //   return ret.join('&');
  // }

  get(url: string, params?: any): Observable<Response> {
    let options = (params ? new RequestOptions({ params: params }) : null);
    return this.http.get(url, options).map(
      (res: Response) => {
        return res;
      }).catch(this.handleError);
  }

  put(url: string, dataObj: any): Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(url, JSON.stringify(dataObj), options)
      .catch(this.handleError);
  }

  post(url: string, dataObj: any): Observable<Response> {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(url, JSON.stringify(dataObj), options)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch (err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'server error');
  }

}