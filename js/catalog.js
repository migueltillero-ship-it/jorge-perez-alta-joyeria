const WHATSAPP_NUMBER = "56956258569";
const EXCHANGE_RATES = { CLP: 1, USD: 0.00105, EUR: 0.00097 };

const JEWELS = [
    {
        id: "01", code: "PIEZA I", category: "orbital",
        macro: "assets/macro/01_macro.jpg",
        file: "01_rosa_de_los_vientos_clean.png", fallback: "01_rosa_de_los_vientos.jpg",
        priceCLP: 540000, weight: "18.4 g", dimensions: "48 mm × 42 mm", stoneCut: "Cabujón circular de 18 mm",
        title: { es: "Rosa de los Vientos", fr: "Rose des Vents", en: "Compass Rose" },
        materials: { es: "Plata ley 950 forjada a mano y rodocrosita circular", fr: "Argent 950 forgé à la main et rhodochrosite circulaire", en: "Hand forged 950 silver and circular rhodochrosite" },
        excerpt: {
            es: "Cuatro lazos cardinales de plata ley 950 custodian un núcleo rosado con bandas cristalinas blancas.",
            fr: "Quatre boucles cardinales en argent 950 veillent sur un cœur minéral rosé aux bandes cristallines.",
            en: "Four cardinal loops of 950 silver guard a rose mineral core with white crystalline bands."
        },
        storyPart1: {
            es: "Nacida frente a las cartas de navegación históricas de Valparaíso, esta pieza traduce la rosa náutica en una escultura aérea. Los cuatro pétalos abiertos en hilo de plata fueron curvados al calor lento del soplete sin soldaduras que interrumpan la fluidez del metal.",
            fr: "Née devant les anciennes cartes marines de Valparaíso, cette pièce traduit la rose nautique en une sculpture aérienne.",
            en: "Born before vintage navigation charts in Valparaíso, this piece translates the compass rose into an aerial sculpture."
        },
        storyPart2: {
            es: "En el centro exacto reposa una rodocrosita circular donde las vetas coral y marfil dibujan un mapa geológico irrepetible.",
            fr: "Au centre exact repose une rhodochrosite circulaire où les veines corail et ivoire dessinent une carte géologique unique.",
            en: "At the exact center rests a circular rhodochrosite where coral and ivory veins draw an unrepeatable geological map."
        }
    },
    {
        id: "02", code: "PIEZA II", category: "gota",
        macro: "assets/macro/02_macro.jpg",
        file: "02_gota_clean.png", fallback: "02_gota.jpg",
        priceCLP: 490000, weight: "15.2 g", dimensions: "44 mm × 28 mm", stoneCut: "Cabujón ovalado de 20 × 14 mm",
        title: { es: "Gota Austral", fr: "Goutte Australe", en: "Southern Drop" },
        materials: { es: "Plata ley 950 en arco abierto y rodocrosita oval", fr: "Argent 950 en arche ouverte et rhodochrosite ovale", en: "Open arch 950 silver and oval rhodochrosite" },
        excerpt: {
            es: "Arquitectura de gota con anillo interior y esfera de plata bruñida que corona la gema.",
            fr: "Architecture en goutte avec anneau intérieur et sphère d'argent poli couronnant la gemme.",
            en: "Drop architecture with an inner ring and burnished silver sphere crowning the gem."
        },
        storyPart1: {
            es: "En las cumbres australes, el agua de los glaciares pule la roca durante milenios. Este diseño suspende un cabujón ovalado de intensa floración rosada bajo un anillo interior coronado por una esfera de plata.",
            fr: "Sur les sommets austraux, l'eau des glaciers polit la pierre durant des millénaires.",
            en: "In the southern peaks, glacier water polishes stone over millennia, inspiring this suspended oval cabochon."
        },
        storyPart2: {
            es: "La abertura lateral entre el bisel y el marco exterior permite que la piel respire y que la luz perfile la silueta del metal.",
            fr: "L'ouverture latérale entre le serti et le cadre extérieur laisse circuler la lumière.",
            en: "The open space between the bezel and outer frame lets light contour the silver silhouette."
        }
    },
    {
        id: "03", code: "PIEZA III", category: "geometrica",
        macro: "assets/macro/03_macro.jpg",
        file: "03_rombo_clean.png", fallback: "03_rombo.jpg",
        priceCLP: 510000, weight: "16.8 g", dimensions: "50 mm × 38 mm", stoneCut: "Barra rectangular bandeada de 26 mm",
        title: { es: "Rombo Arquitectónico", fr: "Losange Architectural", en: "Architectural Rhombus" },
        materials: { es: "Plata ley 950 geométrica y barra de rodocrosita bandeada", fr: "Argent 950 géométrique et barre de rhodochrosite rubanée", en: "Geometric 950 silver and banded rhodochrosite bar" },
        excerpt: {
            es: "Pórtico rectangular en ángulo diamantino atravesado por una barra mineral de estrías rosadas y blancas.",
            fr: "Portique rectangulaire traversé par une barre minérale aux stries rosées et blanches.",
            en: "Rectangular portico set at a diamond angle crossed by a rose and white banded mineral bar."
        },
        storyPart1: {
            es: "Un homenaje al constructivismo escultórico. La piedra tallada en rectángulo puro muestra estratos paralelos perfectos que parecen pinceladas sobre lienzo, sostenidos dentro de un marco de plata de aristas suaves.",
            fr: "Un hommage au constructivisme sculptural où la pierre rectangulaire révèle des strates parallèles parfaites.",
            en: "A tribute to sculptural constructivism where the rectangular stone reveals parallel geological strata."
        },
        storyPart2: {
            es: "El vacío superior e inferior dentro del marco otorga una ligereza visual extraordinaria sobre cualquier prenda.",
            fr: "Le vide supérieur et inférieur à l'intérieur du cadre offre une légèreté visuelle remarquable.",
            en: "The upper and lower negative space within the frame grants extraordinary visual lightness."
        }
    },
    {
        id: "04", code: "PIEZA IV", category: "geometrica",
        macro: "assets/macro/04_macro.jpg",
        file: "04_campana_clean.png", fallback: "04_campana.jpg",
        priceCLP: 525000, weight: "17.4 g", dimensions: "52 mm × 32 mm", stoneCut: "Cojín romboidal de 22 mm",
        title: { es: "Vértice Andino", fr: "Sommet Andin", en: "Andean Vertex" },
        materials: { es: "Plata ley 950 en doble rombo y rodocrosita en corte cojín", fr: "Argent 950 double losange et rhodochrosite coussin", en: "Double diamond 950 silver and cushion rhodochrosite" },
        excerpt: {
            es: "Doble geometría articulada donde un rombo hueco superior conduce hacia una gema cuadrada en ángulo.",
            fr: "Double géométrie où un losange ouvert supérieur mène à une gemme carrée en angle.",
            en: "Articulated double geometry where an open upper diamond leads to an angled cushion gem."
        },
        storyPart1: {
            es: "Compuesta por dos cuerpos geométricos unidos en un vértice central: el superior dibuja el aire con un trazo limpio de plata, mientras el inferior alberga una piedra de lados levemente curvos en doble escalón de bisel.",
            fr: "Composée de deux corps géométriques unis par un sommet central, alliant le vide et la densité minérale.",
            en: "Composed of two geometric bodies joined at a central vertex, balancing open air and mineral density."
        },
        storyPart2: {
            es: "La riqueza de sus nubes blancas sobre fondo carmesí convierte esta pieza en una pintura abstracta natural.",
            fr: "La richesse de ses nuages blancs sur fond carmin transforme cette pièce en peinture abstraite naturelle.",
            en: "The richness of its white clouds over a crimson ground turns this piece into a natural abstract painting."
        }
    },
    {
        id: "05", code: "PIEZA V", category: "gota",
        macro: "assets/macro/05_macro.jpg",
        file: "05_horizonte_clean.png", fallback: "05_horizonte.jpg",
        priceCLP: 560000, weight: "19.5 g", dimensions: "49 mm × 31 mm", stoneCut: "Gota libre asimétrica de 28 mm",
        title: { es: "Horizonte Mineral", fr: "Horizon Minéral", en: "Mineral Horizon" },
        materials: { es: "Plata ley 950 en doble voluta y rodocrosita piriforme", fr: "Argent 950 double volute et rhodochrosite piriforme", en: "Double scroll 950 silver and pear rhodochrosite" },
        excerpt: {
            es: "Gota mineral de vetas zigzagueantes abrazada por un trazo caligráfico que nace y culmina en espiral.",
            fr: "Goutte minérale aux veines en zigzag enlacée par un trait calligraphique achevé en spirale.",
            en: "Mineral drop with zigzagging veins embraced by a calligraphic line ending in spirals."
        },
        storyPart1: {
            es: "Las formaciones internas de este ejemplar dibujan cordilleras rosadas y senderos de cuarzo. Para acompañar ese movimiento interno, Jorge Pérez forjó una cinta de plata que envuelve el costado derecho y se riza en ambos extremos.",
            fr: "Les formations internes de cet exemplaire dessinent des cordillères rosées accompagnées d'un ruban d'argent en spirale.",
            en: "The internal formations of this specimen draw rose mountain ranges accompanied by a curling silver ribbon."
        },
        storyPart2: {
            es: "Es una joya de carácter orgánico y fluido que dialoga con la curvatura natural del cuello.",
            fr: "C'est un bijou au caractère organique et fluide qui dialogue avec la courbure du cou.",
            en: "An organic, fluid jewel that converses naturally with the curve of the neckline."
        }
    },
    {
        id: "06", code: "PIEZA VI", category: "geometrica",
        macro: "assets/macro/06_macro.jpg",
        file: "06_pendulo_juego_clean.png", fallback: "06_pendulo_juego.jpg",
        priceCLP: 680000, weight: "28.4 g", dimensions: "54 mm × 36 mm", stoneCut: "Tríptico de rombos y cabujones cuadrados",
        title: { es: "Tríptico del Tiempo", fr: "Triptyque du Temps", en: "Triptych of Time" },
        materials: { es: "Juego de tres piezas en plata ley 950 y rodocrosita veteada", fr: "Parure de trois pièces en argent 950 et rhodochrosite veinée", en: "Three piece suite in 950 silver and veined rhodochrosite" },
        excerpt: {
            es: "Conjunto monumental de tres piezas articuladas con cabezales cuadrados y cuerpos romboidales.",
            fr: "Ensemble monumental de trois pièces articulées avec sommets carrés et corps en losange.",
            en: "Monumental three piece articulated suite with square crowns and diamond bodies."
        },
        storyPart1: {
            es: "Talladas a partir de un mismo bloque madre donde conviven los tonos marfil, arena y rosa andino. Cada una de las tres piezas posee una bisagra artesanal en plata que dota de movimiento propio al rombo inferior.",
            fr: "Taillées dans un même bloc mère où cohabitent les tons ivoire, sable et rose andin avec charnière artisanale.",
            en: "Cut from the very same mother block where ivory, sand, and Andean rose tones meet with handcrafted hinges."
        },
        storyPart2: {
            es: "Representa el pasado, el presente y el porvenir reunidos en una sola obra de colección.",
            fr: "Représente le passé, le présent et l'avenir réunis dans une seule œuvre de collection.",
            en: "Represents past, present, and future united in a single collector masterwork."
        }
    },
    {
        id: "07", code: "PIEZA VII", category: "gota",
        macro: "assets/macro/07_macro.jpg",
        file: "07_voluta_clean.png", fallback: "07_voluta.jpg",
        priceCLP: 550000, weight: "21.0 g", dimensions: "51 mm × 34 mm", stoneCut: "Cojín horizontal bandeado de 26 mm",
        title: { es: "Voluta Barroca", fr: "Volute Baroque", en: "Baroque Volute" },
        materials: { es: "Plata ley 950 en plataforma biselada y arabesco superior", fr: "Argent 950 sur base biseautée et arabesque supérieure", en: "Beveled 950 silver base and upper arabesque" },
        excerpt: {
            es: "Piedra horizontal de ondas sedimentarias coronada por un arabesco caligráfico de plata forjada.",
            fr: "Pierre horizontale aux ondes sédimentaires couronnée d'une arabesque en argent forgé.",
            en: "Horizontal stone with sedimentary waves crowned by a forged silver arabesque."
        },
        storyPart1: {
            es: "La base de esta joya fue construida con una bandeja de plata de borde ancho que enmarca una rodocrosita cuyas bandas horizontales parecen olas marinas petrificadas.",
            fr: "La base de ce bijou encadre une rhodochrosite dont les bandes horizontales évoquent des vagues pétrifiées.",
            en: "The wide silver bezel frames a rhodochrosite whose horizontal bands evoke petrified ocean waves."
        },
        storyPart2: {
            es: "Sobre la piedra se eleva una danza de espirales en hilo grueso de plata que sostiene el pasacadena.",
            fr: "Au dessus de la pierre s'élève une danse de spirales en fil d'argent massif.",
            en: "Above the stone rises a dance of thick silver spirals supporting the bail."
        }
    },
    {
        id: "08", code: "PIEZA VIII", category: "orbital",
        macro: "assets/macro/08_macro.jpg",
        file: "08_orbita_clean.png", fallback: "08_orbita.jpg",
        priceCLP: 530000, weight: "17.9 g", dimensions: "49 mm × 30 mm", stoneCut: "Cabujón ovalado de 22 mm",
        title: { es: "Órbita Interior", fr: "Orbite Intérieure", en: "Inner Orbit" },
        materials: { es: "Plata ley 950 en estribo escultórico y rodocrosita", fr: "Argent 950 architectural et cabochon de rhodochrosite", en: "Sculptural 950 silver stirrup and rhodochrosite" },
        excerpt: {
            es: "Doble contorno curvo con tensores diagonales internos que suspenden el núcleo ovalado.",
            fr: "Double contour courbe avec haubans diagonaux suspendant le cœur ovale.",
            en: "Curved double contour with diagonal inner struts suspending the oval core."
        },
        storyPart1: {
            es: "Inspirada en la ingeniería de los puentes colgantes y los astrolabios antiguos. Dos nervaduras internas descienden desde la cúspide para abrazar el bisel central y proyectarse hacia la base.",
            fr: "Inspirée des astrolabes anciens, deux nervures internes descendent du sommet pour enlacer le serti central.",
            en: "Inspired by ancient astrolabes, two inner ribs descend from the apex to embrace the central bezel."
        },
        storyPart2: {
            es: "Su equilibrio simétrico transmite firmeza, modernidad y carácter escultórico.",
            fr: "Son équilibre symétrique transmet fermeté, modernité et caractère sculptural.",
            en: "Its symmetrical balance conveys strength, modernity, and sculptural poise."
        }
    },
    {
        id: "09", code: "PIEZA IX", category: "geometrica",
        macro: "assets/macro/09_macro.jpg",
        file: "09_nudo_clean.png", fallback: "09_nudo.jpg",
        priceCLP: 590000, weight: "22.2 g", dimensions: "53 mm × 38 mm", stoneCut: "Triple rombo articulado",
        title: { es: "Constelación del Sur", fr: "Constellation du Sud", en: "Southern Constellation" },
        materials: { es: "Plata ley 950 articulada con tres gemas romboidales", fr: "Argent 950 articulé serti de trois gemmes en losange", en: "Articulated 950 silver set with three diamond gems" },
        excerpt: {
            es: "Tres rombos de rodocrosita unidos por anillas móviles de plata que acompañan el compás del cuerpo.",
            fr: "Trois losanges de rhodochrosite reliés par des anneaux mobiles en argent massif.",
            en: "Three rhodochrosite diamonds linked by mobile silver rings that move with the wearer."
        },
        storyPart1: {
            es: "A diferencia de los colgantes rígidos, esta obra articula tres gemas independientes mediante un nudo central de argollas soldadas a mano, logrando una caída flexible sobre el pecho.",
            fr: "Cette œuvre articule trois gemmes indépendantes grâce à un nœud central d'anneaux soudés à la main.",
            en: "This work articulates three independent gems through a central knot of hand soldered silver rings."
        },
        storyPart2: {
            es: "Evoca las tres estrellas del cinturón austral reflejadas sobre la superficie del mar chileno.",
            fr: "Évoque une constellation australe reflétée sur la mer du Chili.",
            en: "Evokes a southern constellation reflected upon the quiet Chilean sea."
        }
    }
];
