function cargarContenidod() {
    fetch('header.html')
      .then(response => response.text())
      .then(html => {
        const header = document.querySelector('header');
        header.innerHTML = html;
      });
  
    fetch('/footer.html')
    fetch('')
      .then(response => response.text())
      .then(html => {
        const footer = document.querySelector('footer');
        footer.innerHTML = html;
      });
  }

  function cargarContenido() {
    var url = window.location.href;
    var nombrePagina = url.split("/").pop();
    var archivoContenido = "contenido/" + nombrePagina + ".html";
    $("#contenido").load(archivoContenido);
  }
  
  function imprimir() {
    document.write("<h1>Este es un encabezadodsdsdsd H1</h1>");
   
  }

  