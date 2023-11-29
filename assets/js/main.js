const navbarItems = document.querySelector('.navbar-items')
const menuToggle = document.getElementById('menu-toggle')

menuToggle.addEventListener('change', function () {
  navbarItems.classList.toggle('show', this.checked)
  if (!this.checked) {
    navbarItems.style.display = 'none'
  } else {
    navbarItems.style.display = 'flex'
  }
})
