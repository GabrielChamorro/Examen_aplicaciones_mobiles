import { Component, OnInit } from '@angular/core';
import { ViewWillEnter, ViewDidLeave, ViewWillLeave } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage implements ViewWillEnter, ViewDidLeave{

  public formulario!: FormGroup;
  public cargando_bloqueo: boolean = false;
  private subCargando!: Subscription;
  constructor(
    private fb: FormBuilder,
    private auth: LoginService
  ) {
    this.formulario = fb.group({
      usuarioVar: ['', [Validators.required]],
      contraseniaVar: ['', [Validators.required]]
    })

  }

  public validarFormulario(){
    const esValido = this.formulario.valid;
    if(!esValido){
      return
    }
    
    const usuarioVar = this.formulario.getRawValue()?.usuarioVar;
    const contraseniaVar = this.formulario.getRawValue()?.contraseniaVar;
    this.auth.iniciarSesion(usuarioVar, contraseniaVar);
  }

  public ionViewWillEnter(): void {
    this.subCargando = this.auth.cargando.subscribe(nuevoValor => {
      this.cargando_bloqueo = nuevoValor;
    });
  }

  public ionViewDidLeave(): void {
    if(this.subCargando){
      this.subCargando.unsubscribe();
    }
  }
}
