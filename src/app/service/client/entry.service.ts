import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Entry} from '../../model/Entry';

@Injectable()
export class EntryService {

  entryByCriteriaUri = 'http://localhost:8080/VaultDairy/entry/criteria';
  entryByIdUri = '/api/entry/current/id';
  entryUri = '/api/entry/all';

  constructor(private http: HttpClient) {
  }

  getAllEntries() {
    const allEntries = new Array<Entry>();

    this.http.get<Entry[]>(this.entryUri).subscribe(entries => {
      entries.forEach(entry => {
        console.log('Current entries from server: ', entry);
        allEntries.push(entry);
      });
    });

    return allEntries;
  }

  getEntryById(id: number): Observable<any> {
    return this.http.get<Entry>(this.entryByIdUri.replace('id', id.toString()));
  }

  getEntriesByCriteria(entry) {
   
  }

  // createEntry(entry) {
  //   return this.http.post()
  // }

}
