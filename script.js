// Slideshow automatico
let current = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 5000);

// Animazione di apparizione delle sezioni al scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

// Seleziona tutte le sezioni
const sections = document.querySelectorAll('.section');
sections.forEach((section) => observer.observe(section));

// Gestione del modulo di prenotazione
const bookingForm = document.querySelector('.booking-form form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita l'invio reale del form

    const button = bookingForm.querySelector('.btn');
    button.textContent = 'Inviando...';
    button.classList.add('sending');

    // Raccogli i dati del form
    const formData = new FormData(bookingForm);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      checkin: formData.get('checkin'),
      checkout: formData.get('checkout'),
      guests: formData.get('guests'),
      notes: formData.get('notes'),
    };

    console.log('Dati raccolti:', data); // Mostra i dati raccolti nella console per debug

    // Simula una risposta dal server con un timeout
    setTimeout(() => {
      button.textContent = 'Prenotazione confermata!';
      button.classList.remove('sending');
      button.classList.add('sent');

      // Resetta il modulo e il pulsante dopo 2 secondi
      setTimeout(() => {
        bookingForm.reset(); // Resetta il modulo
        button.textContent = 'Prenota'; // Ripristina il testo del pulsante
        button.classList.remove('sent');
      }, 2000); // Ritardo di 2 secondi per mostrare il messaggio di conferma
    }, 2000); // Simula un ritardo di 2 secondi per l'invio
  });
}

// Lightbox per la galleria di immagini
const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const lightboxImage = document.createElement('img');
lightbox.appendChild(lightboxImage);

const closeButton = document.createElement('button');
closeButton.classList.add('close');
closeButton.innerHTML = '&times;';
lightbox.appendChild(closeButton);

// Mostra il lightbox quando si clicca su un'immagine
galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    lightboxImage.src = image.src;
    lightbox.classList.add('active');
  });
});

// Chiudi il lightbox quando si clicca sulla "x" o fuori dall'immagine
closeButton.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImage && e.target !== closeButton) {
    lightbox.classList.remove('active');
  }
});