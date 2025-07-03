import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jumbotron.html',
  styleUrl: './jumbotron.css'
})
export class Jumbotron implements OnInit, OnDestroy {
  private intervalId: any;
  currentImageIndex = 0;

  backgroundImages = [
    'https://storage.googleapis.com/induguantes-bucket/fachada-01.jpg',
    'https://storage.googleapis.com/induguantes-bucket/fachada-03.jpg',
    'https://storage.googleapis.com/induguantes-bucket/fachada-02.jpg',
    'https://storage.googleapis.com/induguantes-bucket/fachada-04.jpg',
    'https://storage.googleapis.com/induguantes-bucket/fachada-06.jpg',
    'https://storage.googleapis.com/induguantes-bucket/fachada-05.jpg',
    'https://storage.googleapis.com/induguantes-bucket/fachada-07.jpg'
  ];

  autoSlideInterval = 4000;
  ngOnInit() {
    this.startImageRotation();
  }

  ngOnDestroy() {
    this.stopImageRotation();
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, this.autoSlideInterval);
  }

  stopImageRotation() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImages.length;
  }

  previousImage() {
    this.currentImageIndex = this.currentImageIndex === 0
      ? this.backgroundImages.length - 1
      : this.currentImageIndex - 1;
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
  }

  getCurrentImageUrl(): string {
    return this.backgroundImages[this.currentImageIndex];
  }

  // Pause rotation on hover
  onMouseEnter() {
    this.stopImageRotation();
  }

  // Resume rotation when mouse leaves
  onMouseLeave() {
    this.startImageRotation();
  }
}
