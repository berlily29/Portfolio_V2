import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      };

      emailjs.send('service_hml2uxb', 'template_anzs6kn', templateParams, 'lJdLUCdimJfVj_mdA')
        .then((response: emailjs.EmailJSResponseStatus) => {
          Swal.fire({
            title: "MESSAGE SENT SUCCESSFULLY!",
            // text: "Modal with a custom image.",
            imageUrl: "logo_black.png",
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: "LY Logo",
            timer: 1500,
            background:"#000000",
            color: "#ffffff",
            showConfirmButton: false,
          });
        }, (error) => {
          Swal.fire({
            title: "ERROR SENDING MESSAGE!",
            imageUrl: "logo_black.png",
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: "LY Logo",
            timer: 1500,
            background:"#ffffff",
            color: "#000000",
            showConfirmButton: false,
          });
        });
    } else {
      Swal.fire({
        title: "INVALID FIELDS!",
        // text: "Modal with a custom image.",
        imageUrl: "logo_black.png",
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: "LY Logo",
        timer: 1500,
        background:"#ffffff",
        color: "#000000",
        showConfirmButton: false,
      });
    }
  }
}
