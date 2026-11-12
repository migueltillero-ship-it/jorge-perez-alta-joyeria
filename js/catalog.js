const WHATSAPP_NUMBER = "56956258569";
const EXCHANGE_RATES = { CLP: 1, USD: 0.00105, EUR: 0.00097 };

const JEWELS = [
    {
        id: "01", roman: "I", code: "PIEZA I", reg: "JP·2026·001", category: "orbital",
        macro: "assets/macro/01_macro.jpg",
        file: "01_rosa_de_los_vientos_clean.png", fallback: "01_rosa_de_los_vientos.jpg",
        priceCLP: 540000, weight: "18.4 g", dimensions: "48 mm × 42 mm", stoneCut: "Cabujón circular de 18 mm",
        hours: "34 horas de banco", origin: "Veta Andina Meridional", mohs: "3.8 Mohs · Pulido Vítreo",
        title: { es: "Rosa de los Vientos", fr: "Rose des Vents", en: "Compass Rose" },
        materials: { es: "Plata ley 950 forjada a mano y rodocrosita circular con bandas de calcita blanca", fr: "Argent massif 950 forgé à la main et rhodochrosite circulaire rubanée", en: "Hand forged 950 silver and circular banded rhodochrosite" },
        excerpt: {
            es: "Cuatro lazos cardinales en hilo de plata 950 custodian un cabujón circular de floración coral y marfil.",
            fr: "Quatre boucles cardinales en fil d'argent 950 veillent sur un cabochon circulaire corail et ivoire.",
            en: "Four cardinal loops in 950 silver wire guard a circular cabochon of coral and ivory bloom."
        },
        storyPart1: {
            es: "Nacida frente a las cartas náuticas antiguas del puerto de Valparaíso, esta obra traduce la brújula oceánica en una estructura aérea. Los cuatro pétalos cardinales fueron curvados al calor lento del soplete a partir de un único hilo trefilado de plata ley 950.",
            fr: "Née devant les anciennes cartes marines du port de Valparaíso, cette œuvre traduit la boussole océanique en une structure aérienne.",
            en: "Born before vintage nautical charts in the port of Valparaíso, this work translates the oceanic compass into an aerial structure."
        },
        storyPart2: {
            es: "En su centro exacto levita una rodocrosita circular donde las bandas de carbonato de manganeso dibujan olas blancas sobre un fondo rosa profundo. Ninguna veta se repite jamás.",
            fr: "En son centre exact lévite une rhodochrosite circulaire où les bandes minérales dessinent des vagues blanches sur fond rose profond.",
            en: "At its exact center levitates a circular rhodochrosite where mineral bands draw white waves across a deep rose ground."
        }
    },
    {
        id: "02", roman: "II", code: "PIEZA II", reg: "JP·2026·002", category: "gota",
        macro: "assets/macro/02_macro.jpg",
        file: "02_gota_clean.png", fallback: "02_gota.jpg",
        priceCLP: 490000, weight: "15.2 g", dimensions: "44 mm × 28 mm", stoneCut: "Cabujón ovalado de 20 × 14 mm",
        hours: "28 horas de banco", origin: "Yacimiento Trasandino Austral", mohs: "4.0 Mohs · Translucidez Cálida",
        title: { es: "Gota Austral", fr: "Goutte Australe", en: "Southern Drop" },
        materials: { es: "Plata ley 950 en arco ojival con esfera bruñida y rodocrosita oval", fr: "Argent 950 en arche ogivale avec sphère polie et rhodochrosite ovale", en: "Ogival arch 950 silver with burnished sphere and oval rhodochrosite" },
        excerpt: {
            es: "Arquitectura de gota con anillo interior y esfera de plata bruñida que corona la gema rosada.",
            fr: "Architecture en goutte avec anneau intérieur et sphère d'argent poli couronnant la gemme.",
            en: "Drop architecture with an inner ring and burnished silver sphere crowning the rose gem."
        },
        storyPart1: {
            es: "En las altas cumbres andinas, el deshielo pule la roca en silencio durante siglos. Jorge Pérez diseñó una silueta protectora que suspende un cabujón ovalado bajo un anillo interno, coronado por una gota esférica de plata fundida.",
            fr: "Sur les hauts sommets andins, la fonte des glaces polit la roche en silence durant des siècles.",
            en: "High in the Andean peaks, snowmelt polishes rock in silence over centuries, inspiring this suspended cabochon."
        },
        storyPart2: {
            es: "El espacio de aire entre el bisel central y el marco exterior permite que la luz contornee la pieza y se funda con la piel del escote.",
            fr: "L'espace d'air entre le serti central et le cadre extérieur permet à la lumière de sculpter la pièce.",
            en: "The open air between the central bezel and outer frame allows light to contour the piece against the skin."
        }
    },
    {
        id: "03", roman: "III", code: "PIEZA III", reg: "JP·2026·003", category: "geometrica",
        macro: "assets/macro/03_macro.jpg",
        file: "03_rombo_clean.png", fallback: "03_rombo.jpg",
        priceCLP: 510000, weight: "16.8 g", dimensions: "50 mm × 38 mm", stoneCut: "Barra rectangular bandeada de 26 mm",
        hours: "31 horas de banco", origin: "Estrato Cordillera Sur", mohs: "3.9 Mohs · Corte Tabular",
        title: { es: "Rombo Arquitectónico", fr: "Losange Architectural", en: "Architectural Rhombus" },
        materials: { es: "Plata ley 950 laminada en pórtico y barra de rodocrosita bandeada", fr: "Argent 950 laminé en portique et barre de rhodochrosite rubanée", en: "Rolled 950 silver portico and banded rhodochrosite bar" },
        excerpt: {
            es: "Pórtico rectangular en ángulo diamantino atravesado por una barra mineral de estrías paralelas.",
            fr: "Portique rectangulaire en angle traversé par une barre minérale aux stries parallèles.",
            en: "Diamond angled rectangular portico crossed by a parallel banded mineral bar."
        },
        storyPart1: {
            es: "Un diálogo directo con la arquitectura moderna. La gema fue cortada en un bloque rectangular exacto para revelar cinco estratos geológicos paralelos en tonos rosa viejo, coral y crema mineral.",
            fr: "Un dialogue direct avec l'architecture moderne où la gemme révèle cinq strates géologiques parallèles.",
            en: "A direct dialogue with modern architecture where the gem reveals five parallel geological strata."
        },
        storyPart2: {
            es: "El marco de plata ley 950 la sostiene por sus extremos dejando dos triángulos de aire libre, logrando una geometría audaz y atemporal.",
            fr: "Le cadre en argent 950 la soutient par ses extrémités en laissant deux triangles d'air libre.",
            en: "The 950 silver frame supports its ends while leaving two open triangles of air."
        }
    },
    {
        id: "04", roman: "IV", code: "PIEZA IV", reg: "JP·2026·004", category: "geometrica",
        macro: "assets/macro/04_macro.jpg",
        file: "04_campana_clean.png", fallback: "04_campana.jpg",
        priceCLP: 525000, weight: "17.4 g", dimensions: "52 mm × 32 mm", stoneCut: "Cojín romboidal de 22 mm",
        hours: "33 horas de banco", origin: "Manto Mineral Andino", mohs: "4.0 Mohs · Pulido Espejo",
        title: { es: "Vértice Andino", fr: "Sommet Andin", en: "Andean Vertex" },
        materials: { es: "Plata ley 950 en doble rombo escalonado y rodocrosita en corte cojín", fr: "Argent 950 double losange et rhodochrosite taille coussin", en: "Stepped double diamond 950 silver and cushion rhodochrosite" },
        excerpt: {
            es: "Doble geometría donde un rombo hueco superior conduce hacia una gema cuadrada en ángulo con doble bisel.",
            fr: "Double géométrie où un losange ouvert supérieur mène à une gemme carrée à double serti.",
            en: "Double geometry where an open upper diamond leads to a stepped bezel cushion gem."
        },
        storyPart1: {
            es: "Construida a partir de la intersección de dos rombos: el superior dibuja el vacío mediante una viga de plata cuadrada, mientras el inferior descansa sobre una caja escalonada hecha a mano.",
            fr: "Construite à partir de l'intersection de deux losanges alliant le vide et la pierre.",
            en: "Built from the intersection of two diamonds balancing open air and mineral presence."
        },
        storyPart2: {
            es: "La piedra exhibe una nebulosa natural de calcita blanca sobre rosa carmesí que recuerda las nubes altas sobre la cordillera.",
            fr: "La pierre expose une nébuleuse naturelle de calcite blanche sur rose carmin.",
            en: "The stone displays a natural nebula of white calcite over crimson rose."
        }
    },
    {
        id: "05", roman: "V", code: "PIEZA V", reg: "JP·2026·005", category: "gota",
        macro: "assets/macro/05_macro.jpg",
        file: "05_horizonte_clean.png", fallback: "05_horizonte.jpg",
        priceCLP: 560000, weight: "19.5 g", dimensions: "49 mm × 31 mm", stoneCut: "Gota libre asimétrica de 28 mm",
        hours: "36 horas de banco", origin: "Veta Estalactítica Austral", mohs: "3.8 Mohs · Veta Zigzag",
        title: { es: "Horizonte Mineral", fr: "Horizon Minéral", en: "Mineral Horizon" },
        materials: { es: "Plata ley 950 en doble voluta caligráfica y rodocrosita piriforme", fr: "Argent 950 double volute calligraphique et rhodochrosite piriforme", en: "Calligraphic double scroll 950 silver and pear rhodochrosite" },
        excerpt: {
            es: "Gota mineral de vetas zigzagueantes abrazada lateralmente por un trazo de plata que culmina en espirales.",
            fr: "Goutte minérale aux veines en zigzag enlacée latéralement par un trait d'argent en spirales.",
            en: "Mineral drop with zigzagging veins laterally embraced by a silver line ending in spirals."
        },
        storyPart1: {
            es: "Esta gema extraordinaria conserva el dibujo exacto de las estalactitas minerales con anillos concéntricos y trazos quebrados en tonos rosa cuarzo, marfil y grafito.",
            fr: "Cette gemme extraordinaire conserve le dessin exact des stalactites minérales.",
            en: "This extraordinary gem preserves the exact pattern of mineral stalactites in quartz rose and ivory."
        },
        storyPart2: {
            es: "Para no interrumpir su paisaje interior, Jorge Pérez la abrazó solo por el flanco derecho con una cinta de plata que nace y muere en voluta.",
            fr: "Pour ne pas interrompre son paysage intérieur, l'orfèvre l'a enlacée uniquement sur le flanc droit.",
            en: "To preserve its inner landscape, the goldsmith embraced only its right flank with a scrolling ribbon."
        }
    },
    {
        id: "06", roman: "VI", code: "PIEZA VI", reg: "JP·2026·006", category: "geometrica",
        macro: "assets/macro/06_macro.jpg",
        file: "06_pendulo_juego_clean.png", fallback: "06_pendulo_juego.jpg",
        priceCLP: 680000, weight: "28.4 g", dimensions: "54 mm × 36 mm", stoneCut: "Tríptico de rombos y cabujones cuadrados",
        hours: "48 horas de banco", origin: "Matriz Geológica Compartida", mohs: "4.0 Mohs · Conjunto de 3 Piezas",
        title: { es: "Tríptico del Tiempo", fr: "Triptyque du Temps", en: "Triptych of Time" },
        materials: { es: "Juego de tres obras articuladas en plata ley 950 y rodocrosita veteada", fr: "Parure de trois œuvres articulées en argent 950 et rhodochrosite veinée", en: "Three piece articulated suite in 950 silver and veined rhodochrosite" },
        excerpt: {
            es: "Conjunto monumental de tres piezas articuladas con cabezales cuadrados y cuerpos romboidales de una misma roca.",
            fr: "Ensemble monumental de trois pièces articulées avec sommets carrés et corps en losange.",
            en: "Monumental three piece articulated suite with square crowns and diamond bodies from one rock."
        },
        storyPart1: {
            es: "La joya cumbre para coleccionistas. Seis gemas en total fueron rebanadas de la misma sección mineral para mantener la continuidad exacta de sus vetas ocres y rosadas.",
            fr: "Le chef d'œuvre pour collectionneurs: six gemmes tranchées dans la même section minérale.",
            en: "The pinnacle collector suite: six gems sliced from the very same mineral section."
        },
        storyPart2: {
            es: "Sus charnelas mecánicas hechas a mano permiten que cada rombo oscile suavemente con el movimiento.",
            fr: "Ses charnières mécaniques façonnées à la main permettent à chaque losange d'osciller doucement.",
            en: "Its handcrafted mechanical hinges allow each lower diamond to sway gently."
        }
    },
    {
        id: "07", roman: "VII", code: "PIEZA VII", reg: "JP·2026·007", category: "gota",
        macro: "assets/macro/07_macro.jpg",
        file: "07_voluta_clean.png", fallback: "07_voluta.jpg",
        priceCLP: 550000, weight: "21.0 g", dimensions: "51 mm × 34 mm", stoneCut: "Cojín horizontal bandeado de 26 mm",
        hours: "35 horas de banco", origin: "Sedimento Costero Andino", mohs: "3.9 Mohs · Bandas Onduladas",
        title: { es: "Voluta Barroca", fr: "Volute Baroque", en: "Baroque Volute" },
        materials: { es: "Plata ley 950 en bandeja biselada y arabesco superior forjado", fr: "Argent 950 sur base biseautée et arabesque supérieure forgée", en: "Beveled 950 silver tray and forged upper arabesque" },
        excerpt: {
            es: "Piedra horizontal de ondas sedimentarias coronada por un arabesco caligráfico en hilo grueso de plata.",
            fr: "Pierre horizontale aux ondes sédimentaires couronnée d'une arabesque calligraphique en argent.",
            en: "Horizontal stone with sedimentary waves crowned by a calligraphic arabesque in thick silver wire."
        },
        storyPart1: {
            es: "Sobre una sólida plataforma rectangular de bordes redondeados en plata ley 950 descansa una rodocrosita cuyas capas horizontales evocan el oleaje del Pacífico detenido en la piedra.",
            fr: "Sur une solide plateforme rectangulaire repose une rhodochrosite évoquant la houle du Pacifique.",
            en: "Upon a solid rounded platform rests a rhodochrosite whose horizontal layers evoke Pacific waves."
        },
        storyPart2: {
            es: "En la cima, un arabesco asimétrico forjado a martillo aporta la gracia del barroco hispanoamericano.",
            fr: "Au sommet, une arabesque forgée au marteau apporte la grâce du baroque sud américain.",
            en: "At the crown, a hammer forged arabesque brings the grace of South American baroque artistry."
        }
    },
    {
        id: "08", roman: "VIII", code: "PIEZA VIII", reg: "JP·2026·008", category: "orbital",
        macro: "assets/macro/08_macro.jpg",
        file: "08_orbita_clean.png", fallback: "08_orbita.jpg",
        priceCLP: 530000, weight: "17.9 g", dimensions: "49 mm × 30 mm", stoneCut: "Cabujón ovalado de 22 mm",
        hours: "32 horas de banco", origin: "Cámara Cristalina Sur", mohs: "4.0 Mohs · Rosa Intenso",
        title: { es: "Órbita Interior", fr: "Orbite Intérieure", en: "Inner Orbit" },
        materials: { es: "Plata ley 950 en estribo escultórico con tensores y rodocrosita", fr: "Argent 950 en étrier sculptural avec haubans et rhodochrosite", en: "Sculptural 950 silver stirrup with struts and rhodochrosite" },
        excerpt: {
            es: "Doble contorno curvo con tensores diagonales internos que suspenden en el aire el núcleo ovalado.",
            fr: "Double contour courbe avec haubans diagonaux internes suspendant le cœur ovale.",
            en: "Curved double contour with diagonal inner struts suspending the oval core in midair."
        },
        storyPart1: {
            es: "Obra de ingeniería orfebre donde el cabujón ovalado parece flotar dentro de una elipse mayor gracias a cuatro brazos estructurales soldados con precisión microscópica.",
            fr: "Œuvre d'ingénierie orfèvre où le cabochon ovale semble flotter dans une ellipse.",
            en: "A feat of goldsmith engineering where the oval cabochon appears to float within a larger ellipse."
        },
        storyPart2: {
            es: "El tono uniforme y profundo de esta gema contrasta con el brillo especular de la estructura de plata.",
            fr: "Le ton profond de cette gemme contraste avec l'éclat miroir de la structure en argent.",
            en: "The deep tone of this gem contrasts against the mirror luster of its silver architecture."
        }
    },
    {
        id: "09", roman: "IX", code: "PIEZA IX", reg: "JP·2026·009", category: "geometrica",
        macro: "assets/macro/09_macro.jpg",
        file: "09_nudo_clean.png", fallback: "09_nudo.jpg",
        priceCLP: 590000, weight: "22.2 g", dimensions: "53 mm × 38 mm", stoneCut: "Triple rombo articulado",
        hours: "42 horas de banco", origin: "Veta Madre Austral", mohs: "3.9 Mohs · Triple Engaste",
        title: { es: "Constelación del Sur", fr: "Constellation du Sud", en: "Southern Constellation" },
        materials: { es: "Plata ley 950 articulada en nudo de anillas con tres gemas romboidales", fr: "Argent 950 articulé par anneaux avec trois gemmes en losange", en: "Ring articulated 950 silver set with three diamond gems" },
        excerpt: {
            es: "Tres rombos de rodocrosita unidos por anillas móviles de plata que acompañan el compás del cuerpo.",
            fr: "Trois losanges de rhodochrosite reliés par des anneaux mobiles en argent massif.",
            en: "Three rhodochrosite diamonds linked by mobile silver rings that move with the wearer."
        },
        storyPart1: {
            es: "Cierra la colección Hecha de Tiempo con un diseño cinético: tres rombos biselados en plata ley 950 convergen en una constelación central de argollas móviles hechas una a una.",
            fr: "Clôt la collection avec un design cinétique: trois losanges sertis d'argent 950 convergent vers un nœud central.",
            en: "Closes the collection with a kinetic design: three bezel set diamonds converge at a central ring knot."
        },
        storyPart2: {
            es: "Al caminar, las tres piedras reflejan la luz en ángulos distintos, evocando las estrellas australes sobre el océano.",
            fr: "En marchant, les trois pierres reflètent la lumière sous différents angles.",
            en: "As the wearer moves, the three stones catch light at shifting angles."
        }
    }
];
