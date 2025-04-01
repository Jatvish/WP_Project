from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),  # Ensure this maps correctly
    path('about/', views.about, name='about'),
    path('cart/', views.cart, name='cart'),
    path('login/', views.login_view, name='login'),
    path('order-placed/', views.order_placed, name='order_placed'),
    path('samplejquery/', views.sample_jquery, name='sample_jquery'),
]
