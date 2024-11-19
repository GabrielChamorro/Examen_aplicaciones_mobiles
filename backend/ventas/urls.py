#from django.contrib import admin
from django.urls import path
from . import views_backend
from . import views_restfull
# from . import views_soap
from . import views_load
from rest_framework_simplejwt import views as jwt_views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
urlpatterns = [
    # URLs para TipoUsuario
    path('backend/tipousuario/<int:id>', views_backend.TipoUsuarioDetail.as_view()),  # Detalles de un tipo de usuario específico
    path('backend/tipousuario/', views_backend.TipoUsuarioList.as_view()),  # Lista de tipos de usuario

    # URLs para Usuario
    path('backend/usuario/<int:id>', views_backend.UsuarioDetail.as_view()),  # Detalles de un usuario específico
    path('backend/usuario/', views_backend.UsuarioList.as_view()),  # Lista de usuarios

    #login
    path('backend/login/', views_backend.LoginView.as_view(), name='token_obtain_pair'),

    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    

    # URLs para Clase
    path('backend/clase/<int:id>', views_backend.ClaseDetail.as_view()),  # Detalles de una clase específica
    path('backend/clase/', views_backend.ClaseList.as_view()),  # Lista de clases

    # URLs para Asistencia
    path('backend/asistencia/<int:id>', views_backend.AsistenciaDetail.as_view()),  # Detalles de una asistencia específica
    path('backend/asistencia/', views_backend.AsistenciaList.as_view()),  # Lista de asistencias



    
    
   

    
]
