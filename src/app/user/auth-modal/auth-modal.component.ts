import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {

  constructor(public modal: ModalService, private fb: FormBuilder) { }

  formLogin = this.fb.group({
    email: [''],
    password: ['']
  })

  formRegister = this.fb.group({
    name: [''],
    email: ['', Validators.email],
    age: [],
    password: [''],
    confirmPassword: [''],
    cel: []
  })

  ngOnInit(): void {
    this.modal.register('auth')
  }

  ngOnDestroy() {
    this.modal.unregister('auth')
  }

  submitLogin() {

  }

  submitRegister() {

  }

}
