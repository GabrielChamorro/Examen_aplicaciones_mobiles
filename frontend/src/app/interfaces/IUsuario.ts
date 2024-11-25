export interface UsuarioFormato {
    'access_token': string,
    'refresh_token': string,
    nombre: string,
    tipoUsuario: 'alumno' | 'docente'
}