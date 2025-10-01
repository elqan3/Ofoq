from flask import Flask, render_template, request
import requests

app = Flask(__name__)

API_KEY = '8a5b44cb8f4e48bc6277be81ceb24b20'  # مفتاح الـ API

# تخزين نتائج البحث مؤقتًا
cached_flights = []

# 🏠 الصفحة الرئيسية
@app.route('/')
def index():
    lang = request.args.get('lang', 'en')  # اللغة
    return render_template('index.html', lang=lang)

# 🔍 البحث عن الرحلات
@app.route('/search', methods=['GET'])
def search():
    from_city = request.args.get('from')
    to_city = request.args.get('to')
    departure = request.args.get('departure')
    lang = request.args.get('lang', 'en')

    url = f"http://api.aviationstack.com/v1/flights?access_key={API_KEY}&dep_iata={from_city}&arr_iata={to_city}"
    response = requests.get(url)
    data = response.json()

    global cached_flights
    cached_flights = []

    for flight in data.get('data', [])[:5]:
        cached_flights.append({
            "airline": flight['airline']['name'],
            "from": flight['departure']['airport'],
            "to": flight['arrival']['airport'],
            "departure": flight['departure']['scheduled'],
            "arrival": flight['arrival']['scheduled'],
            "price": 200
        })

    return render_template('results.html', flights=cached_flights, lang=lang)

# 🛫 صفحة تفاصيل الحجز
@app.route('/booking/<int:flight_id>')
def booking(flight_id):
    lang = request.args.get('lang', 'en')
    if 0 <= flight_id < len(cached_flights):
        flight = cached_flights[flight_id]
        return render_template('booking.html', flight=flight, lang=lang)
    else:
        return "Flight not found", 404

# 🔑 صفحة تسجيل الدخول
@app.route('/login', methods=['GET', 'POST'])
def login():
    lang = request.args.get('lang', 'en')
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        print(f"User: {username}, Pass: {password}")
        return "Form submitted successfully!"
    return render_template('login.html', lang=lang)

# 📖 صفحة About Us
@app.route('/about')
def about():
    lang = request.args.get('lang', 'en')
    return render_template('about.html', lang=lang)

# ✉️ صفحة Contact Us
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    lang = request.args.get('lang', 'en')
    success = False
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        print(f"Contact Form Submitted: {name}, {email}, {message}")
        success = True
    return render_template('contact.html', lang=lang, success=success)

if __name__ == '__main__':
    app.run(debug=True)

