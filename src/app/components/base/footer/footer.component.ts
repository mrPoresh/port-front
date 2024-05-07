import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {
    
  }

  onSubmit(contactForm: FormGroup) {
    console.log(contactForm)
  }

}
