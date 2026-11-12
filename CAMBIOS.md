# Sitio v2 · Jorge Pérez · Hecha de Tiempo

## Qué se corrigió
- Cada ficha muestra ahora la imagen de su propia pieza. Antes, las fichas II, III, IV, V, VIII y IX mezclaban la foto de una pieza con el nombre y el probador de otra.
- Se eliminó la "Constelación del Sur": su foto era un colgante de tres rombos que no existe en la colección.
- Se añadió la Órbita Interior (VIII), que faltaba. Se muestra con su fotografía real hasta que exista su imagen de campaña.
- Cada ficha incluye la fotografía real de la pieza (en tono plata corregido) junto a la imagen de campaña.
- Se retiraron los datos no confirmados: pesos, medidas, "plata ley 950", "sin soldaduras" y "cabujón" (las piedras son planas).
- La foto de "las manos del maestro" era una imagen generada por IA (marca de agua "pollinations"); se reemplazó por una foto de la colección.
- css/styles.css estaba vacío (3 bytes) y orfebre.html tenía los enlaces rotos (formato de chat dentro de href). Ambos rehechos.
- El sitio ya no depende de archivos sueltos de versiones anteriores: todo vive en index.html, css/styles.css, js/catalog.js y js/app.js.
- Las páginas antiguas (coleccion.html, joya.html?id=…, etc.) redirigen a la nueva para no romper enlaces.
- Probador: funciona con cámara o con una foto subida, con recortes de fondo transparente hechos desde las fotos reales.
- Tasa del dólar actualizada a ~970 CLP (noviembre de 2026) y marcada como referencial.
- supabase/schema.sql alineado con los precios del sitio (antes había 4 precios distintos).

## Pendiente de confirmar con Jorge (no publicar sin revisar)
1. Ley de la plata. Si está certificada como 950, cambiar `metal` en js/catalog.js.
2. Medidas y peso reales de cada pieza (campos `medidas` y `peso`).
3. Biografía: año y lugar de nacimiento, oficio del padre y del abuelo, fechas de la trayectoria (objeto `ORFEBRE`). Para ocultar la cronología: `mostrarCronologia: false`.
4. Una fotografía real de Jorge o de su taller (campo `ORFEBRE.foto`).
5. Precios y bonificaciones (10 % y 18 %).

## Diferencias menores entre imágenes de campaña y piezas reales
Las imágenes de campaña fueron generadas por IA y conservan bien la forma general, pero hay detalles distintos:
VII Voluta (el asa real es una argolla acanalada, no triangular), IV Campana (marco algo inclinado) y III Vértice Andino (unión del rombo superior).
Por eso cada ficha muestra también la fotografía real. Para reemplazarlas por las imágenes de terciopelo:
`.\ACTUALIZAR.ps1 -UsarTerciopelo` (después de revisarlas una por una).

## Archivos que ya no se usan
js/i18n.js, js/bg3d.js, assets/macro, assets/fondos y assets/joyas. Pueden borrarse cuando quieras; el sitio nuevo no los necesita.
