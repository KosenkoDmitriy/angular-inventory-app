import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  products: Product[]; // Array<Product>

  constructor() {

    this.products = [
      new Product(
        'SHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Running Shoes', 'Shoes'],
        109.99
      ),
      new Product(
        'NEATtoJacket',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Men', 'Apparel', 'Jackets & Vests'],
        29.99
      ),
      new Product(
        'Nice Hat',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        55.99
      ),
    ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}
