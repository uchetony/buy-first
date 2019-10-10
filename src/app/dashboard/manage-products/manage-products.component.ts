import { map } from 'rxjs/operators';
import { ProductService } from './../../services/product/product.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'bf-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit,OnDestroy {
  products:  any[]
  filteredProducts: any[]
  subscription: Subscription

  constructor(private prodService: ProductService) { }

  ngOnInit() {
    
    // use snapshotChanges().pipe(map()) to get the products along with their key from the database
    this.subscription = this.prodService.getAll().snapshotChanges().pipe(map(
      changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
    )).subscribe(product => this.filteredProducts = this.products = product)
  }

  filter(query: string) {
    this.filteredProducts = (query) ? this.products.filter(p => p.includes(query)) : this.products
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


}
