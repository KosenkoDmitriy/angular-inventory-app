import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  product: Product;

  constructor() {
    let newProduct = new Product(
      'Nice Hat',
      'A Nice Black Hat',
      '/resorces/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99
    );
    this.product = newProduct;
  }
}
