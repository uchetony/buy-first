import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    this.db.list('/products').push(product)
  }

  getAll(): AngularFireList<any[]> {
    return this.db.list('/products')
  }

  getProduct(productId): AngularFireObject<Product[]> {
    return this.db.object('/products/' + productId);
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product)
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove()
  }
}
