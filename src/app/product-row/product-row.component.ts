import {
  Component,
  Input,
  HostBinding
  } from '@angular/core';
import { Product } from '../product.model';
import { Image } from './product-image/product-image.component'

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit() {
  }

}
