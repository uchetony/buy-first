import { Product } from './../models/product/product';
import { CategoriesServiceService } from './../services/categories/categories-service.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bf-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  filteredProducts;
  products;
  category;
  activeCategory: string;
  productSubscription: Subscription;
  categorySubscription: Subscription;
 

  constructor(private prodService: ProductService,
              private categoryService: CategoriesServiceService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    // use snapshotChanges().pipe(map()) to store the key of the product from the database
    this.productSubscription = this.prodService.getAll().snapshotChanges().pipe(
      map(
        changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()}))))
      .subscribe(
        product => {
          this.products = product

          // set filtered products to be the same as the products from the database
          this.filteredProducts = this.products

          // then get the selected category from the url when a category is clicked in the DOM
          this.route.queryParamMap.subscribe(
            params => {
              this.activeCategory = params.get('category')

              // then filter the products allowing for case insensitivity
              this.filteredProducts = (this.activeCategory) ? this.products.filter(p => p.category.toLowerCase() === this.activeCategory.toLocaleLowerCase()) : this.products
              if (this.products.category === null) this.filteredProducts = "No products"
            }
        )})

     // use snapshotChanges().pipe(map()) to store the key of the category from the database
    this.categorySubscription = this.categoryService.getCategories().snapshotChanges().pipe(map(
      changes => changes.map(c => ({key: c.payload.key, ...c.payload.val()}))
    )).subscribe(category => this.category = category)
 
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe()
    this.categorySubscription.unsubscribe()
  }

}
