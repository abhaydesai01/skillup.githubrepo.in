import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import emailjs from 'emailjs-com';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitting = false;

  onSubmit() {
    if (this.submitting) return;

    this.submitting = true;

    const serviceID = 'service_xg5me7a';
    const templateID = 'template_0ycr8ow';
    const publicKey = '_pdwFA3IwLKYLtYyB';

    const templateParams = {
      name: this.formData.name,
      email: this.formData.email,
      subject: this.formData.subject,
      message: this.formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        alert('✅ Message sent successfully!');
        this.formData = { name: '', email: '', subject: '', message: '' };
        this.submitting = false;
      }, (error) => {
        console.error('EmailJS Error:', error);
        alert('❌ Failed to send message. Try again later.');
        this.submitting = false;
      });
  }
}
