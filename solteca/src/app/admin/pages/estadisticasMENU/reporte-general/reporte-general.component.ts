import { AdministradorService } from './../../../../services/administrador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte-general',
  templateUrl: './reporte-general.component.html',
  styleUrls: ['./reporte-general.component.css'],
})
export class ReporteGeneralComponent implements OnInit {
  constructor(private AS: AdministradorService) {}

  ngOnInit(): void {}

}
