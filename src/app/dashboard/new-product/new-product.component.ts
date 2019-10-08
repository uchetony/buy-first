import { ProductService } from './../../services/product/product.service';
import { CategoriesServiceService } from './../../services/categories/categories-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators'

@Component({
  selector: 'bf-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
  category$: Observable<any[]>;
  product = {};
  id;

  constructor(private categoryService: CategoriesServiceService, 
              private prodService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { 

    this.id = route.snapshot.paramMap.get('id')

    if ( this.id ) {
      this.prodService.getProduct(this.id).valueChanges().pipe(take(1)).subscribe(p =>  this.product = p)
    }
  }

  ngOnInit() {

   this.category$ = this.categoryService.getCategories().valueChanges()
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
