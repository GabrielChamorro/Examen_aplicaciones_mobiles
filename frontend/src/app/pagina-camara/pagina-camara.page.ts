import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-pagina-camara',
  templateUrl: './pagina-camara.page.html',
  styleUrls: ['./pagina-camara.page.scss'],
})
export class PaginaCamaraPage implements OnInit {
  capturedImage: string | undefined = '';

  

  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,              // Calidad de la imagen (0-100)
        allowEditing: false,      // Permite edición antes de guardar
        resultType: CameraResultType.DataUrl, // Retorna la imagen como URL
        source: CameraSource.Camera, // Fuente: Cámara
      });
      this.capturedImage = image.dataUrl; // Guarda la imagen capturada
    } catch (error) {
      console.error('Error al abrir la cámara:', error);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
