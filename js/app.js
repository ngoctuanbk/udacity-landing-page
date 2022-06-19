  const sectionsElements = document.querySelectorAll('section');
  const navbarUrl = document.getElementById('nav-bar-list');
  
  let navList = '';

  // initate navabar
  function renderNav() {
    for (sec of sectionsElements) {
      navList += `<li> <a class="nav-bar-link" href="#${sec.id}" id="navli">
            ${sec.dataset.nav}</a></li>`;
    };
    navbarUrl.innerHTML = navList;
  }

  renderNav();

  const navLinks = document.querySelectorAll(".nav-bar-link");
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = link.getAttribute("href");
        const targetSection = document.querySelector(id);
        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    })
  });

  // check session in view port
  const secInViewport = (view) => {
    let sect = view.getBoundingClientRect();
    return sect.top <= 150 && sect.bottom >= 150;
  };

  //active section when click
  function activeSection() {
    sectionsElements.forEach((sec) => {
      const classId = sec.getAttribute('id');
      if (secInViewport(sec)) {
        document.querySelector(`#${classId}`).classList.add('class-active');
      } else {
        document.querySelector(`#${classId}`).classList.remove('class-active');
      }
    });
  }

  document.addEventListener('scroll', activeSection);

  // get button
  const button = document.getElementById('button-top');
  
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
