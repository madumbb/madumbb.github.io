/* ═══════════════════════════════════════════
   MARIA MERCEDES RELAO — PORTFOLIO JS
═══════════════════════════════════════════ */

/* ─── CUSTOM CURSOR ─── */
const cursor   = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mx = 0, my = 0, fx = 0, fy = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

(function animFollower() {
  fx += (mx - fx) * 0.11;
  fy += (my - fy) * 0.11;
  follower.style.left = fx + 'px';
  follower.style.top  = fy + 'px';
  requestAnimationFrame(animFollower);
})();

document.querySelectorAll('a, button, .project-card, .filter-btn, .tool-chip, .social-link, .overlay-link').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    follower.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    follower.classList.remove('hover');
  });
});

/* ─── NAV SCROLL ─── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

/* ─── MOBILE MENU ─── */
const toggle = document.getElementById('navToggle');
const menu   = document.getElementById('mobileMenu');
let open = false;

toggle.addEventListener('click', () => {
  open = !open;
  menu.classList.toggle('open', open);
  const [s1, s2, s3] = toggle.querySelectorAll('span');
  if (open) {
    s1.style.transform = 'translateY(7px) rotate(45deg)';
    s2.style.opacity   = '0';
    s3.style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    [s1, s2, s3].forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});
document.querySelectorAll('.mobile-link').forEach(l => {
  l.addEventListener('click', () => {
    open = false; menu.classList.remove('open');
    toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* ─── HERO NAME SLIDE IN ─── */
window.addEventListener('load', () => {
  document.querySelectorAll('.hero-name .line').forEach((el, i) => {
    setTimeout(() => el.classList.add('animate'), 300 + i * 130);
  });
});

/* ─── ROLE ROTATOR ─── */
const roles = document.querySelectorAll('.role');
let roleIdx = 0;
setInterval(() => {
  roles[roleIdx].classList.remove('active');
  roles[roleIdx].classList.add('exit');
  const prev = roleIdx;
  setTimeout(() => roles[prev].classList.remove('exit'), 450);
  roleIdx = (roleIdx + 1) % roles.length;
  roles[roleIdx].classList.add('active');
}, 2800);

/* ─── TERMINAL TYPEWRITER ─── */
const termBody = document.getElementById('terminalBody');
const termLines = [
  { prompt: 'mmr@portfolio:~$', cmd: 'who am i', out: 'Maria Mercedes Relao — BSIT Student @ PCU Cavite' },
  { prompt: 'mmr@portfolio:~$', cmd: 'cat roles.txt', out: 'Director for Publicity · Vice COO · Media & Creatives' },
  { prompt: 'mmr@portfolio:~$', cmd: 'ls projects/', out: 'figma-designs/  web-projects/  school-projects/' },
  { prompt: 'mmr@portfolio:~$', cmd: 'cat skills.txt', out: 'HTML · CSS · JS · Figma · Python · MySQL · GitHub' },
  { prompt: 'mmr@portfolio:~$', cmd: 'cat badges.txt', out: 'Intro to Cybersecurity ·  AWS Infrastructure Camper' },
  { prompt: 'mmr@portfolio:~$', cmd: 'echo $STATUS', out: ' 3rd Year · Open to internships & part-time work' },
  { prompt: 'mmr@portfolio:~$', cmd: '_', out: '' },
];

async function typeChar(el, text, delay = 38) {
  for (const ch of text) {
    el.textContent += ch;
    await new Promise(r => setTimeout(r, delay + Math.random() * 20));
  }
}

async function runTerminal() {
  await new Promise(r => setTimeout(r, 900));
  for (const line of termLines) {
    const row   = document.createElement('div');
    row.className = 't-line';
    const prompt = document.createElement('span');
    prompt.className = 't-prompt';
    prompt.textContent = line.prompt;
    const cmd = document.createElement('span');
    cmd.className = 't-cmd';
    cmd.style.marginLeft = '0.4rem';
    row.appendChild(prompt);
    row.appendChild(cmd);
    termBody.appendChild(row);

    // show blinking cursor while typing
    const cur = document.createElement('span');
    cur.className = 't-cursor';
    cmd.appendChild(cur);
    await new Promise(r => setTimeout(r, 350));
    cur.remove();

    await typeChar(cmd, line.cmd);
    await new Promise(r => setTimeout(r, 260));

    if (line.out) {
      const out = document.createElement('div');
      out.className = 't-out';
      out.style.paddingLeft = '0';
      out.style.color = 'var(--text-muted)';
      row.appendChild(out);
      await typeChar(out, line.out, 18);
      await new Promise(r => setTimeout(r, 200));
    }

    // add blinking cursor at end of last line
    if (line.cmd === '_') {
      cmd.textContent = '';
      const finalCursor = document.createElement('span');
      finalCursor.className = 't-cursor';
      cmd.appendChild(finalCursor);
      break;
    }
    await new Promise(r => setTimeout(r, 420));
  }
}
runTerminal();

/* ─── SCROLL REVEAL ─── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll([
  '.section-label', '.section-title', '.about-text p',
  '.about-links', '.about-image-wrap', '.project-card',
  '.skill-group', '.timeline-item', '.contact-form',
  '.contact-info', '.contact-sub', '.resume-download',
  '.tools-row'
].join(',')).forEach(el => {
  el.classList.add('fade-up');
  revealObs.observe(el);
});

/* ─── SKILL BARS ─── */
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.level + '%';
      });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });
document.querySelectorAll('.skills-columns').forEach(el => skillObs.observe(el));

/* ─── COUNT-UP STATS ─── */
function countUp(el) {
  const target = parseInt(el.dataset.count);
  let n = 0;
  const step = Math.max(1, Math.ceil(target / 45));
  const t = setInterval(() => {
    n = Math.min(n + step, target);
    el.textContent = n;
    if (n >= target) clearInterval(t);
  }, 30);
}
const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(countUp);
      statObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.about-stats').forEach(el => statObs.observe(el));

/* ─── PROJECT FILTER ─── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const t = card.dataset.type;
      card.classList.toggle('hidden', f !== 'all' && t !== f && t !== 'both');
    });
  });
});

/* ─── CONTACT FORM (mailto fallback) ─── */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name    = document.getElementById('name').value;
  const email   = document.getElementById('email').value;
  const subject = document.getElementById('subject').value || 'Portfolio Contact';
  const message = document.getElementById('message').value;
  // EDIT: replace email below with yours
  window.location.href = `mailto:mercedesrelao09@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

  /* ─── CONTACT FORM (Formspree) ─── */
  document.getElementById('contactForm').addEventListener('submit', e => {
    const btn = document.querySelector('#contactForm button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
    }, 3000);
    // Let Formspree handle the rest — NO e.preventDefault()
  });

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ─── ACTIVE NAV HIGHLIGHT ─── */
const navLinks  = document.querySelectorAll('.nav-links a');
const sections  = document.querySelectorAll('section[id]');
const activeObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => {
        l.classList.remove('active-link');
        if (l.getAttribute('href') === '#' + e.target.id) l.classList.add('active-link');
      });
    }
  });
}, { threshold: 0.45 });
sections.forEach(s => activeObs.observe(s));
