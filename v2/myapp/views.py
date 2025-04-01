from django.shortcuts import redirect,render
from .forms import SampleForm

def home(request):
    return render(request, 'myapp/SampleJquery.html')

def about(request):
    return render(request, 'myapp/About.html')

def cart(request):
    return render(request, 'myapp/cart.html')

def order_placed(request):
    return render(request, 'myapp/OrderPlaced.html')

def home_redirect(request):
    return redirect('home')  # Ensure this matches the correct URL pattern

def sample_jquery(request):
    return render(request, 'myapp/SampleJquery.html')  # Ensure the filename matches

def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect("home")  # Redirect to home after login
        else:
            return render(request, "myapp/login.html", {"error": "Invalid credentials"})

    return render(request, "myapp/login.html")