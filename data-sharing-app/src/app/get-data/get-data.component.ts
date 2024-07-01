import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html'
})
export class GetDataComponent implements OnInit, OnDestroy {
  data!: string;
  subscription!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.subscription = this.dataService.currentData.subscribe(data => {
      this.data = data;
      console.log('Data received:', data);  // Check if data is being received
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();  // Clean up the subscription
  }
}