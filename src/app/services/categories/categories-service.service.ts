import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {

  constructor(private db: AngularFireDatabase) { }

  getCategories(): AngularFireList<any[]>{
    return this.db.list('/categories')  
  }
}
