import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {TimeCards} from '../models/time-cards';
import { Observable } from 'rxjs';
import { TimeTable } from '../models/time-table';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = "assets/time_table.json";
  static readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  constructor(private httpClient: HttpClient){}

  public createTimeCard(timeCard: TimeCards):Observable<boolean>{
    return new Observable<true>();
  }

  public updateTimeCard(timeCard: TimeCards):Observable<boolean>{
    return new Observable<true>();
  }

  public deleteTimeCard(id: number):Observable<boolean>{
    return new Observable<true>();
  }

  public getTimeCardById(id: number):Observable<TimeCards>{
    return this.httpClient.get<TimeCards>(this.apiURL,ApiService.httpOptions);
  }

  public getTimeCards():Observable<TimeCards[]>{
    let cards = new Observable<TimeCards[]>();
    return cards;
  }

  public getTimeTable():Observable<TimeTable[]>{
    let timeTable = new Observable<TimeTable[]>();
    return timeTable;
  }
}
