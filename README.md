# Kid Read Learning

Guía web interactiva para familias y docentes que acompañan el inicio lector:

- Detectar señales de alerta en lectura.
- Aplicar pruebas guiadas en casa o aula.
- Registrar sesiones y resultados.
- Usar una zona visual específica para niños.

## Estructura del proyecto

- `index.html`: página principal para adultos (guía, evaluador y registro).
- `styles.css`: estilos de la página principal.
- `script.js`: lógica de checklist, evaluador y registro (página principal).
- `zona-ninos.html`: experiencia interactiva infantil para ejecutar pruebas.
- `zona-ninos.css`: estilos de la zona infantil.
- `zona-ninos.js`: motor de pruebas, niveles, patrones, guardado y exportación PDF.

## Funcionalidades principales

- Checklist de señales de alerta.
- Mini evaluador orientativo.
- Registro de sesiones con persistencia local (`localStorage`).
- Pruebas interactivas por tipo (patrones, pseudopalabras, conciencia fonológica, comprensión y velocidad).
- Selección de nivel (`fácil`, `medio`, `avanzado`).
- Selección de patrones silábicos por categorías con acciones rápidas:
  - Seleccionar básicos
  - Seleccionar todos
  - Limpiar
- Exportación de sesión a PDF (vía ventana de impresión del navegador).

## Uso local

Como es un sitio estático, puedes abrir `index.html` directamente en el navegador.

Si prefieres servidor local:

```bash
python3 -m http.server 8080
```

Luego abre:

- `http://localhost:8080/index.html`
- `http://localhost:8080/zona-ninos.html`

## Publicacion

El proyecto está preparado para publicarse en GitHub Pages (rama `main`, carpeta raíz).

URL de referencia del despliegue actual:

- `https://amcereijo.github.io/kid-read-learning/`

## Notas

- Esta herramienta es educativa/orientativa y no sustituye una evaluación profesional.
- Ante múltiples señales de alerta, se recomienda consulta con pediatría y especialista en aprendizaje.
