import { Component } from '@angular/core';
import { Navbar } from '../../components/molecules/navbar/navbar';
import { Footer } from '../../components/molecules/footer/footer';
import { WhatsappButton } from '../../components/atoms/whatsapp-button/wha-button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Navbar, Footer, WhatsappButton, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
  standalone: true,
})
export class MainLayout {

}
