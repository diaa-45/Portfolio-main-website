import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports:[CommonModule,RouterModule,ReactiveFormsModule],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit  {
  loading = false;
  contactForm! : FormGroup;
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}
  ngOnInit(): void {
    
  this.contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  }

  onSubmit() {
    if (this.contactForm.invalid) return;
    this.loading = true;

    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: () => {
        alert("message sent successfully")
        this.contactForm.reset();
        this.loading = false;
      },
      error: () => {
        alert("error on sending message")
        this.loading = false;
      },
    });
  }
}
