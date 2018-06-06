import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServerService {
    // public url = 'http://127.0.0.1:5000/';
    public url = 'http://localhost:8983/solr/articlescollection/select?q=';
    public query: string;
    public pattern = /([\!\*\+\-\=\<\>\&\|\(\)\[\]\{\}\^\~\?\:\\/"])/g;
    public default_field = '&df=text_custom';
    public settings = '&fl=*,score&rows=100&wt=json';
    public search: string;
    constructor(private  http: HttpClient) {}
    findJournals(mytitle: string, myabstract: string) {
        this.query = mytitle + ' ' + myabstract;
        this.query = this.query.replace(this.pattern, '\\$1');
        console.log(this.query);
        this.search = this.url + this.query + this.default_field + this.settings;
        this.search = encodeURI(this.search);
        return this.http.post(this.search,
            {});
    }
}
