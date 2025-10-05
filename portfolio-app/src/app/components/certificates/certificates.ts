import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.css'
})
export class Certificates {

  certificateUrl = 'https://courses-in.skillup.online/programcertificates/5f4d498c28cf474abd1f3324b12238a4';

  viewCertificate() {
    window.open(this.certificateUrl, '_blank');
  }
}
