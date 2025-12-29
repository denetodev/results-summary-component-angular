import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SummaryItem } from "./summary.model";


@Injectable({ providedIn: 'root' })
export class DataService {
    private jsonUrl = 'assets/data.json';

    constructor(private http: HttpClient) {}

    getData(): Observable<SummaryItem[]> {
        return this.http.get<SummaryItem[]>(this.jsonUrl)
    }
}