import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-set-data',
  templateUrl: './set-data.component.html'
})
export class SetDataComponent {
  inputData!: string;
  constructor(private dataService: DataService, private router: Router) { }

  setData(newData: string) {
    this.dataService.changeData(newData);
    console.log('Data sent:', newData)
    this.router.navigate(['/get-data']);
  }
}