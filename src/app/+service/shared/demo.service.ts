import { Injectable, Inject} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

@Injectable()
export class DemoService {

    weburl: string;

    queryResult: any;

    constructor(private http: Http, @Inject("RESTURL") private resturl) { }

    getData(): Observable<any> {
        if (!this.queryResult)
            return this.http.get(this.resturl + "customer"). map(e => e.json());
       else 
            return Observable.from(this.queryResult);
    }

    saveData() { }

}
