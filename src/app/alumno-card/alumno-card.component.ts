import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alumno-card',
  templateUrl: './alumno-card.component.html',
  styleUrls: ['./alumno-card.component.scss'],
})
export class AlumnoCardComponent implements OnInit {
  @Input() nombre = 'nombre';
  @Input() nota: any = 0;

  constructor() {}

  ngOnInit(): void {}
}
