import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class EventService {

  constructor(private http: Http) { }

  getAllEvents(): Observable<Array<Event>> {
    return this.http.get('/api/internal/events')
      .map(res => res.json())
  }

  getSingleEvent(eventKey: string): Observable<Event> {
    return this.http.get(`/api/internal/events/${eventKey}`)
      .map(res => res.json())
  }

  toggleActivation(eventKey: string, value: boolean): Observable<boolean> {
    let url = `/api/internal/events/${eventKey}/active`;
    let call = value ? this.http.put(url, true) : this.http.delete(url);
    return call.map(res => res.json());
  }

}

export class Event {
  constructor(public key: string,
              public name: string,
              public imageUrl: string,
              public begin: string,
              public end: string,
              public location: string,
              public active: boolean,
              public lastUpdate: string) {}
}
