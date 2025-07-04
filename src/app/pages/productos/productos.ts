import { Component } from '@angular/core';
import { Card } from '../../components/atoms/card/card';
import { CardProps } from '../../interfaces/interfaces';

@Component({
  selector: 'app-productos',
  imports: [Card],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})

export class Productos {

  products: CardProps[] = [
    {
      id: '1',
      title: 'Guantes de Seguridad',
      brand: 'Marca Industrial',
      price: 45000,
      imgSrc: 'https://picsum.photos/300/200?random=1'
    },
    {
      id: '2',
      title: 'Casco de Protección',
      brand: 'SafetyPro',
      price: 75000,
      imgSrc: 'https://picsum.photos/300/200?random=2'
    },
    {
      id: '3',
      title: 'Botas de Seguridad',
      brand: 'WorkSafe',
      price: 120000,
      imgSrc: 'https://picsum.photos/300/200?random=3'
    },
    {
      id: '4',
      title: 'Chaleco Reflectivo',
      brand: 'VisibilityPlus',
      price: 35000,
      imgSrc: 'https://picsum.photos/300/200?random=4'
    },
    {
      id: '5',
      title: 'Gafas de Protección',
      brand: 'ClearVision',
      price: 25000,
      imgSrc: 'https://picsum.photos/300/200?random=5'
    },
    {
      id: '6',
      title: 'Mascarilla N95',
      brand: 'AirSafe',
      price: 15000,
      imgSrc: 'https://picsum.photos/300/200?random=6'
    },
    {
      id: '7',
      title: 'Arnés de Seguridad',
      brand: 'HeightSafe',
      price: 180000,
      imgSrc: 'https://picsum.photos/300/200?random=7'
    },
    {
      id: '8',
      title: 'Tapones para Oídos',
      brand: 'SoundBlock',
      price: 8000,
      imgSrc: 'https://picsum.photos/300/200?random=8'
    },
    {
      id: '9',
      title: 'Overol de Trabajo',
      brand: 'WorkWear',
      price: 95000,
      imgSrc: 'https://picsum.photos/300/200?random=9'
    },
    {
      id: '10',
      title: 'Extintor Portátil',
      brand: 'FireSafe',
      price: 65000,
      imgSrc: 'https://picsum.photos/300/200?random=10'
    },
    {
      id: '11',
      title: 'Kit de Primeros Auxilios',
      brand: 'MedSafe',
      price: 85000,
      imgSrc: 'https://picsum.photos/300/200?random=11'
    },
    {
      id: '12',
      title: 'Señalización de Seguridad',
      brand: 'SignalPro',
      price: 12000,
      imgSrc: 'https://picsum.photos/300/200?random=12'
    }
  ];

  constructor() {
  }

  onAddToCart(event: any): void {
      console.log('Added to cart:', event);
    }
}
