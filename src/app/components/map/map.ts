import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.html',
  styleUrl: './map.css'
})
export class Map implements OnInit {
  apiKey: string = environment.API_KEY_MAP;
  safeMapUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log('API Key loaded:', this.apiKey);
    const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=5.336028614724344,-72.3954750525791`;
    console.log('Full map URL:', mapUrl);
    
    // Sanitize the URL to make it safe for Angular
    this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl);
  }
}
