import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject<string>('Initial data');
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: string) {
    this.dataSource.next(data);
  }
}