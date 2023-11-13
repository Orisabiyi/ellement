'use strict';

// FUNCTION
const stickyNav = function() {
  const header = document.querySelector('.header');
  const nav = document.querySelector('.header__nav');
  const navHeight = `-${nav.getBoundingClientRect().height}px`;

  const navCall = function(entries) {
    const [entry] = entries;
    if(!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  }

  const options = {
    root: null,
    threshold: 0,
    rootMargin: '-150px',
  }
  const observer = new IntersectionObserver(navCall, options);
  observer.observe(header);
}

const stickyCard = function() {
  const cards = document.querySelectorAll('.card');
  const cardCall = function(entries, observer) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;

    entry.target.classList.remove('hidden');
    entry.target.style.top = '2rem';
    entry.target.style.transition = 'all 1s';
    observer.unobserve(entry.target)
  }

  const observer = new IntersectionObserver(cardCall, {
    root: null,
    threshold: 0.2,
  })

  cards.forEach(function(card) {
    card.classList.add('hidden');
    observer.observe(card);
  })
}


// Function Call
// stickyNav();
stickyCard();