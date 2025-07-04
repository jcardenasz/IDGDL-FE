import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProductDetail } from '../interfaces/interfaces';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetailComponent implements OnInit {
  product: ProductDetail | null = null;
  currentImageIndex = 0;
  loading = true;

  // Mock product data
  mockProducts: ProductDetail[] = [
    {
      id: '1',
      title: 'Guantes de Seguridad',
      brand: 'Marca Industrial',
      price: 45000,
      imgSrc: 'https://picsum.photos/200/300?random=1',
      description: 'Guantes de seguridad industrial fabricados con materiales de alta calidad para protección en trabajos pesados.',
      specifications: [
        'Material: Nitrilo reforzado',
        'Talla: S, M, L, XL',
        'Resistente a químicos',
        'Antideslizante',
        'Certificación CE'
      ],
      images: [
        'https://picsum.photos/600/400?random=11',
        'https://picsum.photos/600/400?random=12',
        'https://picsum.photos/600/400?random=13',
        'https://picsum.photos/600/400?random=14'
      ],
      category: 'Protección de manos',
      inStock: true,
      sku: 'GLV-001'
    },
    {
      id: '2',
      title: 'Casco de Protección',
      brand: 'SafetyPro',
      price: 75000,
      imgSrc: 'https://picsum.photos/200/300?random=2',
      description: 'Casco de seguridad industrial con sistema de ventilación y ajuste cómodo para trabajos de construcción.',
      specifications: [
        'Material: ABS de alta resistencia',
        'Ventilación integrada',
        'Ajuste de trinquete',
        'Protección UV',
        'Norma ANSI Z89.1'
      ],
      images: [
        'https://picsum.photos/600/400?random=21',
        'https://picsum.photos/600/400?random=22',
        'https://picsum.photos/600/400?random=23'
      ],
      category: 'Protección de cabeza',
      inStock: true,
      sku: 'CSC-001'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.loadProduct(productId);
    });
  }

  loadProduct(id: string) {
    this.loading = true;

    setTimeout(() => {
      this.product = this.mockProducts.find(p => p.id === id) || null;
      this.loading = false;

      if (!this.product) {
        this.router.navigate(['/productos']);
      }
    }, 500);
  }

  changeImage(index: number) {
    this.currentImageIndex = index;
  }

  nextImage() {
    if (this.product) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
    }
  }

  previousImage() {
    if (this.product) {
      this.currentImageIndex = this.currentImageIndex === 0
        ? this.product.images.length - 1
        : this.currentImageIndex - 1;
    }
  }

  goBack() {
    this.location.back();
  }

  addToCart() {
    if (this.product) {
      console.log('Adding to cart:', this.product);
      alert(`${this.product.title} agregado al carrito`);
    }
  }

  getCurrentImage(): string {
    return this.product?.images[this.currentImageIndex] || '';
  }
}
