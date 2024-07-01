import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item-list.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items!: string[];

  constructor(private itemListService: ItemListService) {}

  ngOnInit(): void {
    this.items = this.itemListService.getItems();
  }
}