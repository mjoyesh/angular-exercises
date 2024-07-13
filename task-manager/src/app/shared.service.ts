import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private taskAddedSource = new Subject<void>();
  taskAdded$ = this.taskAddedSource.asObservable();

  notifyTaskAdded() {
    this.taskAddedSource.next();
  }
}
