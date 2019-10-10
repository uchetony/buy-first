import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Input('category') category;
  @Input('activeCategory') activeCategory;
  constructor() { }

  ngOnInit() {
  }

}
