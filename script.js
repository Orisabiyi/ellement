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

  const observer = new IntersectionObserver(navCall,  { root: null, threshold: 0, rootMargin: '-50px'});
  observer.observe(header);
}

const sectionAnimate = function() {
	const sectionAll = document.querySelectorAll('.section');

	const sectionObs = function(entries, observer) {
		const [entry] = entries;
		if(!entry.isIntersecting) return;

    entry.target.classList.remove('hidden');
    observer.unobserve(entry.target);
	}

	const observer = new IntersectionObserver(sectionObs, {root: null, threshold: 0.1, });
	sectionAll.forEach(function(section) {
    section.classList.add('hidden');
    observer.observe(section);
  });
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
stickyNav();
sectionAnimate();
stickyCard();
