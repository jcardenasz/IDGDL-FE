import { Component } from '@angular/core';
import { Card } from '../../components/atoms/card/card';
import { CardProps } from '../../interfaces/interfaces';
import { productsMock } from '../../mocks/products.mock';

@Component({
  selector: 'app-productos',
  imports: [Card],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  products: CardProps[] = productsMock;

  //pagination
  currentPage: number = 0;
  pageSize: number = 10;
  totalProducts: number = this.products.length;
  totalPages: number = Math.ceil(this.totalProducts / this.pageSize);

  get paginatedProducts(): CardProps[] {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    return this.products.slice(start, end);
  }

  goToPage(page: number): void {
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  get totalPagesArray(): undefined[] {
    return Array(this.totalPages);
  }

  get startItemIndex(): number {
    return this.currentPage * this.pageSize;
  }

  get endItemIndex(): number {
    const end = this.startItemIndex + this.pageSize;
    return end > this.totalProducts ? this.totalProducts : end;
  }

  constructor() {}

  onAddToCart(event: any): void {
    console.log('Added to cart:', event);
  }
}
