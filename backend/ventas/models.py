from django.db import models

# Create your models here.


class TipoUsuario(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, unique=True)
    class Meta:
        db_table = 'tipoUsuario'

class Usuario(models.Model):
    nombre = models.CharField(max_length=100, unique=True, primary_key=True)
    clave = models.CharField(max_length=100)
    idTipoUsuario = models.ForeignKey(TipoUsuario, on_delete=models.CASCADE, db_column='idTipoUsuario')
    class Meta:
        db_table = 'usuario'

class Clase(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    horarioInicio = models.TimeField()
    horarioFinal = models.TimeField()
    dia = models.CharField(max_length=100)

    class Meta:
        db_table = 'clase'
    
class Asistencia(models.Model):
    id = models.AutoField(primary_key=True)
    alumno = models.ForeignKey(Usuario, on_delete=models.CASCADE, db_column='idUsuario')
    idClase = models.ForeignKey(Clase, on_delete=models.CASCADE, db_column='idClase')
    presente = models.BooleanField(default=False)

    class Meta:
        db_table = 'asistencia'


def cargarFoto(instance, filename):
    return "fotos/foto_{0}_{1}".format(instance.rut, filename )