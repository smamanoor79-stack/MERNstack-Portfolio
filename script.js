// ── 1. NAVBAR SCROLL EFFECT ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ── 2. HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── 3. TYPING ANIMATION ──
const roles = [
  'Full Stack Developer',
  'MERN Stack Developer',
  'WordPress Developer',
  'UI/UX Enthusiast',
  'Problem Solver'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const currentRole = roles[roleIndex];

  if (isDeleting) {
    typedEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 1800; // pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 300;
  }

  setTimeout(type, delay);
}
type();

// ── 4. SCROLL REVEAL ──
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 90);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ── 5. ACTIVE NAV LINK ON SCROLL ──
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) {
      current = sec.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

// ── 7. CONTACT FORM VALIDATION ──
const form = document.getElementById('contactForm');
const WEB3FORMS_ACCESS_KEY = '75fbd070-f316-48a3-9e71-7a0289e43e52';

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const subject = document.getElementById('fsubject').value.trim();
  const message = document.getElementById('fmessage').value.trim();
  const success = document.getElementById('formSuccess');
  const submitBtn = form.querySelector('button[type="submit"]');

  let valid = true;

  const nameErr = document.getElementById('nameErr');
  if (name.length < 2) {
    nameErr.textContent = 'Please enter your name.';
    valid = false;
  } else {
    nameErr.textContent = '';
  }

  const emailErr = document.getElementById('emailErr');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailErr.textContent = 'Please enter a valid email address.';
    valid = false;
  } else {
    emailErr.textContent = '';
  }

  const msgErr = document.getElementById('msgErr');
  if (message.length < 10) {
    msgErr.textContent = 'Message must be at least 10 characters.';
    valid = false;
  } else {
    msgErr.textContent = '';
  }

  if (!valid) return;

  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = 'Sending...';

  // Reset visibility
  success.style.display = 'block';
  success.style.color = '#333';
  success.textContent = 'Sending your message...';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name,
        email: email,
        subject: subject || `New message from ${name} — Portfolio Contact Form`,
        message: message,
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      success.style.display = 'block';
      success.style.visibility = 'visible';
      success.style.opacity = '1';
      success.style.color = '#a3e1bd'; 
      success.style.marginTop = '15px'; 
      success.textContent = "✅ Message sent! I'll get back to you soon.";
      form.reset();

      setTimeout(() => {
        success.textContent = '';
        success.style.display = 'none';
      }, 5000);

    } else {
      console.error('Web3Forms error:', result);
      success.style.color = '#ff6b6b'; // Red color for error
      success.textContent = `❌ ${result.message || 'Something went wrong. Please try again.'}`;
    }
  } catch (error) {
    console.error('Network/fetch error:', error);
    success.style.color = '#ff6b6b';
    success.textContent = '❌ Could not send message. Please try again.';
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
});