const WHATSAPP_NUMBER = "56956258569";
const EXCHANGE_RATES = { CLP: 1, USD: 0.00105, EUR: 0.00097 };

const JEWELS = [
    {
        id: "01", code: "PIEZA I", category: "orbital",
        file: "01_rosa_de_los_vientos_clean.png", fallback: "01_rosa_de_los_vientos.jpg",
        priceCLP: 540000, weight: "18.4 g", dimensions: "48 mm × 42 mm", stoneCut: "Cabujón circular de 18 mm",
        title: { es: "Rosa de los Vientos", fr: "Rose des Vents", en: "Compass Rose" },
        materials: { es: "Plata ley 950 forjada a mano y rodocrosita circular", fr: "Argent 950 forgé à la main et rhodochrosite circulaire", en: "Hand forged 950 silver and circular rhodochrosite" },
        excerpt: {
            es: "Cuatro lazos cardinales de plata ley 950 custodian un núcleo rosado como estrella polar del Pacífico Sur.",
            fr: "Quatre boucles cardinales en argent 950 veillent sur un cœur minéral rosé telle une étoile polaire.",
            en: "Four cardinal loops of 950 silver guard a rose mineral core like a South Pacific polar star."
        },
        storyPart1: {
            es: "Nacida frente a los mapas de navegación antiguos de Valparaíso, esta pieza traduce la rosa náutica en una escultura aérea. Los cuatro pétalos abiertos en hilo de plata de sección redonda fueron curvados al calor lento del soplete sin soldaduras visibles que interrumpan la tensión del trazo.",
            fr: "Née devant les anciennes cartes marines de Valparaíso, cette pièce traduit la rose nautique en une sculpture aérienne. Les quatre pétales ouverts en fil d'argent ont été courbés lentement à la flamme.",
            en: "Born before vintage navigation charts in Valparaíso, this piece translates the compass rose into an aerial sculpture. Its four open silver petals were slowly curved by flame without visible seams."
        },
        storyPart2: {
            es: "En el centro exacto reposa una rodocrosita circular de floración cristalina intensa. Quien la lleva sobre el pecho porta un recordatorio táctil de rumbo, equilibrio y pertenencia.",
            fr: "Au centre exact repose une rhodochrosite circulaire intense. Celui qui la porte garde un rappel tactile de cap et d'équilibre.",
            en: "At the exact center rests an intense circular rhodochrosite, offering a tactile reminder of direction, balance, and belonging."
        }
    },
    {
        id: "02", code: "PIEZA II", category: "gota",
        file: "02_gota_clean.png", fallback: "02_gota.jpg",
        priceCLP: 490000, weight: "15.2 g", dimensions: "44 mm × 28 mm", stoneCut: "Cabujón ovalado de 20 × 14 mm",
        title: { es: "Gota Austral", fr: "Goutte Australe", en: "Southern Drop" },
        materials: { es: "Plata ley 950 en doble órbita y rodocrosita oval", fr: "Argent 950 double orbite et rhodochrosite ovale", en: "Double orbit 950 silver and oval rhodochrosite" },
        excerpt: {
            es: "Doble órbita elíptica que suspende el instante exacto del deshielo andino sobre la roca madre.",
            fr: "Double orbite elliptique suspendant l'instant précis de la fonte andine sur la roche mère.",
            en: "Double elliptical orbit suspending the exact instant of Andean snowmelt upon bedrock."
        },
        storyPart1: {
            es: "En las cumbres australes, el agua que desciende de los glaciares pule la piedra durante milenios. Jorge Pérez diseñó dos anillos elípticos asimétricos que rodean la gema sin encerrarla, dejando que la luz entre por los costados del engaste.",
            fr: "Sur les sommets austraux, l'eau des glaciers polit la pierre durant des millénaires. Deux anneaux elliptiques entourent la gemme en laissant circuler la lumière.",
            en: "In the southern peaks, glacier water polishes stone over millennia. Two asymmetrical elliptical rings surround the gem while allowing light to pass freely."
        },
        storyPart2: {
            es: "En la cúspide de la piedra, una diminuta esfera de plata bruñida actúa como punto de rocío, otorgando una verticalidad serena sobre el escote.",
            fr: "Au sommet de la pierre, une sphère d'argent poli agit comme une goutte de rosée sur le décolleté.",
            en: "At the crest of the stone, a tiny burnished silver sphere acts as a dew point, granting serene verticality."
        }
    },
    {
        id: "03", code: "PIEZA III", category: "geometrica",
        file: "03_rombo_clean.png", fallback: "03_rombo.jpg",
        priceCLP: 510000, weight: "16.8 g", dimensions: "50 mm × 38 mm", stoneCut: "Prisma cilíndrico diagonal de 24 mm",
        title: { es: "Rombo Arquitectónico", fr: "Losange Architectural", en: "Architectural Rhombus" },
        materials: { es: "Plata ley 950 laminada y prisma de rodocrosita", fr: "Argent 950 laminé et prisme de rhodochrosite", en: "Rolled 950 silver and rhodochrosite prism" },
        excerpt: {
            es: "Marco diamantino de líneas rectas atravesado diagonalmente por una columna mineral rosada.",
            fr: "Cadre en losange aux lignes pures traversé en diagonale par une colonne minérale rosée.",
            en: "Diamond frame of pure straight lines crossed diagonally by a rose mineral column."
        },
        storyPart1: {
            es: "Rara vez la rodocrosita es tallada en forma tubular. Al encontrar este cilindro de veta bandeada, el maestro decidió construirle un pórtico rigurosamente geométrico que contrastara con la suavidad orgánica del mineral.",
            fr: "Rarement la rhodochrosite est taillée en forme tubulaire. Le maître a bâti un portique géométrique contrastant avec la douceur du minéral.",
            en: "Rhodochrosite is rarely carved into a tubular prism. Upon finding this banded stone, the master built a geometric portico to contrast with its organic warmth."
        },
        storyPart2: {
            es: "El resultado es una pieza de vanguardia atemporal donde el espacio vacío pesa tanto como el metal precioso.",
            fr: "Le résultat est une œuvre d'avant garde intemporelle où le vide dialogue avec le métal précieux.",
            en: "The result is a timeless avant garde work where negative space carries as much presence as the precious metal."
        }
    },
    {
        id: "04", code: "PIEZA IV", category: "geometrica",
        file: "04_campana_clean.png", fallback: "04_campana.jpg",
        priceCLP: 470000, weight: "14.1 g", dimensions: "52 mm × 30 mm", stoneCut: "Rombo facetado de 18 mm",
        title: { es: "Campana de Silencio", fr: "Cloche de Silence", en: "Bell of Silence" },
        materials: { es: "Plata ley 950 caligráfica y rodocrosita romboidal", fr: "Argent 950 calligraphique et rhodochrosite", en: "Calligraphic 950 silver and diamond rhodochrosite" },
        excerpt: {
            es: "Péndulo lírico cuyas volutas superiores recogen la luz para conducirla hacia un vértice carmesí.",
            fr: "Pendule lyrique dont les volutes supérieures captent la lumière vers un sommet carmin.",
            en: "Lyrical pendulum whose upper scrolls gather light toward a crimson mineral vertex."
        },
        storyPart1: {
            es: "Inspirada en los antiguos diapasones y péndulos de relojería que Jorge Pérez veía en el taller paterno. Dos arcos cóncavos descienden desde el pasacadena formando una silueta de campana abierta.",
            fr: "Inspirée des diapasons et pendules d'horlogerie de l'atelier paternel. Deux arcs concaves forment une silhouette de cloche ouverte.",
            en: "Inspired by vintage tuning forks and clock pendulums from his father's workshop. Two concave arcs descend into an open bell silhouette."
        },
        storyPart2: {
            es: "En su base oscila visualmente una gema en corte diamante de color intenso, dotando al colgante de una ligereza casi musical.",
            fr: "À sa base oscille visuellement une gemme taille diamant d'une couleur intense.",
            en: "At its base visually swings a diamond cut gem of deep color, giving the pendant a musical lightness."
        }
    },
    {
        id: "05", code: "PIEZA V", category: "gota",
        file: "05_horizonte_clean.png", fallback: "05_horizonte.jpg",
        priceCLP: 560000, weight: "19.5 g", dimensions: "49 mm × 31 mm", stoneCut: "Gota libre asimétrica de 28 mm",
        title: { es: "Horizonte Mineral", fr: "Horizon Minéral", en: "Mineral Horizon" },
        materials: { es: "Plata ley 950 fluida y rodocrosita piriforme", fr: "Argent 950 fluide et rhodochrosite piriforme", en: "Fluid 950 silver and pear rhodochrosite" },
        excerpt: {
            es: "Gema de paisaje interior abrazada por una cinta continua de plata que culmina en espiral.",
            fr: "Gemme au paysage intérieur enlacée par un ruban continu d'argent achevé en spirale.",
            en: "Inner landscape gem embraced by a continuous silver ribbon culminating in a spiral."
        },
        storyPart1: {
            es: "Las vetas de esta piedra dibujan el horizonte exacto de las dunas de Atacama al caer la tarde. Para no ocultar ni un milímetro de su geografía interna, el engaste fue resuelto mediante un lazo envolvente lateral.",
            fr: "Les veines de cette pierre dessinent l'horizon d'Atacama au crépuscule. Le sertissage enveloppe latéralement la pierre sans la masquer.",
            en: "The veins of this stone trace the Atacama horizon at dusk. To preserve its internal geography, the setting wraps laterally in a single ribbon."
        },
        storyPart2: {
            es: "En la parte superior, el metal se riza en una voluta noble que actúa como sello personal del orfebre.",
            fr: "Dans la partie supérieure, le métal s'enroule en une volute noble signant l'œuvre.",
            en: "At the top, the silver curls into a noble scroll acting as the goldsmith's personal seal."
        }
    },
    {
        id: "06", code: "PIEZA VI", category: "geometrica",
        file: "06_pendulo_juego_clean.png", fallback: "06_pendulo_juego.jpg",
        priceCLP: 620000, weight: "24.0 g", dimensions: "54 mm × 36 mm", stoneCut: "Tríptico romboidal en veta natural",
        title: { es: "Péndulo de Tiempo", fr: "Pendule du Temps", en: "Pendulum of Time" },
        materials: { es: "Plata ley 950 estructural y piedras veteadas", fr: "Argent 950 structurel et pierres veinées", en: "Structural 950 silver and veined stones" },
        excerpt: {
            es: "Diálogo monumental de estratos minerales rosados y ocres tallados a partir de una misma matriz.",
            fr: "Dialogue monumental de strates minérales rosées et ocres taillées dans la même matrice.",
            en: "Monumental dialogue of rose and ochre mineral strata cut from the very same matrix."
        },
        storyPart1: {
            es: "Cortadas de un mismo bloque geológico, estas gemas muestran la transición natural entre el rosa pálido, el crema mineral y la veta oscura. Sus cabezales de plata escalonados recuerdan la arquitectura precolombina andina.",
            fr: "Taillées dans un même bloc géologique, ces gemmes montrent la transition naturelle des strates andines.",
            en: "Cut from a single geological block, these gems reveal the natural transition between pale rose, mineral cream, and dark veining."
        },
        storyPart2: {
            es: "Es la obra de mayor presencia escultórica de la colección, ideal para coleccionistas que buscan una pieza de museo.",
            fr: "C'est l'œuvre à la plus forte présence sculpturale de la collection.",
            en: "It is the work of greatest sculptural presence in the collection, created for discerning collectors."
        }
    },
    {
        id: "07", code: "PIEZA VII", category: "gota",
        file: "07_voluta_clean.png", fallback: "07_voluta.jpg",
        priceCLP: 520000, weight: "17.3 g", dimensions: "51 mm × 29 mm", stoneCut: "Cabujón gota de 26 mm",
        title: { es: "Voluta Orgánica", fr: "Volute Organique", en: "Organic Volute" },
        materials: { es: "Plata ley 950 forjada en espiral y rodocrosita", fr: "Argent 950 forgé en spirale et rhodochrosite", en: "Spiral forged 950 silver and rhodochrosite" },
        excerpt: {
            es: "Inspirada en los helechos de los bosques del sur de Chile al desplegarse hacia la luz.",
            fr: "Inspirée des fougères des forêts du sud du Chili se déployant vers la lumière.",
            en: "Inspired by southern Chilean rainforest ferns unfurling toward the light."
        },
        storyPart1: {
            es: "Un solo vástago de plata ley 950 nace en la base de la piedra con un pequeño giro, recorre su perfil izquierdo y estalla en la cima en una doble voluta barroca contemporánea.",
            fr: "Une seule tige d'argent 950 naît à la base de la pierre, longe son profil et s'épanouit au sommet en double volute.",
            en: "A single stem of 950 silver rises from the base of the stone, traces its profile, and blossoms at the crown into a double scroll."
        },
        storyPart2: {
            es: "Su asimetría deliberada celebra la imperfección viva de la botánica austral.",
            fr: "Son asymétrie délibérée célèbre la beauté vivante de la botanique australe.",
            en: "Its deliberate asymmetry celebrates the living grace of southern botanical forms."
        }
    },
    {
        id: "08", code: "PIEZA VIII", category: "orbital",
        file: "08_orbita_clean.png", fallback: "08_orbita.jpg",
        priceCLP: 530000, weight: "17.9 g", dimensions: "47 mm × 32 mm", stoneCut: "Cabujón esférico de 19 mm",
        title: { es: "Órbita Interior", fr: "Orbite Intérieure", en: "Inner Orbit" },
        materials: { es: "Plata ley 950 en arco ojival y rodocrosita", fr: "Argent 950 en arche ogivale et rhodochrosite", en: "Ogival arch 950 silver and rhodochrosite" },
        excerpt: {
            es: "Estudio sobre el vacío y la gravedad donde un anillo superior de plata corona la esfera mineral.",
            fr: "Étude sur le vide et la gravité où un anneau supérieur d'argent couronne la sphère minérale.",
            en: "A study on void and gravity where an upper silver ring crowns the mineral sphere."
        },
        storyPart1: {
            es: "Construida como un observatorio astronómico de bolsillo. El aro superior abierto enmarca la piel de quien porta la joya, mientras el arco exterior sostiene el peso visual de la rodocrosita en su base.",
            fr: "Construite comme un observatoire astronomique intime. L'anneau supérieur encadre la peau tandis que l'arche soutient la pierre.",
            en: "Built like an intimate astronomical observatory. The open upper ring frames the wearer's skin while the outer arch cradles the stone."
        },
        storyPart2: {
            es: "Representa la conjunción entre el sol de medianoche y la luna llena sobre el océano Pacífico.",
            fr: "Elle représente la conjonction céleste au dessus de l'océan Pacifique.",
            en: "It represents the celestial conjunction above the quiet expanse of the Pacific Ocean."
        }
    },
    {
        id: "09", code: "PIEZA IX", category: "orbital",
        file: "09_nudo_clean.png", fallback: "09_nudo.jpg",
        priceCLP: 550000, weight: "19.1 g", dimensions: "45 mm × 45 mm", stoneCut: "Disco cabujón de 22 mm",
        title: { es: "Nudo Eterno", fr: "Nœud Éternel", en: "Eternal Knot" },
        materials: { es: "Plata ley 950 concéntrica y núcleo de rodocrosita", fr: "Argent 950 concentrique et cœur de rhodochrosite", en: "Concentric 950 silver and rhodochrosite core" },
        excerpt: {
            es: "Síntesis suprema de la colección: dos ciclos de plata sin principio ni fin custodiando el fuego mineral.",
            fr: "Synthèse suprême de la collection: deux cycles d'argent sans début ni fin gardant le feu minéral.",
            en: "Supreme synthesis of the collection: two endless silver cycles guarding the mineral fire."
        },
        storyPart1: {
            es: "Cierra el catálogo Hecha de Tiempo con la forma más pura del universo: el círculo desdoblado. Dos anillos de plata martillada y pulida a espejo se rozan en la cúspide para sostener un sol de rodocrosita.",
            fr: "Elle clôt le catalogue avec la forme la plus pure de l'univers: deux anneaux d'argent poli miroir soutenant un soleil de rhodochrosite.",
            en: "Closes the Made of Time catalog with the purest universal form: two mirror polished silver rings holding a sun of rhodochrosite."
        },
        storyPart2: {
            es: "Simboliza el tiempo cíclico que no se agota y la alianza eterna entre la mano del hombre y el corazón de la tierra.",
            fr: "Elle symbolise le temps cyclique et l'alliance éternelle entre la main de l'homme et la terre.",
            en: "Symbolizes cyclical time and the eternal covenant between the artisan's hand and the heart of the earth."
        }
    }
];
