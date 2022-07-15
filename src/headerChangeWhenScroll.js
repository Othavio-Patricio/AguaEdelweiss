function headerChangeWhenScroll() {
  const header = document.getElementById('header');
  const innerHeader = document.getElementById('inner-header');
  const navText = document.getElementsByClassName('nav-text');
  const logoHeader = document.getElementById('logo-1');
  const logoNavbar = document.getElementById('logo-2');
  if (document.documentElement.scrollTop > 93.6) {
    header.className = 'navbar';
    innerHeader.className = 'inner-navbar';
    header.style.transitionDuration = '0.3s';
    innerHeader.style.transitionDuration = '0.3s';
    logoHeader.className = 'none';
    logoNavbar.className = 'logo logo-navbar';
    for (let index = 0; index < navText.length; index += 1) {
      navText[index].className = 'nav-text nav-navbar';
      navText[index].style.transitionDuration = '0.3s';
    }
  } else {
    header.className = 'header';
    innerHeader.className = 'inner-header';
    header.style.transitionDuration = '0.3s';
    innerHeader.style.transitionDuration = '0.3s';
    logoHeader.className = 'logo logo-header';
    logoNavbar.className = 'none';
    for (let index = 0; index < navText.length; index += 1) {
      navText[index].className = 'nav-text nav-header';
      navText[index].style.transitionDuration = '0.3s';
    }
  }
}

window.onscroll = () => { headerChangeWhenScroll(); };

// module.exports = headerChangeWhenScroll;
