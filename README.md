# Kid Read Learning

Guia web interactiva para familias y docentes que acompanan el inicio lector:

- Detectar senales de alerta en lectura.
- Aplicar pruebas guiadas en casa o aula.
- Registrar sesiones y resultados.
- Usar una zona visual especifica para ninos.

## Estructura del proyecto

- `index.html`: pagina principal para adultos (guia, evaluador y registro).
- `styles.css`: estilos de la pagina principal.
- `script.js`: logica de checklist, evaluador y registro (pagina principal).
- `zona-ninos.html`: experiencia interactiva infantil para ejecutar pruebas.
- `zona-ninos.css`: estilos de la zona infantil.
- `zona-ninos.js`: motor de pruebas, niveles, patrones, guardado y exportacion PDF.

## Funcionalidades principales

- Checklist de senales de alerta.
- Mini evaluador orientativo.
- Registro de sesiones con persistencia local (`localStorage`).
- Pruebas interactivas por tipo (patrones, pseudopalabras, conciencia fonologica, comprension y velocidad).
- Seleccion de nivel (`facil`, `medio`, `avanzado`).
- Seleccion de patrones silabicos por categorias con acciones rapidas:
  - Seleccionar basicos
  - Seleccionar todos
  - Limpiar
- Exportacion de sesion a PDF (via ventana de impresion del navegador).

## Uso local

Como es un sitio estatico, puedes abrir `index.html` directamente en el navegador.

Si prefieres servidor local:

```bash
python3 -m http.server 8080
```

Luego abre:

- `http://localhost:8080/index.html`
- `http://localhost:8080/zona-ninos.html`

## Publicacion

El proyecto esta preparado para publicarse en GitHub Pages (rama `main`, carpeta raiz).

URL de referencia del despliegue actual:

- `https://amcereijo.github.io/kid-read-learning/`

## Notas

- Esta herramienta es educativa/orientativa y no sustituye una evaluacion profesional.
- Ante multiples senales de alerta, se recomienda consulta con pediatria y especialista en aprendizaje.
