import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-wha-button',
  imports: [],
  templateUrl: './wha-button.html',
  styleUrl: './wha-button.css'
})
export class WhatsappButton {
  phone = environment.WACONTACT;
  whatsappLink = `https://wa.me/${this.phone}`;
}
