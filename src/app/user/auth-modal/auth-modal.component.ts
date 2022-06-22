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
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  }, {updateOn: 'blur'})

  formRegister = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'), Validators.required]],
    age: [],
    password: [''],
    confirmPassword: [''],
    cel: []
  }, {updateOn: 'blur'})

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
