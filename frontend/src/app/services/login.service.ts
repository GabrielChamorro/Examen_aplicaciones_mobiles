import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CuerpoLoginFormato } from './../interfaces/ICuerpoLogin';
import { UsuarioFormato } from './../interfaces/IUsuario';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly URL_LOGIN: string = 'http://localhost:9010/ventas/backend/login/';
  public usuarioLogeado: UsuarioFormato | null = null;
  public accessToken: string | null = null;
  public tipoUsuario: string | null = null;
  // Observador de cargando
  private $cargando = new BehaviorSubject<boolean>(false);
  public cargando = this.$cargando.asObservable();
  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  public iniciarSesion(usuarioVar: string, contraseniaVar: string){
    this.$cargando.next(true);

    const cuerpo: CuerpoLoginFormato = {
      nombre: usuarioVar,
      clave: contraseniaVar
    }
    this.http.post<UsuarioFormato>(this.URL_LOGIN, JSON.stringify(cuerpo), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .subscribe(resultado  => {
      this.usuarioLogeado = resultado;
      this.accessToken = resultado.access_token;
      this.tipoUsuario = resultado.tipoUsuario
      this.$cargando.next(false);
      console.log(resultado);
      console.log('este es usuarioLogueado',this.usuarioLogeado);
      console.log('este es accessToken',this.accessToken);
      console.log('este es tipoUsuario',this.tipoUsuario);
      if (this.tipoUsuario == 'alumno'){
        this.router.navigate(['/','pagina-camara']);
      }else{
        this.router.navigate(['/','pagina-qr']);
      }
      
    });

  }

  public cerrarSesion(){
    if(this.usuarioLogeado){
      this.usuarioLogeado = null;
      this.accessToken = null;
    }
  }
}
