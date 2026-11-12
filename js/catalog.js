/* =============================================================================
   JORGE PÉREZ · ALTA JOYERÍA · DATOS DEL SITIO
   Este es el único archivo que hay que editar para cambiar textos, precios,
   medidas o datos de contacto. Todo el sitio se construye a partir de él.
   ============================================================================= */

const CONFIG = {
    marca: "JORGE PÉREZ",               // como aparece en la cabecera
    nombre: "Jorge Pérez",              // como aparece en textos y fichas
    whatsapp: "56956258569",            // sin "+", sin espacios
    whatsappVisible: "+56 9 5625 8569",

    // METAL: si la plata está certificada como ley 950, escribe aquí "Plata ley 950"
    // (y "Argent 950" / "950 silver"). Mientras no esté confirmado, se muestra "Plata".
    metal: { es: "Plata", fr: "Argent", en: "Silver" },
    piedra: { es: "Rodocrosita", fr: "Rhodochrosite", en: "Rhodochrosite" },

    // Tasas de referencia (1 CLP = x). Revisar periódicamente.
    tasas: { CLP: 1, USD: 1 / 970, EUR: 0.00097 },
    tasasFecha: { es: "noviembre de 2026", fr: "novembre 2026", en: "November 2026" },

    // Bonificación por número de piezas elegidas
    bonificaciones: [ { desde: 3, porcentaje: 0.18 }, { desde: 2, porcentaje: 0.10 } ]
};

/*  VIDEOS
    Todos son verticales (9:16). Fuente y recorte:
      intro          joya.mp4 completo (15 s, con la narración)
      catalogo       joyas_3.mp4, de 2,6 s a 9,3 s
      probador       joyas_2.mp4, de 2,0 s a 6,8 s
      coleccionistas joyas_2.mp4, de 7,0 s a 8,8 s (el juego completo)
      orfebre        joyas_2.mp4, de 11,0 s a 13,0 s (manos con guantes)
    Los recortes evitan los tramos donde aparecen joyas que no existen en la colección.
    introObligatoria: true  la primera visita debe ver la presentación completa;
                            en visitas posteriores aparece el botón "Saltar".            */
const VIDEOS = {
    introObligatoria: true,
    intro:          { src: "assets/video/intro.mp4",          poster: "assets/video/intro.jpg",          sonido: true },
    coleccion:      { src: "assets/video/catalogo.mp4",       poster: "assets/video/catalogo.jpg",       sonido: true },
    probador:       { src: "assets/video/probador.mp4",       poster: "assets/video/probador.jpg",       sonido: true },
    coleccionistas: { src: "assets/video/coleccionistas.mp4", poster: "assets/video/coleccionistas.jpg", sonido: false },
    orfebre:        { src: "assets/video/orfebre.mp4",        poster: "assets/video/orfebre.jpg",        sonido: false }
};

/*  CAMPOS POR PIEZA
    ambiente : imagen de campaña (generada a partir de la foto real). null si aún no existe.
    real     : fotografía real de la pieza, con el tono plata corregido. Siempre presente.
    probador : recorte con fondo transparente para el probador virtual.
    medidas / peso : vacíos hasta que se confirmen midiendo la pieza. Si están vacíos,
                     la fila no se muestra.
    portada        : false para que la pieza no aparezca en el friso de la portada.   */

const JEWELS = [
    {
        id: "01", code: "I", categoria: "orbital", precioCLP: 540000,
        medidas: "", peso: "",
        img: { ambiente: "assets/piezas/01_ambiente.jpg", real: "assets/piezas/01_real.jpg", probador: "assets/piezas/probador/01.png" },
        titulo: { es: "Rosa de los Vientos", fr: "Rose des Vents", en: "Compass Rose" },
        forma: { es: "Redonda, plana y pulida", fr: "Ronde, plate et polie", en: "Round, flat and polished" },
        resumen: {
            es: "Cuatro lazos de plata en forma de almendra se cruzan sobre un círculo y señalan los puntos cardinales. En el centro, una rodocrosita redonda de rosa coral.",
            fr: "Quatre boucles d'argent en amande croisent un cercle et désignent les points cardinaux. Au centre, une rhodochrosite ronde d'un rose corail.",
            en: "Four almond shaped silver loops cross a circle and point to the cardinal directions. At the center, a round coral pink rhodochrosite."
        },
        historia1: {
            es: "Nacida frente a las cartas de navegación de Valparaíso, esta pieza traduce la rosa náutica en una escultura aérea: cuatro pétalos abiertos de hilo de plata entrelazados con un círculo.",
            fr: "Née devant les cartes marines de Valparaíso, cette pièce traduit la rose nautique en une sculpture aérienne : quatre pétales ouverts de fil d'argent entrelacés avec un cercle.",
            en: "Born before the navigation charts of Valparaíso, this piece turns the compass rose into an aerial sculpture: four open petals of silver wire interlaced with a circle."
        },
        historia2: {
            es: "En el centro reposa una rodocrosita redonda cuyas vetas coral y marfil dibujan un mapa que no se repite en ninguna otra piedra.",
            fr: "Au centre repose une rhodochrosite ronde dont les veines corail et ivoire dessinent une carte qu'aucune autre pierre ne répète.",
            en: "At its center rests a round rhodochrosite whose coral and ivory veins draw a map no other stone repeats."
        }
    },
    {
        id: "02", code: "II", categoria: "organica", precioCLP: 490000,
        medidas: "", peso: "",
        img: { ambiente: "assets/piezas/02_ambiente.jpg", real: "assets/piezas/02_real.jpg", probador: "assets/piezas/probador/02.png" },
        titulo: { es: "Gota Austral", fr: "Goutte Australe", en: "Southern Drop" },
        forma: { es: "Gota irregular, plana y pulida", fr: "Goutte irrégulière, plate et polie", en: "Irregular teardrop, flat and polished" },
        resumen: {
            es: "Una rodocrosita en forma de gota, de vetas rosas, blancas y grises, abrazada por un trazo de plata que nace y termina en espiral.",
            fr: "Une rhodochrosite en forme de goutte, aux veines roses, blanches et grises, enlacée par un trait d'argent qui naît et s'achève en spirale.",
            en: "A teardrop rhodochrosite with pink, white and grey veins, embraced by a silver line that begins and ends in a spiral."
        },
        historia1: {
            es: "Las formaciones internas de este ejemplar dibujan cordilleras rosadas y senderos minerales. Para acompañar ese movimiento, el hilo de plata sube por el costado derecho y se riza en ambos extremos.",
            fr: "Les formations internes de cet exemplaire dessinent des cordillères rosées et des sentiers minéraux. Pour accompagner ce mouvement, le fil d'argent longe le flanc droit et s'enroule à ses deux extrémités.",
            en: "The inner formations of this specimen draw rose mountain ranges and mineral paths. To follow that movement, the silver wire climbs the right side and curls at both ends."
        },
        historia2: {
            es: "Su forma irregular y su dibujo libre la convierten en una joya orgánica que dialoga con la curva natural del cuello.",
            fr: "Sa forme irrégulière et son dessin libre en font un bijou organique qui dialogue avec la courbe naturelle du cou.",
            en: "Its irregular shape and free pattern make it an organic jewel that converses with the natural curve of the neck."
        }
    },
    {
        id: "03", code: "III", categoria: "geometrica", precioCLP: 510000,
        medidas: "", peso: "",
        img: { ambiente: "assets/piezas/03_ambiente.jpg", real: "assets/piezas/03_real.jpg", probador: "assets/piezas/probador/03.png" },
        titulo: { es: "Vértice Andino", fr: "Sommet Andin", en: "Andean Vertex" },
        forma: { es: "Estrella de cuatro puntas, plana y pulida", fr: "Étoile à quatre branches, plate et polie", en: "Four pointed star, flat and polished" },
        resumen: {
            es: "Un rombo abierto de plata conduce, punta con punta, hacia una rodocrosita en forma de estrella de cuatro puntas.",
            fr: "Un losange ouvert en argent mène, pointe contre pointe, vers une rhodochrosite en étoile à quatre branches.",
            en: "An open silver rhombus leads, point to point, to a four pointed star of rhodochrosite."
        },
        historia1: {
            es: "Dos cuerpos geométricos unidos en un vértice: el superior dibuja el aire con un trazo limpio de plata; el inferior guarda una piedra de lados suavemente curvados hacia dentro.",
            fr: "Deux corps géométriques unis par un sommet : le premier dessine l'air d'un trait d'argent net ; le second abrite une pierre aux côtés doucement incurvés vers l'intérieur.",
            en: "Two geometric bodies joined at a vertex: the upper one draws the air with a clean silver line; the lower one holds a stone whose sides curve gently inward."
        },
        historia2: {
            es: "Sus nubes blancas sobre fondo coral convierten la piedra en una pintura abstracta natural.",
            fr: "Ses nuages blancs sur fond corail font de la pierre une peinture abstraite naturelle.",
            en: "Its white clouds over a coral ground turn the stone into a natural abstract painting."
        }
    },
    {
        id: "04", code: "IV", categoria: "organica", precioCLP: 525000,
        medidas: "", peso: "",
        img: { ambiente: "assets/piezas/04_ambiente.jpg", real: "assets/piezas/04_real.jpg", probador: "assets/piezas/probador/04.png" },
        titulo: { es: "Campana Austral", fr: "Cloche Australe", en: "Southern Bell" },
        forma: { es: "Ovalada, plana y pulida", fr: "Ovale, plate et polie", en: "Oval, flat and polished" },
        resumen: {
            es: "Un arco de plata en forma de campana guarda una rodocrosita ovalada, coronada por un anillo y una pequeña esfera.",
            fr: "Une arche d'argent en forme de cloche abrite une rhodochrosite ovale, couronnée d'un anneau et d'une petite sphère.",
            en: "A bell shaped silver arch shelters an oval rhodochrosite, crowned by a ring and a small sphere."
        },
        historia1: {
            es: "En las cumbres australes, el agua pule la roca durante milenios. Esta pieza suspende una rodocrosita ovalada de intensa floración rosada bajo un anillo de plata coronado por una esfera.",
            fr: "Sur les sommets austraux, l'eau polit la roche durant des millénaires. Cette pièce suspend une rhodochrosite ovale d'une floraison rose intense sous un anneau d'argent couronné d'une sphère.",
            en: "In the southern peaks, water polishes rock for millennia. This piece suspends an oval rhodochrosite of intense pink bloom beneath a silver ring crowned by a sphere."
        },
        historia2: {
            es: "El espacio abierto entre la piedra y el marco deja pasar la luz y perfila la silueta del metal sobre la piel.",
            fr: "L'espace ouvert entre la pierre et le cadre laisse passer la lumière et dessine la silhouette du métal sur la peau.",
            en: "The open space between stone and frame lets light through and outlines the silver silhouette against the skin."
        }
    },
    {
        id: "05", code: "V", categoria: "geometrica", precioCLP: 560000,
        medidas: "", peso: "",
        img: { ambiente: "assets/piezas/05_ambiente.jpg", real: "assets/piezas/05_real.jpg", probador: "assets/piezas/probador/05.png" },
        titulo: { es: "Horizonte Mineral", fr: "Horizon Minéral", en: "Mineral Horizon" },
        forma: { es: "Barra rectangular bandeada, plana y pulida", fr: "Barre rectangulaire rubanée, plate et polie", en: "Banded rectangular bar, flat and polished" },
        resumen: {
            es: "Un marco cuadrado de plata, girado en rombo, atravesado por una barra de rodocrosita de bandas finas como una línea de horizonte.",
            fr: "Un cadre carré en argent, posé en losange, traversé par une barre de rhodochrosite aux fines bandes, comme une ligne d'horizon.",
            en: "A square silver frame set as a diamond, crossed by a finely banded rhodochrosite bar like a horizon line."
        },
        historia1: {
            es: "Un homenaje al constructivismo. La piedra, tallada en rectángulo, muestra estratos paralelos que parecen pinceladas, sostenidos dentro de un marco de plata de aristas suaves.",
            fr: "Un hommage au constructivisme. La pierre, taillée en rectangle, révèle des strates parallèles semblables à des coups de pinceau, tenues dans un cadre d'argent aux arêtes douces.",
            en: "A tribute to constructivism. The stone, cut as a rectangle, reveals parallel strata like brushstrokes, held within a softly edged silver frame."
        },
        historia2: {
            es: "Las dos ventanas vacías a cada lado de la barra le dan una ligereza visual extraordinaria sobre cualquier prenda.",
            fr: "Les deux fenêtres vides de part et d'autre de la barre lui donnent une légèreté visuelle remarquable sur tout vêtement.",
            en: "The two open windows on either side of the bar give it remarkable visual lightness over any garment."
        }
    },
    {
        id: "06", code: "VI", categoria: "geometrica", precioCLP: 680000,
        medidas: "", peso: "",
        img: { ambiente: "assets/piezas/06_ambiente.jpg", real: "assets/piezas/06_real.jpg", probador: "assets/piezas/probador/06.png" },
        titulo: { es: "Tríptico del Tiempo", fr: "Triptyque du Temps", en: "Triptych of Time" },
        forma: { es: "Cuadrados y rombos, planos y pulidos", fr: "Carrés et losanges, plats et polis", en: "Squares and diamonds, flat and polished" },
        juego: { es: "Juego de colgante y dos aretes", fr: "Parure : pendentif et deux boucles d'oreilles", en: "Set: pendant and two earrings" },
        resumen: {
            es: "El único juego de la colección: un colgante y dos aretes articulados, con cabezales cuadrados y cuerpos en rombo.",
            fr: "La seule parure de la collection : un pendentif et deux boucles d'oreilles articulés, aux têtes carrées et aux corps en losange.",
            en: "The only set in the collection: a pendant and two articulated earrings with square heads and diamond bodies."
        },
        historia1: {
            es: "Las tres piezas comparten los mismos tonos de rodocrosita, marfil, arena y rosa pálido. Cada una tiene una bisagra de plata que da movimiento propio al rombo inferior.",
            fr: "Les trois pièces partagent les mêmes tons de rhodochrosite, ivoire, sable et rose pâle. Chacune possède une charnière d'argent qui donne au losange inférieur son propre mouvement.",
            en: "The three pieces share the same rhodochrosite tones of ivory, sand and pale rose. Each has a silver hinge that gives the lower diamond its own movement."
        },
        historia2: {
            es: "Representa el pasado, el presente y el porvenir reunidos en una sola obra.",
            fr: "Il représente le passé, le présent et l'avenir réunis en une seule œuvre.",
            en: "It represents past, present and future gathered in a single work."
        }
    },
    {
        id: "07", code: "VII", categoria: "organica", precioCLP: 550000,
        medidas: "", peso: "",
        img: { ambiente: "assets/piezas/07_ambiente.jpg", real: "assets/piezas/07_real.jpg", probador: "assets/piezas/probador/07.png" },
        titulo: { es: "Voluta Barroca", fr: "Volute Baroque", en: "Baroque Volute" },
        forma: { es: "Cojín horizontal bandeado, plano y pulido", fr: "Coussin horizontal rubané, plat et poli", en: "Banded horizontal cushion, flat and polished" },
        resumen: {
            es: "Una rodocrosita horizontal de ondas muy marcadas, en un bisel ancho de plata y coronada por volutas libres.",
            fr: "Une rhodochrosite horizontale aux ondes très marquées, dans un large serti d'argent et couronnée de volutes libres.",
            en: "A horizontal rhodochrosite with strongly marked waves, set in a wide silver bezel and crowned by free volutes."
        },
        historia1: {
            es: "El bisel ancho de plata enmarca una piedra cuyas bandas horizontales parecen olas marinas petrificadas.",
            fr: "Le large serti d'argent encadre une pierre dont les bandes horizontales évoquent des vagues pétrifiées.",
            en: "The wide silver bezel frames a stone whose horizontal bands evoke petrified ocean waves."
        },
        historia2: {
            es: "Sobre la piedra se eleva una danza de espirales de hilo de plata que sostiene el pasacadena.",
            fr: "Au dessus de la pierre s'élève une danse de spirales en fil d'argent qui porte la bélière.",
            en: "Above the stone rises a dance of silver wire spirals that holds the bail."
        }
    },
    {
        id: "08", code: "VIII", categoria: "orbital", precioCLP: 530000,
        medidas: "", peso: "",
        portada: false,   // no aparece en el friso de la portada (su foto no comparte el fondo azul de las demás)
        // Sin imagen de campaña todavía: se muestra la fotografía real.
        // Cuando exista, ACTUALIZAR.ps1 la copia como assets/piezas/08_ambiente.jpg y basta cambiar null por esa ruta.
        img: { ambiente: null, real: "assets/piezas/08_real.jpg", probador: "assets/piezas/probador/08.png" },
        titulo: { es: "Órbita Interior", fr: "Orbite Intérieure", en: "Inner Orbit" },
        forma: { es: "Redonda, plana y pulida", fr: "Ronde, plate et polie", en: "Round, flat and polished" },
        resumen: {
            es: "Dos círculos de plata en órbita que se tocan en lo alto. La rodocrosita, de vetas blancas, descansa en la parte superior del círculo interior.",
            fr: "Deux cercles d'argent en orbite qui se touchent au sommet. La rhodochrosite, veinée de blanc, repose dans le haut du cercle intérieur.",
            en: "Two silver circles in orbit, touching at the top. The rhodochrosite, veined with white, rests in the upper part of the inner circle."
        },
        historia1: {
            es: "Inspirada en los astrolabios antiguos y en el movimiento de los planetas, esta pieza desplaza sus círculos del centro para que el vacío también forme parte del diseño.",
            fr: "Inspirée des astrolabes anciens et du mouvement des planètes, cette pièce décentre ses cercles pour que le vide fasse aussi partie du dessin.",
            en: "Inspired by ancient astrolabes and planetary motion, this piece shifts its circles off center so that empty space becomes part of the design."
        },
        historia2: {
            es: "La piedra, de rosa intenso con nubes blancas, parece un pequeño planeta suspendido dentro de su propia órbita.",
            fr: "La pierre, d'un rose intense aux nuages blancs, semble une petite planète suspendue dans sa propre orbite.",
            en: "The stone, intense pink with white clouds, looks like a small planet suspended in its own orbit."
        }
    },
    {
        id: "09", code: "IX", categoria: "geometrica", precioCLP: 590000,
        medidas: "", peso: "",
        img: { ambiente: "assets/piezas/09_ambiente.jpg", real: "assets/piezas/09_real.jpg", probador: "assets/piezas/probador/09.png" },
        titulo: { es: "Nudo Marinero", fr: "Nœud Marin", en: "Sailor's Knot" },
        forma: { es: "Ovalada, plana y pulida", fr: "Ovale, plate et polie", en: "Oval, flat and polished" },
        resumen: {
            es: "Dos lazos de plata se cruzan como un nudo y sostienen una rodocrosita ovalada de rojo intenso con bandas blancas.",
            fr: "Deux boucles d'argent se croisent comme un nœud et retiennent une rhodochrosite ovale d'un rouge intense aux bandes blanches.",
            en: "Two silver loops cross like a knot and hold an oval rhodochrosite of intense red with white bands."
        },
        historia1: {
            es: "Inspirada en los nudos de los puertos y en la ingeniería de los puentes colgantes: dos varillas descienden desde la cúspide formando una V y abrazan la piedra central.",
            fr: "Inspirée des nœuds des ports et de l'ingénierie des ponts suspendus : deux tiges descendent du sommet en formant un V et enlacent la pierre centrale.",
            en: "Inspired by harbor knots and suspension bridge engineering: two rods descend from the apex in a V and embrace the central stone."
        },
        historia2: {
            es: "Su equilibrio simétrico transmite firmeza, modernidad y carácter escultórico.",
            fr: "Son équilibre symétrique exprime fermeté, modernité et caractère sculptural.",
            en: "Its symmetrical balance conveys strength, modernity and sculptural poise."
        }
    }
];

/* =============================================================================
   PÁGINA DEL ORFEBRE
   IMPORTANTE: estos datos biográficos vienen de la versión anterior del sitio y
   NO han sido verificados. Confírmalos con Jorge Pérez antes de publicar
   (año y lugar de nacimiento, oficio familiar, fechas de la trayectoria).
   Para ocultar la cronología mientras tanto: mostrarCronologia: false
   ============================================================================= */
const ORFEBRE = {
    mostrarCronologia: true,
    // La imagen anterior (assets/orfebre/manos_maestro_principal.jpg) es una imagen generada por IA
    // (lleva la marca de agua "pollinations"); no debe presentarse como las manos de Jorge.
    // Reemplazar por una fotografía real del taller o de Jorge cuando exista.
    foto: "assets/piezas/07_ambiente.jpg",
    lugar: { es: "Valparaíso, Chile", fr: "Valparaíso, Chili", en: "Valparaíso, Chile" },
    titulo: { es: "Jorge Pérez: el pulso de la plata", fr: "Jorge Pérez : le pouls de l'argent", en: "Jorge Pérez: the pulse of silver" },
    entrada: {
        es: "Décadas dedicadas al banco de orfebrería, donde el fuego del soplete y la paciencia del buril transforman la plata en arquitectura íntima.",
        fr: "Des décennies consacrées à l'établi d'orfèvre, où le feu du chalumeau et la patience du burin transforment l'argent en architecture intime.",
        en: "Decades devoted to the goldsmith's bench, where the torch's fire and the burin's patience turn silver into intimate architecture."
    },
    origenTitulo: { es: "Hijo de relojero, nieto de canteros", fr: "Fils d'horloger, petit fils de tailleurs de pierre", en: "A watchmaker's son, a stonecutter's grandson" },
    origen: [
        {
            es: "Nacido en el Cerro Alegre de Valparaíso, Jorge Pérez aprendió desde niño que la belleza duradera exige exactitud. En el taller de relojería de su padre conoció el temple del acero y el equilibrio de los péndulos; de su abuelo materno, antiguo cantero, heredó la capacidad de leer la veta interna de cada roca.",
            fr: "Né sur le Cerro Alegre de Valparaíso, Jorge Pérez a appris dès l'enfance que la beauté durable exige l'exactitude. Dans l'atelier d'horlogerie de son père, il a découvert la trempe de l'acier et l'équilibre des pendules ; de son grand père maternel, ancien tailleur de pierre, il a hérité l'art de lire la veine intérieure de chaque roche.",
            en: "Born on Cerro Alegre in Valparaíso, Jorge Pérez learned as a child that lasting beauty demands precision. In his father's watchmaking workshop he discovered tempered steel and the balance of pendulums; from his maternal grandfather, a former stonecutter, he inherited the ability to read the inner vein of every rock."
        },
        {
            es: "En su taller no hay producción en serie. Cada fragmento de rodocrosita reposa sobre su mesa hasta que sus bandas de color sugieren qué estructura de plata debe sostenerlo en el aire.",
            fr: "Dans son atelier, rien n'est produit en série. Chaque fragment de rhodochrosite repose sur sa table jusqu'à ce que ses bandes de couleur suggèrent la structure d'argent qui doit le porter dans l'air.",
            en: "Nothing in his workshop is mass produced. Each fragment of rhodochrosite rests on his table until its bands of color suggest which silver structure should hold it in the air."
        }
    ],
    cronologia: [
        { anos: "1968 · 1986", titulo: { es: "Infancia en Valparaíso", fr: "Enfance à Valparaíso", en: "Childhood in Valparaíso" },
          texto: { es: "Aprendizaje temprano entre limas de aguja y mecanismos de relojería en el taller familiar.", fr: "Apprentissage précoce entre limes aiguilles et mécanismes d'horlogerie dans l'atelier familial.", en: "Early learning among needle files and watch mechanisms in the family workshop." } },
        { anos: "1991 · 2004", titulo: { es: "Rutas mineralógicas", fr: "Routes minéralogiques", en: "Mineral routes" },
          texto: { es: "Viajes de estudio por el norte de Chile y los yacimientos trasandinos, perfeccionando el corte y pulido de la rodocrosita.", fr: "Voyages d'étude dans le nord du Chili et les gisements transandins, pour perfectionner la taille et le polissage de la rhodochrosite.", en: "Study journeys through northern Chile and the trans Andean deposits, refining the cutting and polishing of rhodochrosite." } },
        { anos: "2005 · 2019", titulo: { es: "Construcción directa", fr: "Construction directe", en: "Direct construction" },
          texto: { es: "Trabajo directo con hilo y lámina de plata, pieza por pieza.", fr: "Travail direct du fil et de la feuille d'argent, pièce par pièce.", en: "Direct work with silver wire and sheet, one piece at a time." } },
        { anos: "2026", titulo: { es: "Colección Hecha de Tiempo", fr: "Collection Hecha de Tiempo", en: "Hecha de Tiempo collection" },
          texto: { es: "Presentación de nueve obras únicas (I a IX) en plata y rodocrosita.", fr: "Présentation de neuf œuvres uniques (I à IX) en argent et rhodochrosite.", en: "Presentation of nine unique works (I to IX) in silver and rhodochrosite." } }
    ],
    pilares: [
        { etapa: { es: "Etapa I · Lapidación", fr: "Étape I · Lapidairerie", en: "Stage I · Lapidary" }, titulo: { es: "Lectura de la veta", fr: "Lecture de la veine", en: "Reading the vein" },
          texto: { es: "Se elige la zona del mineral donde las bandas blancas y rosadas presentan mayor contraste.", fr: "On choisit la zone du minéral où les bandes blanches et roses offrent le plus fort contraste.", en: "The area of the mineral with the strongest contrast between white and pink bands is chosen." } },
        { etapa: { es: "Etapa II · Fuego", fr: "Étape II · Feu", en: "Stage II · Fire" }, titulo: { es: "Plata trabajada a mano", fr: "Argent travaillé à la main", en: "Hand worked silver" },
          texto: { es: "El hilo y la lámina de plata se curvan, ajustan y sueldan a mano alrededor de cada piedra.", fr: "Le fil et la feuille d'argent sont courbés, ajustés et soudés à la main autour de chaque pierre.", en: "Silver wire and sheet are bent, fitted and soldered by hand around each stone." } },
        { etapa: { es: "Etapa III · Bruñido", fr: "Étape III · Brunissage", en: "Stage III · Burnishing" }, titulo: { es: "Acabado de galería", fr: "Finition de galerie", en: "Gallery finish" },
          texto: { es: "Cada bisel se cierra a pulso alrededor de la piedra y la plata se pule hasta el brillo espejo.", fr: "Chaque serti est refermé à la main autour de la pierre et l'argent est poli jusqu'au brillant miroir.", en: "Each bezel is closed by hand around the stone and the silver is polished to a mirror shine." } }
    ]
};
