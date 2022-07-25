import { Component, OnInit } from '@angular/core';
import { ServicioCeldasService } from '../servicios/servicio-celdas.service';

@Component({
  selector: 'app-celdas',
  templateUrl: './celdas.component.html',
  styleUrls: ['./celdas.component.css']
})
export class CeldasComponent implements OnInit {

  public celdas: any[]=[]
  constructor(public servicio:ServicioCeldasService) {
    this.servicio.buscarCeldas()

    .subscribe(respuesta=>{
      this.celdas=respuesta.data
      console.log(this.celdas)
    })
   }

  ngOnInit(): void {
  }

}
