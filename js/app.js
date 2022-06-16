  const sectionsElements = document.querySelectorAll('section');
  const navbarUrl = document.getElementById('nav-bar-list');
  
  let navList = '';

  // initate navabar
  function gernerateNav() {
    sectionsElements.forEach((sec) => {
      navList += `<li> <a class="nav-link nav-bar-link" href="#${sec.id}" id="navli">
            ${sec.dataset.nav}</a></li>`;
    });
    navbarUrl.innerHTML = navList;
  }
  gernerateNav();
  
  // active class
  function addActiveClass(sec) {
    const classId = sec.getAttribute('id');
    document.querySelector(`#${classId}`).classList.add('class-active');
  }

  //remove class
  function removeActiveClass(sec) {
    const classId = sec.getAttribute('id');
    document.querySelector(`#${classId}`).classList.remove('class-active');
  }

  //active section when click
  function activeSection() {
    sectionsElements.forEach((sec) => {
      let elementOffset = sec.getBoundingClientRect();
      if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
        addActiveClass(sec);
      } else {
        removeActiveClass(sec);
      }
    });
  }

  document.addEventListener('scroll', activeSection);
  
  let navbar = document.getElementById('navbar').querySelectorAll('li');
  // eventlistner when click
  navbar.forEach((item) => {
    item.addEventListener('click', function (e) {
      navbar.forEach((item) => {
        item.classList.remove('navbar-click');
      });
      item.classList.add('navbar-click');
    });
  });