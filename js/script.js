
document.addEventListener('DOMContentLoaded', function () {
  const reasonSelect = document.querySelector('#reason');

  reasonSelect.addEventListener('change', function () {
    const selected = this.value;

    if (selected == 'calificacion') {
      document.querySelector('#stars').style.display = 'block';
    } else {
      document.querySelector('#stars').style.display = 'none';
    }
  });
}); 

document.addEventListener('DOMContentLoaded', function () {
  const dropdownMenu = document.querySelectorAll('.dropdown-menu a');
  const star = document.querySelectorAll('.star');

  dropdownMenu.forEach(function (element) {
      element.addEventListener('click', function () {
          const value = this.getAttribute('data-value');
          document.querySelector('#calificacion').value = value;

          star.forEach(function (element) {
              element.classList.remove('active');

              for (let i = 1; i <= value; i++) {
                  if (element.getAttribute('data-value') == i) {
                      element.classList.add('active');
                  } 
              } 

          }); 

      }); 

  }); 

  star.forEach(function (element) {
      element.addEventListener('click', function () {
          const value = this.getAttribute('data-value');

          document.querySelector('#calificacion').value = value;

          star.forEach(function (element) {
              element.classList.remove('active');

              for (let i = 1; i <= value; i++) { 
                  if (element.getAttribute('data-value') == i) { 
                      element.classList.add('active'); 
                  }  

              }  

          });  

      });  

  });  

});  	