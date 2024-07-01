import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  private items: string[] = ['Mango', 'Apple', 'Orange'];

  constructor() { }

  getItems(): string[] {
    return this.items;
  }
}