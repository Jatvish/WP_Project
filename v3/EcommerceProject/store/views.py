from django.shortcuts import render

def home(request):
    return render(request, 'store/SampleJquery.html')

def about(request):
    return render(request, 'store/About.html')

def cart(request):
    return render(request, 'store/cart.html')

def order_placed(request):
    return render(request, 'store/OrderPlaced.html')
