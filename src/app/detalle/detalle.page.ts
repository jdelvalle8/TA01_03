import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons, IonBackButton, IonList, IonItem, IonLabel
} from '@ionic/angular/standalone';
import { Elemento } from './../models/elemento.model';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.page.html',
  styleUrls: ['detalle.page.scss'],
  //Añadir los componentes Ionic utilizados en el HTML
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonBackButton,
    IonButtons,
    IonItem,
    IonList,
    IonLabel
],
})
export class DetallePage implements OnInit {

  // TODO (Apartado 3 – Interpolación)
  //elementoDetalle será del tipo Elemento o null
  elementoDetalle: Elemento | null = null;

  constructor() {}

  ngOnInit(): void {
    // Recuperar el elemento pasado desde la página anterior mediante el estado de navegación
    // Pista: history.state
    const state = history.state;
    if (state?.elemento) {
      this.elementoDetalle = state.elemento;
    }
  }
}
