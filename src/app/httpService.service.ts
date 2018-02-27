import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  constructor(private http: Http) {
  }
  teams = [];
  getTeams(): Observable<any> {

    /// ...using get request
    return this.http.get('https://my-project-c46a9.firebaseio.com/Teams.json')
    /// ...and calling .json() on the response to return data
      .map((res) => res.json())
      ///...errors if any
      .catch((error) => Observable.throw(error.json().error || 'Server error'));
  }

  getDataFromServer(url, data) {
    return this.http.get(url, data)
      .catch(this.handleError);
  }
  storeForm(url,form) {
    return this.http.post(url,form)
      .catch(this.handleError);

  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
