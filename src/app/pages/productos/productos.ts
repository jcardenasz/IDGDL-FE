import { Component } from '@angular/core';
import { Card } from '../../components/atoms/card/card';

@Component({
  selector: 'app-productos',
  imports: [Card],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  constructor() {
  }
  onAddToCart(event: any): void {
      console.log('Added to cart:', event);
    }
}
