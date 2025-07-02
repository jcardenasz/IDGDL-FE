import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface CardProps {
  title: string;
  brand: string;
  price: number;
  imgSrc: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title: string = '';
  @Input() brand: string = '';
  @Input() price: number = 0;
  @Input() imgSrc: string = '';
  
  @Output() addToCart = new EventEmitter<CardProps>();

  onAddToCart() {
    console.log('Add to cart clicked');
    this.addToCart.emit({
      title: this.title,
      brand: this.brand,
      price: this.price,
      imgSrc: this.imgSrc
    });
  }
}
