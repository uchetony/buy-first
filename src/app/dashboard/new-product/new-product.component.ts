import { Product } from './../../models/product/product';
import { ProductService } from './../../services/product/product.service';
import { CategoriesServiceService } from './../../services/categories/categories-service.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators'

@Component({
  selector: 'bf-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit, AfterViewInit{
  category$: Observable<any[]>;
  product: any = {};
  id;

  constructor(private categoryService: CategoriesServiceService, 
              private prodService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { 
                
    
  }

  ngOnInit() {
    
    // get the list of all categories and then display in the dropdown form
    this.category$ = this.categoryService.getCategories().valueChanges()
  }

  ngAfterViewInit() {

    // for editing an already existing product

    // get the id of the product from the activated route url, this id comes from the clicking a button in manage product
    this.id = this.route.snapshot.paramMap.get('id')

    // if there is an id in the url return the product with that id
    if ( this.id ) {
      this.prodService.getProduct(this.id).valueChanges().pipe(take(1)).subscribe(p =>  this.product = p)
    }
  }

  save(product) {

    if (this.id) {
      this.prodService.update(this.id, this.product)
    }else {
      this.prodService.create(product)
    }
    
    this.router.navigate(['/dashboard/manageproducts'])
  }

  delete() {
    if (!confirm("Are you sure you want to delete this item?")) return;

    this.prodService.delete(this.id)
    this.router.navigate(['/dashboard/manageproducts'])
  }

}
