from django.urls import path
from tasks import views

urlpatterns = [
    path('', views.task_list),
    path('<int:pk>/', views.task_detail),
]
