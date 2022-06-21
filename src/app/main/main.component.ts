import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  alumnos: Alumno[] = [
    { nombre: 'Juan', curso: 1, nota: 8 },
    { nombre: 'micaela', curso: 1, nota: 9 },
    { nombre: 'Clara', curso: 1, nota: 6 },
    { nombre: 'Federico', curso: 1, nota: 3 },
    { nombre: 'Agustin', curso: 1, nota: 5 },
    { nombre: 'Lara', curso: 1, nota: 8 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
