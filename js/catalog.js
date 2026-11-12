const WHATSAPP_NUMBER = "56956258569";
const EXCHANGE = { USD: 0.00105, EUR: 0.00097 };

// Configuración opcional de Supabase (si se deja vacía usa los precios locales instantáneos)
const SUPABASE_CONFIG = {
    url: "", // Ej: "https://xyzcompany.supabase.co"
    anonKey: ""
};

const JEWELS = [
    {
        id: "01", code: "PIEZA I", file: "01_rosa_de_los_vientos_clean.png", fallback: "01_rosa_de_los_vientos.jpg", priceCLP: 540000,
        title: { es: "Rosa de los Vientos", fr: "Rose des Vents", en: "Compass Rose" },
        materials: { es: "Plata ley 950 forjada y rodocrosita circular", fr: "Argent 950 forgé et rhodochrosite circulaire", en: "Forged 950 silver and circular rhodochrosite" },
        desc: {
            es: "Inspirada en las antiguas cartas de navegación del Pacífico Sur. Cuatro lazos cardinales de hilo de plata forjado custodian el núcleo mineral rosado en equilibrio perfecto, evocando la estrella polar que guía el retorno al origen.",
            fr: "Inspirée des anciennes cartes marines du Pacifique Sud. Quatre boucles cardinales en fil d'argent forgé veillent sur le cœur minéral rosé dans un équilibre parfait.",
            en: "Inspired by vintage South Pacific navigation charts. Four cardinal loops of forged silver wire guard the rose mineral core in balance, evoking a guiding polar star."
        }
    },
    {
        id: "02", code: "PIEZA II", file: "02_gota_clean.png", fallback: "02_gota.jpg", priceCLP: 490000,
        title: { es: "Gota Austral", fr: "Goutte Australe", en: "Southern Drop" },
        materials: { es: "Plata ley 950 en doble órbita y cabujón oval", fr: "Argent 950 double orbite et cabochon ovale", en: "Double orbit 950 silver and oval cabochon" },
        desc: {
            es: "Captura el instante exacto en que el deshielo de la alta cordillera se desprende de la roca madre. Su doble aro elíptico protege la caída perpetua de una gema de vetas intensas.",
            fr: "Capture l'instant précis où la fonte des hautes cimes se détache de la roche mère. Son double anneau elliptique protège la gemme.",
            en: "Captures the exact moment high mountain snowmelt detaches from bedrock. Its double elliptical ring protects the perpetual drop of an intensely veined gem."
        }
    },
    {
        id: "03", code: "PIEZA III", file: "03_rombo_clean.png", fallback: "03_rombo.jpg", priceCLP: 510000,
        title: { es: "Rombo Arquitectónico", fr: "Losange Architectural", en: "Architectural Rhombus" },
        materials: { es: "Plata ley 950 geométrica y cilindro mineral", fr: "Argent 950 géométrique et cylindre minéral", en: "Geometric 950 silver and mineral cylinder" },
        desc: {
            es: "Un homenaje al constructivismo escultórico. La tensión entre las rectas puras del marco diamantino y la columna pétrea diagonal simboliza el puente entre la geometría humana y la tierra indómita.",
            fr: "Un hommage au constructivisme sculptural. La tension entre les lignes pures du cadre en losange et la colonne minérale symbolise l'harmonie pure.",
            en: "A tribute to sculptural constructivism. The tension between the pure lines of the diamond frame and the diagonal stone column bridges geometry and nature."
        }
    },
    {
        id: "04", code: "PIEZA IV", file: "04_campana_clean.png", fallback: "04_campana.jpg", priceCLP: 470000,
        title: { es: "Campana de Silencio", fr: "Cloche de Silence", en: "Bell of Silence" },
        materials: { es: "Plata ley 950 caligráfica y rodocrosita romboidal", fr: "Argent 950 calligraphique et rhodochrosite", en: "Calligraphic 950 silver and diamond rhodochrosite" },
        desc: {
            es: "Concebida como un péndulo invertido cuya resonancia es puramente visual. Sus volutas simétricas superiores recogen la luz de la clavícula mientras el vértice rosado marca el compás del paso.",
            fr: "Conçue comme un pendule inversé dont la résonance est purement visuelle. Ses volutes symétriques captent la lumière sur la clavicule.",
            en: "Conceived as an inverted pendulum whose resonance is purely visual. Its symmetrical upper scrolls gather light while the rose vertex marks time."
        }
    },
    {
        id: "05", code: "PIEZA V", file: "05_horizonte_clean.png", fallback: "05_horizonte.jpg", priceCLP: 560000,
        title: { es: "Horizonte Mineral", fr: "Horizon Minéral", en: "Mineral Horizon" },
        materials: { es: "Plata ley 950 fluida y corte pera asimétrico", fr: "Argent 950 fluide et taille poire asymétrique", en: "Fluid 950 silver and asymmetric pear cut" },
        desc: {
            es: "Reproduce el perfil sinuoso de los acantilados costeros al atardecer, cuando el sol tiñe de rosa el cuarzo y la roca. Una voluta superior sella la pieza como una rúbrica de autor en plata.",
            fr: "Reproduit le profil sinueux des falaises côtières au crépuscule. Une volute supérieure scelle la pièce comme une signature d'orfèvre.",
            en: "Echoes the winding profile of coastal cliffs at dusk when sunlight tints the rock rose. An upper scroll seals the piece like a silver signature."
        }
    },
    {
        id: "06", code: "PIEZA VI", file: "06_pendulo_juego_clean.png", fallback: "06_pendulo_juego.jpg", priceCLP: 620000,
        title: { es: "Péndulo de Tiempo", fr: "Pendule du Temps", en: "Pendulum of Time" },
        materials: { es: "Plata ley 950 arquitectónica y piedras veteadas", fr: "Argent 950 architectural et pierres veinées", en: "Architectural 950 silver and veined stones" },
        desc: {
            es: "Obra maestra de equilibrio múltiple. Sus vetas naturales en tonos beige y rosa profundo narran estratos geológicos de eras distintas que dialogan en una misma simetría.",
            fr: "Chef d'œuvre d'équilibre multiple. Ses veines naturelles beiges et roses racontent des strates géologiques millénaires.",
            en: "Masterwork of multiple balance. Its natural beige and deep rose veins narrate geological strata from distinct eras conversing in symmetry."
        }
    },
    {
        id: "07", code: "PIEZA VII", file: "07_voluta_clean.png", fallback: "07_voluta.jpg", priceCLP: 520000,
        title: { es: "Voluta Orgánica", fr: "Volute Organique", en: "Organic Volute" },
        materials: { es: "Plata ley 950 en espiral y cabujón piriforme", fr: "Argent 950 en spirale et cabochon piriforme", en: "Spiral 950 silver and pear cabochon" },
        desc: {
            es: "Inspirada en los brotes de los helechos australes cuando se despliegan en el bosque húmedo. El hilo de plata envuelve la piedra sin oprimirla, dejándola respirar por ambos extremos.",
            fr: "Inspirée des jeunes fougères australes qui se déploient dans la forêt humide. Le fil d'argent enlace la pierre sans la contraindre.",
            en: "Inspired by southern fern fronds unfurling in the rainforest. Silver wire embraces the stone without constraining it, letting it breathe."
        }
    },
    {
        id: "08", code: "PIEZA VIII", file: "08_orbita_clean.png", fallback: "08_orbita.jpg", priceCLP: 530000,
        title: { es: "Órbita Interior", fr: "Orbite Intérieure", en: "Inner Orbit" },
        materials: { es: "Plata ley 950 en arco y esfera mineral", fr: "Argent 950 en arche et sphère minérale", en: "Arched 950 silver and mineral sphere" },
        desc: {
            es: "Un estudio escultórico sobre el vacío y la gravedad. El anillo superior deja asomar la piel de quien la porta, mientras toda la densidad descansa serenamente en la esfera mineral inferior.",
            fr: "Une étude sculpturale sur le vide et la gravité. L'anneau supérieur laisse apparaître la peau tandis que la sphère minérale repose à la base.",
            en: "A sculptural study on void and gravity. The upper ring frames the wearer's skin while visual density rests serenely in the lower mineral sphere."
        }
    },
    {
        id: "09", code: "PIEZA IX", file: "09_nudo_clean.png", fallback: "09_nudo.jpg", priceCLP: 550000,
        title: { es: "Nudo Eterno", fr: "Nœud Éternel", en: "Eternal Knot" },
        materials: { es: "Plata ley 950 concéntrica y núcleo de rodocrosita", fr: "Argent 950 concentrique et cœur de rhodochrosite", en: "Concentric 950 silver and rhodochrosite core" },
        desc: {
            es: "La síntesis máxima de la colección Hecha de Tiempo. Dos ciclos concéntricos de plata sin principio ni fin que resguardan en levitación el fuego rosado de la tierra.",
            fr: "La synthèse ultime de la collection Faite de Temps. Deux cycles concentriques d'argent sans début ni fin protégeant le feu rosé de la terre.",
            en: "The ultimate synthesis of the Made of Time collection. Two concentric silver cycles without beginning or end guarding the rose fire of the earth."
        }
    }
];

function formatCurrency(clp) {
    return {
        clp: new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(clp) + " CLP",
        usd: "USD $" + Math.round(clp * EXCHANGE.USD),
        eur: "EUR €" + Math.round(clp * EXCHANGE.EUR)
    };
}
