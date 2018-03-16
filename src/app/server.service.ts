import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ServerService {
    constructor(private  http: HttpClient) {}
    findJournals(mytitle: string, myabstract: string) {
        return this.http.post('http://127.0.0.1:5000/',
            {observe: 'body', 'title': mytitle, 'abstract': myabstract });
    }
    /*
    getResults() {
        interface JournalsData {
            name: string;
            title: string;
            similarity: string;
        }
        this.http.get<JournalsData>
        ('http://localhost:5000/journal').subscribe(data => {
            console.log(data['journals']);
            return this.paok = data['journals'];
        });
    }*/
}
