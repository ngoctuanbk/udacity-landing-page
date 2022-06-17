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

  // get button
  const button = document.getElementById('button-top');

  window.onscroll = function () {
    scrollFunc();
  };
  
  function scrollFunc() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }
  
  // scroll to top
  function topFunc() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }
  
  // listen event click
  button.addEventListener('click', topFunc);
  
  let navbar = document.getElementById('nav-bar').querySelectorAll('li');
  // eventlistner when click
  navbar.forEach((item) => {
    item.addEventListener('click', function (e) {
      navbar.forEach((item) => {
        item.classList.remove('navbar-click');
      });
      item.classList.add('navbar-click');
    });
  });
