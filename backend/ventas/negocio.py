from .models import *
class Negocio:
    
    #TipoUsuario

    def get_TipoUsuario(id):
        try:
            return TipoUsuario.objects.get(pk=id)
        except TipoUsuario.DoesNotExist:
            return None
        
    def tipoUsuarioCrear(id, nombre):
        tipoUsuario = Negocio.get_TipoUsuario(int(id))
        if (tipoUsuario== None):
            try:    
                tipoUsuario = TipoUsuario(nombre)
            except ValueError:
                raise ValueError("Error")
        else:
            tipoUsuario.nombre = nombre
        print("tipoUsuario", tipoUsuario)
        
        tipoUsuario.save()
        return True
    
    def tipoUsuarioGet(id):
        return Negocio.get_TipoUsuario(id)
    
    def tipoUsuarioEliminar(id):
        tipoUsuario = Negocio.get_TipoUsuario(int(id))
        ###  Recuerde que no debiera eliminar, mejor desactivar el registro

        tipoUsuario.delete()

    # Usuario

    def get_Usuario(nombre):
        try:
            return Usuario.objects.get(pk=nombre)
        except Usuario.DoesNotExist:
            return None

    def usuarioCrear(nombre, clave, idTipoUsuario):
        usuario = Negocio.get_Usuario(str(nombre))
        if usuario is None:
            try:
                #aqui pongo la Pk ya que no es una id tradicional y no auto genera en secuencia
                usuario = Usuario(nombre=nombre, clave=clave, idTipoUsuario=idTipoUsuario) 
            except ValueError:
                raise ValueError("Error")
        else:
            usuario.nombre = nombre
            usuario.clave = clave
            usuario.idTipoUsuario = idTipoUsuario
        usuario.save()
        return True

    def usuarioGet(nombre):
        return Negocio.get_Usuario(nombre)

    def usuarioEliminar(nombre):
        usuario = Negocio.get_Usuario(str(nombre))
        if usuario:
            usuario.delete()
        return True

    # Clase

    def get_Clase(id):
        try:
            return Clase.objects.get(pk=id)
        except Clase.DoesNotExist:
            return None

    def claseCrear(id, nombre, horario):
        clase = Negocio.get_Clase(int(id))
        if clase is None:
            try:
                clase = Clase(nombre=nombre, horario=horario)
            except ValueError:
                raise ValueError("Error")
        else:
            clase.nombre = nombre
            clase.horario = horario
        clase.save()
        return True

    def claseGet(id):
        return Negocio.get_Clase(id)

    def claseEliminar(id):
        clase = Negocio.get_Clase(int(id))
        if clase:
            clase.delete()
        return True

    # Asistencia

    def get_Asistencia(id):
        try:
            return Asistencia.objects.get(pk=id)
        except Asistencia.DoesNotExist:
            return None

    def asistenciaCrear(id, usuario_id, idClase_id, fecha, presente):
        asistencia = Negocio.get_Asistencia(int(id))
        if asistencia is None:
            try:
                asistencia = Asistencia(usuario_id=usuario_id, idClase_id=idClase_id, fecha=fecha, presente=presente)
            except ValueError:
                raise ValueError("Error")
        else:
            asistencia.usuario_id = usuario_id
            asistencia.idClase_id = idClase_id
            asistencia.fecha = fecha
            asistencia.presente = presente
        asistencia.save()
        return True

    def asistenciaGet(id):
        return Negocio.get_Asistencia(id)

    def asistenciaEliminar(id):
        asistencia = Negocio.get_Asistencia(int(id))
        if asistencia:
            asistencia.delete()
        return True