import { Injectable, Inject} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';

@Injectable()
export class DemoService {

    weburl: string;

    queryResult: any;

    constructor(private http: Http, @Inject("RESTURL") private resturl) { }

    getData(): Observable<Rest.QueryResult<Rest.Customer>> {
        if (!this.queryResult)
            return this.http.get(this.resturl + "customer").map(e => e.json());
        else
            return Observable.from(this.queryResult);
    }

    load(id: string): Observable<Rest.Customer> {
        return this.http.get(this.resturl + `customer/detail/${id}`)
            .map(e => e.json());
    }

    saveData(customer: Rest.Customer): Observable<Rest.Customer> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.resturl + "customer", JSON.stringify(customer), { headers: headers }).map(e => e.json());
    }

}
