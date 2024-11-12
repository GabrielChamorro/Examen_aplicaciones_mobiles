# RestFull Basado en Clases
# https://www.django-rest-framework.org/tutorial/3-class-based-views/

from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
import json
#importante
from .models import *
from .serializers import *
from .negocio import *
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.views import TokenObtainPairView


# Create your views here.

class JSONResponseOkRows(HttpResponse):
    def __init__(self, data,msg, **kwargs):
        #print(len(data))
        data= {"OK":True,"count":len(data),"registro":data,"msg":msg}
        #print("data",data)
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponseOkRows, self).__init__(content, **kwargs)


class JSONResponseOk(HttpResponse):
    def __init__(self, data, msg,**kwargs):
        #print("data",data)
        data= {"OK":True,"count":"1","registro":data,"msg":msg}
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponseOk, self).__init__(content, **kwargs)

class JSONResponseErr(HttpResponse):
    def __init__(self, data, **kwargs):
        data= {"OK":False,"count":"0","msg":data}
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponseErr, self).__init__(content, **kwargs)

#################


# tipoUsuario

class TipoUsuarioList(APIView):
    ##permission_classes = (IsAuthenticated,)
    def get(self, request, format=None):
        registros = TipoUsuario.objects.all()
        serializer = TipoUsuarioSerializer(registros, many=True)
        return JSONResponseOkRows(serializer.data, "")

    def post(self, request, format=None):
        data = JSONParser().parse(request)
        if not Negocio.tipoUsuarioCrear(data['id'], data['nombre']):
            return JSONResponseErr(None, msg="Error al crear el tipoUsuario", status=status.HTTP_400_BAD_REQUEST)
        return JSONResponseOk(None, msg="Registro Creado", status=status.HTTP_201_CREATED)
        
class TipoUsuarioDetail(APIView):
    #permission_classes = (IsAuthenticated,)
    def get(self, request,id,format=None):
        registro = Negocio.tipoUsuarioGet(id)
        serializer = TipoUsuarioSerializer(registro)
        #print("Registro serializer",serializer)
        return JSONResponseOk(serializer.data,msg="")
    
    #### Observe que  clienteCrear se llama dos veces en el post y en el Put
    def put(self, request,id,format=None):
        data = JSONParser().parse(request)
        print("hola modificar",data)
        if (not Negocio.tipoUsuarioCrear(id,data['nombre'])):
            return JSONResponseErr(None, status=status.HTTP_400_BAD_REQUEST)
        return JSONResponseOk(None,msg="Registro Actualizado")

    def delete(self, request, id, format=None):
        print("hola delete1")
        if (not Negocio.tipoUsuarioEliminar(id)):
            return JSONResponseErr(None, msg="Error al eliminar el tipo de usuario", status=status.HTTP_400_BAD_REQUEST)
        print("hola delete2")
        return Response(status=status.HTTP_204_NO_CONTENT)


# Usuario
class UsuarioList(APIView):
    def get(self, request, format=None):
        registros = Usuario.objects.all()
        serializer = UsuarioSerializer(registros, many=True)
        return JSONResponseOkRows(serializer.data, "")

    def post(self, request, format=None):
        data = JSONParser().parse(request)
        if not Negocio.usuarioCrear(data['nombre'], data['clave'], data['idTipoUsuario']):
            return JSONResponseErr(None, msg="Error al crear el usuario", status=status.HTTP_400_BAD_REQUEST)
        return JSONResponseOk(None, msg="Registro Creado", status=status.HTTP_201_CREATED)

class UsuarioDetail(APIView):
    def get(self, request, nombre, format=None):
        registro = Negocio.usuarioGet(nombre)
        serializer = UsuarioSerializer(registro)
        return JSONResponseOk(serializer.data, msg="")

    def put(self, request, nombre, format=None):
        data = JSONParser().parse(request)
        if not Negocio.usuarioCrear(nombre, data['clave'], data['idTipoUsuario']):
            return JSONResponseErr(None, status=status.HTTP_400_BAD_REQUEST)
        return JSONResponseOk(None, msg="Registro Actualizado")

    def delete(self, request, nombre, format=None):
        if not Negocio.usuarioEliminar(nombre):
            return JSONResponseErr(None, msg="Error al eliminar el usuario", status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)

# Clase
class ClaseList(APIView):
    def get(self, request, format=None):
        registros = Clase.objects.all()
        serializer = ClaseSerializer(registros, many=True)
        return JSONResponseOkRows(serializer.data, "")

    def post(self, request, format=None):
        data = JSONParser().parse(request)
        if not Negocio.claseCrear(data['id'], data['nombre'], data['horario']):
            return JSONResponseErr(None, msg="Error al crear la clase", status=status.HTTP_400_BAD_REQUEST)
        return JSONResponseOk(None, msg="Registro Creado", status=status.HTTP_201_CREATED)

class ClaseDetail(APIView):
    def get(self, request, id, format=None):
        registro = Negocio.claseGet(id)
        serializer = ClaseSerializer(registro)
        return JSONResponseOk(serializer.data, msg="")

    def put(self, request, id, format=None):
        data = JSONParser().parse(request)
        if not Negocio.claseCrear(id, data['nombre'], data['horario']):
            return JSONResponseErr(None, status=status.HTTP_400_BAD_REQUEST)
        return JSONResponseOk(None, msg="Registro Actualizado")

    def delete(self, request, id, format=None):
        if not Negocio.claseEliminar(id):
            return JSONResponseErr(None, msg="Error al eliminar la clase", status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)

# Asistencia
class AsistenciaList(APIView):
    def get(self, request, format=None):
        registros = Asistencia.objects.all()
        serializer = AsistenciaSerializer(registros, many=True)
        return JSONResponseOkRows(serializer.data, "")

    def post(self, request, format=None):
        data = JSONParser().parse(request)
        if not Negocio.asistenciaCrear(data['id'], data['usuario'], data['idClase'], data['fecha'], data['presente']):
            return JSONResponseErr(None, msg="Error al crear la asistencia", status=status.HTTP_400_BAD_REQUEST)
        return JSONResponseOk(None, msg="Registro Creado", status=status.HTTP_201_CREATED)

class AsistenciaDetail(APIView):
    def get(self, request, id, format=None):
        registro = Negocio.asistenciaGet(id)
        serializer = AsistenciaSerializer(registro)
        return JSONResponseOk(serializer.data, msg="")

    def put(self, request, id, format=None):
        data = JSONParser().parse(request)
        if not Negocio.asistenciaCrear(id, data['usuario'], data['idClase'], data['fecha'], data['presente']):
            return JSONResponseErr(None, status=status.HTTP_400_BAD_REQUEST)
        return JSONResponseOk(None, msg="Registro Actualizado")

    def delete(self, request, id, format=None):
        if not Negocio.asistenciaEliminar(id):
            return JSONResponseErr(None, msg="Error al eliminar la asistencia", status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_204_NO_CONTENT)
    






# Login para wea
class LoginView(TokenObtainPairView):
    def post(self, request):
        # Perform authentication checks here
        # Obtener datos de la solicitud (nombre y clave)
        nombre = request.data.get('nombre')
        clave = request.data.get('clave')

        # Verificar si el usuario existe
        usuario = Negocio.get_Usuario(nombre)

        if usuario is None:
            return Response({'detail': 'Usuario no encontrado'}, status=status.HTTP_404_NOT_FOUND)
        # Verificar si la clave es correcta         
        elif usuario.clave != clave:
            return Response({'detail': 'Contraseña incorrecta'}, status=status.HTTP_401_UNAUTHORIZED)
        # Generate tokens
        # Si las credenciales son correctas, generar los tokens
        refresh = RefreshToken.for_user(usuario)  # Generamos el token para el usuario
        access_token = str(refresh.access_token)

        return Response({'access_token': access_token, 'refresh_token': str(refresh)}, status=status.HTTP_200_OK)