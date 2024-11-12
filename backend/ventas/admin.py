from django.contrib import admin

from .models import *

# Register your models here.

#admin.site.register(Usuario)
admin.site.register(TipoUsuario)
admin.site.register(Usuario)
admin.site.register(Clase)
admin.site.register(Asistencia)