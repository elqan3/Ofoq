// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const links = document.querySelectorAll('header nav a');

    if(window.scrollY > 50) {
        header.style.background = 'rgba(30,58,138,0.95)';
        header.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        links.forEach(link => link.style.color = '#fff');
    } else {
        header.style.background = 'rgba(255,255,255,0.95)';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        links.forEach(link => link.style.color = '#1e3a8a');
    }
});

// Language toggle
const langBtn = document.getElementById('lang-toggle');
let isArabic = false;

langBtn.addEventListener('click', () => {
    const body = document.body;
    isArabic = !isArabic;
    body.classList.toggle('arabic', isArabic);

    if(isArabic) {
        langBtn.textContent = 'EN';
        document.querySelector('.logo').textContent = 'حجز قنطري';
        const navLinks = document.querySelectorAll('header nav a');
        navLinks[0].textContent = 'الرئيسية';
        navLinks[1].textContent = 'حجز';
        navLinks[2].textContent = 'استعلام';
        navLinks[3].textContent = 'من نحن';
        navLinks[4].textContent = 'تواصل معنا';
        navLinks[5].textContent = 'تسجيل الدخول';
        navLinks[6].textContent = 'التسجيل';
        document.querySelector('.hero h1').textContent = 'مرحبا بك في حجز قنطري';
        document.querySelector('.hero p').textContent = 'احجز رحلاتك في أي وقت ومن أي مكان بسهولة وراحة';
        document.querySelector('.hero .btn').textContent = 'ابدأ الحجز';
        document.querySelector('#booking h2').textContent = 'ابحث عن رحلاتك';
        const labels = document.querySelectorAll('.booking label');
        labels[0].innerHTML = '<i class="fas fa-map-marker-alt"></i> من';
        labels[1].innerHTML = '<i class="fas fa-map-marker-alt"></i> إلى';
        labels[2].innerHTML = '<i class="fas fa-calendar-alt"></i> تاريخ المغادرة';
        labels[3].innerHTML = '<i class="fas fa-calendar-alt"></i> تاريخ العودة (اختياري)';
        labels[4].innerHTML = '<i class="fas fa-exchange-alt"></i> نوع الرحلة';
        labels[5].innerHTML = '<i class="fas fa-route"></i> الترانزيت';
        document.querySelector('.booking .btn').textContent = 'ابحث';
    } else {
        langBtn.textContent = 'عربي';
        document.querySelector('.logo').textContent = 'Qantri Booking';
        const navLinks = document.querySelectorAll('header nav a');
        navLinks[0].textContent = 'Home';
        navLinks[1].textContent = 'Book';
        navLinks[2].textContent = 'Inquiry';
        navLinks[3].textContent = 'About Us';
        navLinks[4].textContent = 'Contact';
        navLinks[5].textContent = 'Login';
        navLinks[6].textContent = 'Sign Up';
        document.querySelector('.hero h1').textContent = 'Welcome to Qantri Booking';
        document.querySelector('.hero p').textContent = 'Book your trips anytime, anywhere with ease and comfort';
        document.querySelector('.hero .btn').textContent = 'Start Booking';
        document.querySelector('#booking h2').textContent = 'Search for Flights';
        const labels = document.querySelectorAll('.booking label');
        labels[0].innerHTML = '<i class="fas fa-map-marker-alt"></i> From';
        labels[1].innerHTML = '<i class="fas fa-map-marker-alt"></i> To';
        labels[2].innerHTML = '<i class="fas fa-calendar-alt"></i> Departure Date';
        labels[3].innerHTML = '<i class="fas fa-calendar-alt"></i> Return Date (optional)';
        labels[4].innerHTML = '<i class="fas fa-exchange-alt"></i> Trip Type';
        labels[5].innerHTML = '<i class="fas fa-route"></i> Transit';
        document.querySelector('.booking .btn').textContent = 'Search Flights';
    }
});
