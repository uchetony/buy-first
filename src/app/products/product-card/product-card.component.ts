import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bf-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product;
  @Input('form') form;

  
  constructor() { }

  ngOnInit() {

  }

}
