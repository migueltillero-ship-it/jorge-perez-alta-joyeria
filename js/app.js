/* =============================================================================
   JORGE PÉREZ · ALTA JOYERÍA · LÓGICA DEL SITIO
   Sitio de una sola página con rutas por #hash:
   #inicio · #coleccion · #pieza-01 … #pieza-09 · #probador · #coleccionistas · #orfebre
   ============================================================================= */
(function () {
"use strict";

const UI = {
    es: {
        sub: "Alta joyería · Valparaíso, Chile",
        nav: { inicio: "Colección", coleccion: "Catálogo", probador: "Probador", coleccionistas: "Adquisición", orfebre: "El orfebre" },
        temaClaro: "Galería", temaOscuro: "Nocturno", cofre: "Cofre",
        heroEyebrow: "Colección de alta joyería · Nueve obras únicas",
        heroTitulo: "Hecha de Tiempo",
        heroLead: "Plata y rodocrosita. La rodocrosita crece capa sobre capa durante miles de años: cada banda rosa y blanca es tiempo hecho piedra, y por eso ninguna se repite. Pasa el cursor sobre cada obra para verla en detalle.",
        verCatalogo: "Ver el catálogo", probar: "Probador virtual", privilegios: "Privilegios por conjunto",
        salas: [
            ["I · Catálogo", "Las nueve obras", "Fichas completas con fotografía real de cada pieza, historia y valores."],
            ["II · Probador", "Mídete las joyas", "Prueba cada colgante sobre tu foto o frente a la cámara de tu dispositivo."],
            ["III · Coleccionistas", "Conjuntos", "Elige dos o más obras y la bonificación se aplica automáticamente."],
            ["IV · El orfebre", "Jorge Pérez", "La historia del taller y el método detrás de cada pieza."]
        ],
        catTitulo: "Catálogo", catLead: "Cada obra existe una sola vez. En cada ficha se muestra también la fotografía real de la pieza.",
        filtros: { todas: "Todas", orbital: "Circulares", organica: "Orgánicas", geometrica: "Geométricas" },
        verObra: "Ver la obra", anadir: "Añadir al cofre", enCofre: "En tu cofre",
        volver: "Volver al catálogo", fotoReal: "Fotografía real", ambiente: "Imagen de campaña",
        sinAmbiente: "Imagen de campaña en preparación",
        cap1: "I. Inspiración y arquitectura", cap2: "II. Carácter de la gema",
        ficha: { orfebre: "Orfebre", metal: "Metal", gema: "Gema", forma: "Forma de la piedra", medidas: "Medidas", peso: "Peso", edicion: "Edición", juego: "Composición" },
        unica: "Pieza única, 1 de 1",
        consultarMedidas: "Las medidas exactas se informan al consultar por WhatsApp.",
        probarEsta: "Probar esta obra", whatsapp: "Consultar por WhatsApp",
        msgPieza: (c, t, p) => `Hola, me interesa la obra ${c} (${t}) de la colección Hecha de Tiempo de Jorge Pérez (${p}). ¿Me pueden dar más información?`,
        cofreTitulo: "Tu selección", cofreVacio: "Tu cofre está vacío. Elige una o más obras para preparar tu reserva.",
        bonoActivo: (n) => `Bonificación de coleccionista aplicada: ${n}%`,
        bonoPista: "Bonificación: 10% al elegir 2 obras · 18% desde 3 obras",
        coordinar: "Coordinar la adquisición por WhatsApp", quitar: "Quitar",
        msgCofre: (lista, total, bono) => `Hola, me gustaría adquirir estas obras de la colección Hecha de Tiempo de Jorge Pérez: ${lista}. Valor total${bono ? ` con ${bono}% de bonificación` : ""}: ${total}.`,
        tryTitulo: "Probador virtual", tryLead: "Usa la cámara o sube una foto tuya de frente. Arrastra la joya hasta tu cuello y ajusta su tamaño.",
        camara: "Activar cámara", detener: "Detener cámara", subir: "Subir una foto", tamano: "Tamaño",
        camaraError: "No se pudo abrir la cámara en este navegador. Puedes subir una foto tuya en su lugar.",
        camaraNota: "La imagen no sale de tu dispositivo.",
        verHistoria: "Ver la historia",
        coleccTitulo: "Adquisición y conjuntos", coleccLead: "Selecciona las obras que te interesan. Con dos obras se aplica un 10% de bonificación y con tres o más, un 18%.",
        seleccionar: "Seleccionar", seleccionada: "Seleccionada",
        sumaIndividual: "Suma individual", elegirMas: "Elige dos o más obras para activar la bonificación",
        reservar: "Reservar por WhatsApp", piezasSel: (n) => `${n} ${n === 1 ? "obra seleccionada" : "obras seleccionadas"}`,
        orfEyebrow: "El orfebre", cronologia: "Trayectoria", metodo: "El método",
        tasasNota: (f) => `Valores en dólares y euros referenciales (${f}). El precio oficial es en pesos chilenos.`,
        pie: "Imágenes de campaña creadas digitalmente a partir de fotografías reales de cada pieza. La fotografía real se muestra en cada ficha.",
        precio: "Valor", obra: "Obra",
        entrar: "Entrar con sonido", saltar: "Saltar", sonidoOn: "Activar sonido", sonidoOff: "Silenciar", introNota: "Presentación de 15 segundos con narración.",
        msgGeneral: "Hola, vengo de la página de Jorge Pérez y me gustaría recibir información sobre la colección Hecha de Tiempo."
    },
    fr: {
        sub: "Haute joaillerie · Valparaíso, Chili",
        nav: { inicio: "Collection", coleccion: "Catalogue", probador: "Essayage", coleccionistas: "Acquisition", orfebre: "L'orfèvre" },
        temaClaro: "Galerie", temaOscuro: "Nocturne", cofre: "Écrin",
        heroEyebrow: "Collection de haute joaillerie · Neuf œuvres uniques",
        heroTitulo: "Hecha de Tiempo",
        heroLead: "Argent et rhodochrosite. La rhodochrosite se forme couche après couche pendant des milliers d'années : chaque bande rose et blanche est du temps devenu pierre, et aucune ne se répète. Survolez chaque œuvre pour la découvrir en détail.",
        verCatalogo: "Voir le catalogue", probar: "Essayage virtuel", privilegios: "Privilèges par ensemble",
        salas: [
            ["I · Catalogue", "Les neuf œuvres", "Fiches complètes avec la photographie réelle de chaque pièce, son histoire et ses prix."],
            ["II · Essayage", "Essayez les bijoux", "Essayez chaque pendentif sur votre photo ou devant la caméra de votre appareil."],
            ["III · Collectionneurs", "Ensembles", "Choisissez deux œuvres ou plus et le privilège s'applique automatiquement."],
            ["IV · L'orfèvre", "Jorge Pérez", "L'histoire de l'atelier et la méthode derrière chaque pièce."]
        ],
        catTitulo: "Catalogue", catLead: "Chaque œuvre n'existe qu'une fois. Chaque fiche montre aussi la photographie réelle de la pièce.",
        filtros: { todas: "Toutes", orbital: "Circulaires", organica: "Organiques", geometrica: "Géométriques" },
        verObra: "Voir l'œuvre", anadir: "Ajouter à l'écrin", enCofre: "Dans votre écrin",
        volver: "Retour au catalogue", fotoReal: "Photographie réelle", ambiente: "Image de campagne",
        sinAmbiente: "Image de campagne en préparation",
        cap1: "I. Inspiration et architecture", cap2: "II. Caractère de la gemme",
        ficha: { orfebre: "Orfèvre", metal: "Métal", gema: "Gemme", forma: "Forme de la pierre", medidas: "Dimensions", peso: "Poids", edicion: "Édition", juego: "Composition" },
        unica: "Pièce unique, 1 sur 1",
        consultarMedidas: "Les dimensions exactes sont communiquées sur WhatsApp.",
        probarEsta: "Essayer cette œuvre", whatsapp: "Demander sur WhatsApp",
        msgPieza: (c, t, p) => `Bonjour, je suis intéressé(e) par l'œuvre ${c} (${t}) de la collection Hecha de Tiempo de Jorge Pérez (${p}). Pourriez vous m'en dire plus ?`,
        cofreTitulo: "Votre sélection", cofreVacio: "Votre écrin est vide. Choisissez une ou plusieurs œuvres pour préparer votre réservation.",
        bonoActivo: (n) => `Privilège collectionneur appliqué : ${n} %`,
        bonoPista: "Privilège : 10 % pour 2 œuvres · 18 % dès 3 œuvres",
        coordinar: "Finaliser l'acquisition sur WhatsApp", quitar: "Retirer",
        msgCofre: (lista, total, bono) => `Bonjour, je souhaite acquérir ces œuvres de la collection Hecha de Tiempo de Jorge Pérez : ${lista}. Montant total${bono ? ` avec ${bono} % de privilège` : ""} : ${total}.`,
        tryTitulo: "Essayage virtuel", tryLead: "Utilisez la caméra ou importez une photo de face. Faites glisser le bijou jusqu'à votre cou et ajustez sa taille.",
        camara: "Activer la caméra", detener: "Arrêter la caméra", subir: "Importer une photo", tamano: "Taille",
        camaraError: "Impossible d'ouvrir la caméra dans ce navigateur. Vous pouvez importer une photo à la place.",
        camaraNota: "L'image ne quitte pas votre appareil.",
        verHistoria: "Voir l'histoire",
        coleccTitulo: "Acquisition et ensembles", coleccLead: "Sélectionnez les œuvres qui vous intéressent. Pour deux œuvres, un privilège de 10 % s'applique ; à partir de trois, 18 %.",
        seleccionar: "Sélectionner", seleccionada: "Sélectionnée",
        sumaIndividual: "Somme individuelle", elegirMas: "Choisissez deux œuvres ou plus pour activer le privilège",
        reservar: "Réserver sur WhatsApp", piezasSel: (n) => `${n} ${n === 1 ? "œuvre sélectionnée" : "œuvres sélectionnées"}`,
        orfEyebrow: "L'orfèvre", cronologia: "Parcours", metodo: "La méthode",
        tasasNota: (f) => `Montants en dollars et en euros donnés à titre indicatif (${f}). Le prix officiel est en pesos chiliens.`,
        pie: "Images de campagne créées numériquement à partir de photographies réelles de chaque pièce. La photographie réelle figure sur chaque fiche.",
        precio: "Prix", obra: "Œuvre",
        entrar: "Entrer avec le son", saltar: "Passer", sonidoOn: "Activer le son", sonidoOff: "Couper le son", introNota: "Présentation de 15 secondes, avec narration.",
        msgGeneral: "Bonjour, je viens du site de Jorge Pérez et je souhaiterais recevoir des informations sur la collection Hecha de Tiempo."
    },
    en: {
        sub: "High jewelry · Valparaíso, Chile",
        nav: { inicio: "Collection", coleccion: "Catalog", probador: "Try on", coleccionistas: "Acquisition", orfebre: "The goldsmith" },
        temaClaro: "Gallery", temaOscuro: "Night", cofre: "Selection",
        heroEyebrow: "High jewelry collection · Nine unique works",
        heroTitulo: "Hecha de Tiempo",
        heroLead: "Silver and rhodochrosite. Rhodochrosite grows layer upon layer over thousands of years: every pink and white band is time turned into stone, and no two are alike. Hover over each work to see it in detail.",
        verCatalogo: "View the catalog", probar: "Virtual try on", privilegios: "Set privileges",
        salas: [
            ["I · Catalog", "The nine works", "Full sheets with a real photograph of each piece, its story and its price."],
            ["II · Try on", "Try the jewels", "Try each pendant on your photo or in front of your device's camera."],
            ["III · Collectors", "Sets", "Choose two or more works and the privilege is applied automatically."],
            ["IV · The goldsmith", "Jorge Pérez", "The story of the workshop and the method behind each piece."]
        ],
        catTitulo: "Catalog", catLead: "Each work exists only once. Every sheet also shows the real photograph of the piece.",
        filtros: { todas: "All", orbital: "Circular", organica: "Organic", geometrica: "Geometric" },
        verObra: "View the work", anadir: "Add to selection", enCofre: "In your selection",
        volver: "Back to the catalog", fotoReal: "Real photograph", ambiente: "Campaign image",
        sinAmbiente: "Campaign image in preparation",
        cap1: "I. Inspiration and architecture", cap2: "II. Character of the gem",
        ficha: { orfebre: "Goldsmith", metal: "Metal", gema: "Gem", forma: "Stone shape", medidas: "Dimensions", peso: "Weight", edicion: "Edition", juego: "Composition" },
        unica: "Unique piece, 1 of 1",
        consultarMedidas: "Exact dimensions are provided on WhatsApp.",
        probarEsta: "Try this work", whatsapp: "Ask on WhatsApp",
        msgPieza: (c, t, p) => `Hello, I am interested in work ${c} (${t}) from Jorge Pérez's Hecha de Tiempo collection (${p}). Could you tell me more?`,
        cofreTitulo: "Your selection", cofreVacio: "Your selection is empty. Choose one or more works to prepare your reservation.",
        bonoActivo: (n) => `Collector privilege applied: ${n}%`,
        bonoPista: "Privilege: 10% for 2 works · 18% from 3 works",
        coordinar: "Arrange the acquisition on WhatsApp", quitar: "Remove",
        msgCofre: (lista, total, bono) => `Hello, I would like to acquire these works from Jorge Pérez's Hecha de Tiempo collection: ${lista}. Total${bono ? ` with ${bono}% privilege` : ""}: ${total}.`,
        tryTitulo: "Virtual try on", tryLead: "Use the camera or upload a front facing photo of yourself. Drag the jewel to your neck and adjust its size.",
        camara: "Turn on camera", detener: "Stop camera", subir: "Upload a photo", tamano: "Size",
        camaraError: "The camera could not be opened in this browser. You can upload a photo instead.",
        camaraNota: "The image never leaves your device.",
        verHistoria: "View the story",
        coleccTitulo: "Acquisition and sets", coleccLead: "Select the works you are interested in. Two works receive a 10% privilege; three or more, 18%.",
        seleccionar: "Select", seleccionada: "Selected",
        sumaIndividual: "Individual sum", elegirMas: "Choose two or more works to activate the privilege",
        reservar: "Reserve on WhatsApp", piezasSel: (n) => `${n} ${n === 1 ? "work selected" : "works selected"}`,
        orfEyebrow: "The goldsmith", cronologia: "Career", metodo: "The method",
        tasasNota: (f) => `Dollar and euro amounts are for reference only (${f}). The official price is in Chilean pesos.`,
        pie: "Campaign images created digitally from real photographs of each piece. The real photograph is shown on every sheet.",
        precio: "Price", obra: "Work",
        entrar: "Enter with sound", saltar: "Skip", sonidoOn: "Sound on", sonidoOff: "Mute", introNota: "A 15 second presentation with narration.",
        msgGeneral: "Hello, I come from Jorge Pérez's website and would like information about the Hecha de Tiempo collection."
    }
};

/* ------------------------------------------------------------- estado seguro */
const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
};
const S = {
    lang: store.get("jp2_lang", "es"),
    cur: store.get("jp2_cur", "CLP"),
    theme: store.get("jp2_theme", "light"),
    cart: store.get("jp2_cart", []).filter(id => JEWELS.some(j => j.id === id))
};
const T = () => UI[S.lang] || UI.es;
const L = (obj) => (obj && (obj[S.lang] || obj.es)) || "";
const $ = (sel, root) => (root || document).querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const byId = (id) => JEWELS.find(j => j.id === id);
const mainImg = (j) => j.img.ambiente || j.img.real;

/* ------------------------------------------------------------- dinero */
function money(clp) {
    const f = (v, c, loc) => new Intl.NumberFormat(loc, { style: "currency", currency: c, maximumFractionDigits: 0 }).format(v);
    const clpS = f(clp, "CLP", "es-CL") + " CLP";
    const usdS = "≈ " + f(Math.round(clp * CONFIG.tasas.USD), "USD", "en-US") + " USD";
    const eurS = "≈ " + f(Math.round(clp * CONFIG.tasas.EUR), "EUR", "fr-FR");
    const primary = S.cur === "USD" ? usdS : S.cur === "EUR" ? eurS : clpS;
    return { primary, clp: clpS, usd: usdS, eur: eurS, otros: [clpS, usdS, eurS].filter(x => x !== primary).join(" · ") };
}
function bono(n) {
    const b = CONFIG.bonificaciones.find(x => n >= x.desde);
    return b ? b.porcentaje : 0;
}
const waLink = (msg) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

/* ------------------------------------------------------------- cabecera, tema, idioma */
function applyTheme() {
    document.documentElement.setAttribute("data-theme", S.theme);
}
function renderHeader(route) {
    const t = T();
    const act = (r) => (route === r || (r === "coleccion" && route === "pieza")) ? "active" : "";
    $("#nav").innerHTML = `
        <a href="#inicio" class="brand"><span class="brand-name">${esc(CONFIG.marca)}</span><span class="brand-sub">${esc(t.sub)}</span></a>
        <button class="menu-btn" id="menu-btn" aria-label="Menú" aria-expanded="false">☰</button>
        <nav class="nav-links" id="nav-links">
            ${Object.keys(t.nav).map(k => `<a href="#${k}" class="${act(k)}">${esc(t.nav[k])}</a>`).join("")}
        </nav>
        <div class="controls">
            <div class="lang-switch" role="group" aria-label="Idioma">
                ${["es", "fr", "en"].map(l => `<button data-lang="${l}" class="${S.lang === l ? "active" : ""}">${l.toUpperCase()}</button>`).join("")}
            </div>
            <select class="pill" id="cur-select" aria-label="Moneda">
                ${["CLP", "USD", "EUR"].map(c => `<option value="${c}" ${S.cur === c ? "selected" : ""}>${c}</option>`).join("")}
            </select>
            <button class="pill" id="theme-btn">${S.theme === "light" ? t.temaOscuro : t.temaClaro}</button>
            <button class="pill pill-accent" id="cart-btn">${esc(t.cofre)} (<span id="cart-count">${S.cart.length}</span>)</button>
        </div>`;
    document.documentElement.lang = S.lang;
    $("#nav").querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => { S.lang = b.dataset.lang; store.set("jp2_lang", S.lang); render(); }));
    $("#cur-select").addEventListener("change", (e) => { S.cur = e.target.value; store.set("jp2_cur", S.cur); render(); });
    $("#theme-btn").addEventListener("click", () => { S.theme = S.theme === "light" ? "dark" : "light"; store.set("jp2_theme", S.theme); applyTheme(); renderHeader(route); });
    $("#cart-btn").addEventListener("click", () => toggleCart(true));
    $("#menu-btn").addEventListener("click", () => {
        const open = $("#nav-links").classList.toggle("open");
        $("#menu-btn").setAttribute("aria-expanded", String(open));
    });
}

/* ------------------------------------------------------------- cofre */
function addToCart(id) {
    if (!S.cart.includes(id)) { S.cart.push(id); store.set("jp2_cart", S.cart); }
    renderCart(); toggleCart(true); refreshCartButtons();
}
function removeFromCart(id) {
    S.cart = S.cart.filter(x => x !== id); store.set("jp2_cart", S.cart);
    renderCart(); refreshCartButtons();
}
function toggleCart(open) {
    const d = $("#cart");
    d.classList.toggle("open", open);
    $("#veil").classList.toggle("on", open);
    d.setAttribute("aria-hidden", String(!open));
}
function cartSummary() {
    let sub = 0; const names = [];
    S.cart.forEach(id => { const j = byId(id); if (j) { sub += j.precioCLP; names.push(`${j.code} ${L(j.titulo)}`); } });
    const b = bono(S.cart.length);
    const total = Math.round(sub * (1 - b));
    return { sub, total, b, names };
}
function renderCart() {
    const t = T(); const s = cartSummary();
    const cnt = $("#cart-count"); if (cnt) cnt.textContent = S.cart.length;
    const items = S.cart.map(id => {
        const j = byId(id); if (!j) return "";
        return `<div class="cart-item">
            <img src="${mainImg(j)}" alt="">
            <div class="ci-text"><span class="eyebrow">${j.code}</span><div class="ci-title">${esc(L(j.titulo))}</div><div class="ci-price">${money(j.precioCLP).primary}</div></div>
            <button class="pill" data-remove="${j.id}" aria-label="${esc(t.quitar)}">✕</button></div>`;
    }).join("");
    const tot = money(s.total);
    $("#cart").innerHTML = `
        <div class="cart-head"><h3>${esc(t.cofreTitulo)}</h3><button class="pill" id="cart-close" aria-label="Cerrar">✕</button></div>
        <div class="cart-list">${S.cart.length ? items : `<p class="muted">${esc(t.cofreVacio)}</p>`}</div>
        <div class="cart-foot">
            <div class="eyebrow">${s.b ? esc(t.bonoActivo(Math.round(s.b * 100))) : esc(t.bonoPista)}</div>
            <div class="cart-total">${tot.primary}</div>
            <div class="muted small">${tot.otros}</div>
            ${S.cart.length ? `<a class="btn btn-solid full" target="_blank" rel="noopener" href="${waLink(t.msgCofre(s.names.join(", "), tot.clp, s.b ? Math.round(s.b * 100) : 0))}">${esc(t.coordinar)}</a>` : ""}
            <p class="muted small" style="margin-top:.8rem">${esc(CONFIG.whatsappVisible)}</p>
        </div>`;
    $("#cart-close").addEventListener("click", () => toggleCart(false));
    $("#cart").querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", () => removeFromCart(b.dataset.remove)));
}
function refreshCartButtons() {
    const t = T();
    document.querySelectorAll("[data-add]").forEach(b => {
        const inC = S.cart.includes(b.dataset.add);
        b.textContent = inC ? "✓ " + t.enCofre : t.anadir;
        b.classList.toggle("is-in", inC);
    });
}

/* ------------------------------------------------------------- vistas */
function card(j) {
    const t = T(); const p = money(j.precioCLP);
    return `<article class="jewel-card">
        <a href="#pieza-${j.id}" class="jc-img ${j.img.ambiente ? "" : "is-real"}"><img src="${mainImg(j)}" alt="${esc(L(j.titulo))}" loading="lazy"></a>
        <div class="jc-body">
            <span class="eyebrow">${esc(t.obra)} ${j.code}</span>
            <h3 class="jc-title">${esc(L(j.titulo))}</h3>
            <p class="jc-text">${esc(L(j.resumen))}</p>
            <div class="jc-price">${p.primary}</div>
            <div class="muted small">${p.otros}</div>
            <div class="jc-actions">
                <a href="#pieza-${j.id}" class="btn">${esc(t.verObra)}</a>
                <button class="btn btn-solid" data-add="${j.id}">${esc(t.anadir)}</button>
            </div>
        </div></article>`;
}
function bindAdd(root) {
    (root || document).querySelectorAll("[data-add]").forEach(b => b.addEventListener("click", () => addToCart(b.dataset.add)));
    refreshCartButtons();
}

/* ------------------------------------------------------------- videos */
const VID = (typeof VIDEOS !== "undefined") ? VIDEOS : {};
const reduceMotion = () => window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
function film(key, inner, cls) {
    const v = VID[key];
    if (!v) return `<header class="page-head">${inner}</header>`;
    const t = T();
    return `<header class="film ${cls || ""}">
        <div class="film-bg" style="background-image:url('${v.poster}')" aria-hidden="true"></div>
        <div class="film-text">${inner}</div>
        <div class="film-frame">
            <video class="film-v" src="${v.src}" poster="${v.poster}" muted loop playsinline preload="metadata" aria-hidden="true"></video>
            ${v.sonido ? `<button class="film-snd" type="button" aria-pressed="false">${esc(t.sonidoOn)}</button>` : ""}
        </div>
    </header>`;
}
let filmObs = null;
function bindFilms() {
    if (filmObs) { filmObs.disconnect(); filmObs = null; }
    const vids = [...document.querySelectorAll(".film-v")];
    const t = T();
    const blocked = () => document.body.classList.contains("intro-on");
    vids.forEach(v => {
        if (reduceMotion()) {
            v.addEventListener("click", () => v.paused ? v.play().catch(() => {}) : v.pause());
            v.style.cursor = "pointer";
        }
    });
    if (!reduceMotion() && "IntersectionObserver" in window) {
        filmObs = new IntersectionObserver(entries => entries.forEach(e => {
            if (e.isIntersecting && !blocked()) e.target.play().catch(() => {});
            else e.target.pause();
        }), { threshold: 0.25 });
        vids.forEach(v => filmObs.observe(v));
    } else if (!reduceMotion() && !blocked()) {
        vids.forEach(v => v.play().catch(() => {}));
    }
    document.querySelectorAll(".film-snd").forEach(b => b.addEventListener("click", () => {
        const v = b.parentElement.querySelector("video");
        const on = v.muted;
        document.querySelectorAll(".film-v").forEach(o => { o.muted = true; });
        document.querySelectorAll(".film-snd").forEach(o => { o.textContent = t.sonidoOn; o.setAttribute("aria-pressed", "false"); });
        if (on) {
            v.muted = false; v.currentTime = 0; v.play().catch(() => {});
            b.textContent = t.sonidoOff; b.setAttribute("aria-pressed", "true");
        }
    }));
}

/* Presentación inicial: joya.mp4 completo, con su narración.
   Se muestra al entrar por la portada, una vez por sesión. La primera vez debe verse
   entera (sin "Saltar"); en visitas posteriores aparece el botón. Si el video no carga,
   la presentación se cierra sola para no bloquear el sitio. */
function intro() {
    const v = VID.intro;
    if (!v || parse().route !== "inicio") return;
    try { if (sessionStorage.getItem("jp2_intro_ses")) return; } catch (e) { /* sin almacenamiento */ }
    const t = T();
    const visto = store.get("jp2_intro_visto", false) || !VID.introObligatoria;
    const el = $("#intro");
    el.innerHTML = `
        <div class="intro-bg" style="background-image:url('${v.poster}')" aria-hidden="true"></div>
        <div class="intro-stage">
            <video id="intro-v" src="${v.src}" poster="${v.poster}" playsinline preload="auto"></video>
            <div class="intro-start" id="intro-start">
                <span class="eyebrow">${esc(CONFIG.marca)}</span>
                <h2 class="intro-title">Hecha de Tiempo</h2>
                <button class="btn btn-solid" id="intro-go" type="button">${esc(t.entrar)}</button>
                <p class="small">${esc(t.introNota)}</p>
            </div>
            <div class="intro-bar" aria-hidden="true"><span id="intro-prog"></span></div>
        </div>
        <button class="intro-skip" id="intro-skip" type="button" ${visto ? "" : "hidden"}>${esc(t.saltar)}</button>`;
    el.hidden = false;
    document.body.classList.add("intro-on");
    const vid = $("#intro-v");
    let done = false, safety = null;
    const close = () => {
        if (done) return; done = true; clearTimeout(safety);
        store.set("jp2_intro_visto", true);
        try { sessionStorage.setItem("jp2_intro_ses", "1"); } catch (e) { /* sin almacenamiento */ }
        vid.pause();
        el.classList.add("out");
        document.body.classList.remove("intro-on");
        setTimeout(() => { el.hidden = true; el.innerHTML = ""; el.classList.remove("out"); }, 800);
        bindFilms();
    };
    $("#intro-go").addEventListener("click", () => {
        vid.muted = false;
        const go = () => { $("#intro-start").classList.add("gone"); safety = setTimeout(close, ((vid.duration || 15) + 10) * 1000); };
        vid.play().then(go).catch(() => { vid.muted = true; vid.play().then(go).catch(close); });
    });
    vid.addEventListener("ended", close);
    vid.addEventListener("error", close);
    vid.addEventListener("timeupdate", () => { if (vid.duration) $("#intro-prog").style.width = (vid.currentTime / vid.duration * 100) + "%"; });
    $("#intro-skip").addEventListener("click", close);
}

function viewInicio() {
    const t = T();
    const panels = JEWELS.filter(j => j.portada !== false).map((j, i) => `
        <a href="#pieza-${j.id}" class="panel ${i === 0 ? "on" : ""} ${j.img.ambiente ? "" : "is-real"}" data-i="${i}">
            <img src="${mainImg(j)}" alt="${esc(L(j.titulo))}" ${i > 2 ? 'loading="lazy"' : ""}>
            <div class="panel-ov">
                <span class="panel-code">${esc(t.obra)} ${j.code}</span>
                <h2 class="panel-title">${esc(L(j.titulo))}</h2>
                <div class="panel-more"><div class="panel-price">${money(j.precioCLP).primary}</div><span class="panel-cta">${esc(t.verObra)} →</span></div>
            </div></a>`).join("");
    return `
    <section class="hero">
        ${film("intro", `<span class="eyebrow">${esc(t.heroEyebrow)}</span><h1 class="hero-title">${esc(t.heroTitulo)}</h1><p class="lead">${esc(t.heroLead)}</p>`, "film-hero")}
        <div class="ribbon" id="ribbon">${panels}</div>
        <div class="hero-actions">
            <a href="#coleccion" class="btn btn-solid">${esc(t.verCatalogo)}</a>
            <a href="#probador" class="btn">${esc(t.probar)}</a>
            <a href="#coleccionistas" class="btn">${esc(t.privilegios)}</a>
        </div>
    </section>
    <section class="rooms">
        ${t.salas.map((s, i) => `<a class="room" href="#${["coleccion", "probador", "coleccionistas", "orfebre"][i]}"><span class="eyebrow">${esc(s[0])}</span><h3>${esc(s[1])}</h3><p>${esc(s[2])}</p></a>`).join("")}
    </section>`;
}
function afterInicio() {
    const panels = document.querySelectorAll(".panel");
    panels.forEach(p => {
        const on = () => { panels.forEach(x => x.classList.remove("on")); p.classList.add("on"); };
        p.addEventListener("mouseenter", on); p.addEventListener("focus", on);
    });
}

let filtro = "todas";
function viewColeccion() {
    const t = T();
    return `<section class="page">
        ${film("coleccion", `<h1 class="page-title">${esc(t.catTitulo)}</h1><p class="lead">${esc(t.catLead)}</p>`)}
        <div class="filters">${Object.keys(t.filtros).map(k => `<button class="pill ${filtro === k ? "active" : ""}" data-filter="${k}">${esc(t.filtros[k])}</button>`).join("")}</div>
        <div class="grid" id="grid">${JEWELS.filter(j => filtro === "todas" || j.categoria === filtro).map(card).join("")}</div>
        <p class="muted small center">${esc(t.tasasNota(L(CONFIG.tasasFecha)))}</p>
    </section>`;
}
function afterColeccion() {
    document.querySelectorAll("[data-filter]").forEach(b => b.addEventListener("click", () => { filtro = b.dataset.filter; render(); }));
    bindAdd();
}

function viewPieza(id) {
    const t = T(); const j = byId(id) || JEWELS[0];
    const i = JEWELS.indexOf(j);
    const prev = JEWELS[(i - 1 + JEWELS.length) % JEWELS.length], next = JEWELS[(i + 1) % JEWELS.length];
    const p = money(j.precioCLP);
    const vistas = [];
    if (j.img.ambiente) vistas.push({ src: j.img.ambiente, label: t.ambiente });
    vistas.push({ src: j.img.real, label: t.fotoReal, real: true });
    const filas = [
        [t.ficha.orfebre, `${CONFIG.nombre} · ${L(ORFEBRE.lugar)}`],
        [t.ficha.metal, L(CONFIG.metal)],
        [t.ficha.gema, L(CONFIG.piedra)],
        [t.ficha.forma, L(j.forma)]
    ];
    if (j.juego) filas.push([t.ficha.juego, L(j.juego)]);
    if (j.medidas) filas.push([t.ficha.medidas, j.medidas]);
    if (j.peso) filas.push([t.ficha.peso, j.peso]);
    filas.push([t.ficha.edicion, t.unica]);
    return `<section class="page">
        <div class="piece-nav">
            <a href="#coleccion" class="pill">← ${esc(t.volver)}</a>
            <div><a href="#pieza-${prev.id}" class="pill">← ${prev.code}</a> <a href="#pieza-${next.id}" class="pill">${next.code} →</a></div>
        </div>
        <div class="piece">
            <div class="piece-stage">
                <div class="stage-main ${vistas[0].real ? "is-real" : ""}" id="stage-main"><img id="stage-img" src="${vistas[0].src}" alt="${esc(L(j.titulo))}"></div>
                <div class="stage-thumbs">
                    ${vistas.map((v, k) => `<button class="sthumb ${k === 0 ? "on" : ""}" data-src="${v.src}" data-real="${v.real ? 1 : 0}"><img src="${v.src}" alt=""><span>${esc(v.label)}</span></button>`).join("")}
                    ${j.img.ambiente ? "" : `<div class="sthumb placeholder"><span>${esc(t.sinAmbiente)}</span></div>`}
                </div>
            </div>
            <div class="piece-info">
                <span class="eyebrow">${esc(t.obra)} ${j.code} · Hecha de Tiempo</span>
                <h1 class="page-title left">${esc(L(j.titulo))}</h1>
                <p class="piece-lead">${esc(L(j.resumen))}</p>
                <div class="price-box"><div class="price-main">${p.primary}</div><div class="muted small">${p.otros}</div></div>
                <div class="story"><h3>${esc(t.cap1)}</h3><p>${esc(L(j.historia1))}</p><h3>${esc(t.cap2)}</h3><p>${esc(L(j.historia2))}</p></div>
                <table class="specs">${filas.map(f => `<tr><td>${esc(f[0])}</td><td>${esc(f[1])}</td></tr>`).join("")}</table>
                ${j.medidas ? "" : `<p class="muted small">${esc(t.consultarMedidas)}</p>`}
                <div class="two">
                    <button class="btn btn-solid" data-add="${j.id}">${esc(t.anadir)}</button>
                    <a href="#probador-${j.id}" class="btn">${esc(t.probarEsta)}</a>
                </div>
                <a class="btn full" style="margin-top:.8rem" target="_blank" rel="noopener" href="${waLink(t.msgPieza(j.code, L(j.titulo), p.clp))}">${esc(t.whatsapp)} · ${esc(CONFIG.whatsappVisible)}</a>
            </div>
        </div>
    </section>`;
}
function afterPieza() {
    document.querySelectorAll(".sthumb[data-src]").forEach(b => b.addEventListener("click", () => {
        $("#stage-img").src = b.dataset.src;
        $("#stage-main").classList.toggle("is-real", b.dataset.real === "1");
        document.querySelectorAll(".sthumb").forEach(x => x.classList.remove("on")); b.classList.add("on");
    }));
    $("#stage-main").addEventListener("click", () => openZoom($("#stage-img").src));
    bindAdd();
}

/* ------------------------------------------------------------- probador */
let stream = null;
function stopCamera() { if (stream) { stream.getTracks().forEach(tr => tr.stop()); stream = null; } }
function viewProbador(id) {
    const t = T(); const j = byId(id) || JEWELS[0];
    return `<section class="page">
        ${film("probador", `<h1 class="page-title">${esc(t.tryTitulo)}</h1><p class="lead">${esc(t.tryLead)}</p>`)}
        <div class="tryon">
            <div>
                <div class="cam" id="cam">
                    <video id="video" playsinline muted hidden></video>
                    <img id="photo" alt="" hidden>
                    <div class="cam-empty" id="cam-empty">
                        <button class="btn btn-solid" id="cam-on">${esc(t.camara)}</button>
                        <label class="btn">${esc(t.subir)}<input type="file" accept="image/*" id="file" hidden></label>
                        <p class="muted small">${esc(t.camaraNota)}</p>
                        <p class="muted small" id="cam-msg" role="status"></p>
                    </div>
                    <div class="ar" id="ar" style="left:50%;top:58%;width:130px" hidden><img id="ar-img" src="${j.img.probador}" alt="${esc(L(j.titulo))}" draggable="false"></div>
                </div>
                <div class="cam-tools">
                    <label class="muted small">${esc(t.tamano)} <input type="range" id="size" min="60" max="320" value="130"></label>
                    <button class="pill" id="cam-off" hidden>${esc(t.detener)}</button>
                </div>
            </div>
            <div>
                <div class="thumbs">${JEWELS.map(x => `<button class="tthumb ${x.id === j.id ? "on" : ""}" data-id="${x.id}"><img src="${x.img.probador}" alt=""><span>${x.code}</span></button>`).join("")}</div>
                <div class="price-box" id="try-info"></div>
            </div>
        </div>
    </section>`;
}
function afterProbador(id) {
    const t = T();
    const sel = (j) => {
        $("#ar-img").src = j.img.probador; $("#ar-img").alt = L(j.titulo);
        const p = money(j.precioCLP);
        $("#try-info").innerHTML = `<span class="eyebrow">${esc(t.obra)} ${j.code}</span><h3 class="jc-title">${esc(L(j.titulo))}</h3>
            <div class="price-main">${p.primary}</div><div class="muted small">${p.otros}</div>
            <div class="two" style="margin-top:1.2rem"><a class="btn" href="#pieza-${j.id}">${esc(t.verHistoria)}</a><button class="btn btn-solid" data-add="${j.id}">${esc(t.anadir)}</button></div>`;
        bindAdd($("#try-info"));
        document.querySelectorAll(".tthumb").forEach(b => b.classList.toggle("on", b.dataset.id === j.id));
    };
    sel(byId(id) || JEWELS[0]);
    document.querySelectorAll(".tthumb").forEach(b => b.addEventListener("click", () => sel(byId(b.dataset.id))));
    $("#size").addEventListener("input", (e) => { $("#ar").style.width = e.target.value + "px"; });

    const showMedia = () => { $("#cam-empty").hidden = true; $("#ar").hidden = false; };
    $("#cam-on").addEventListener("click", async () => {
        try {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new Error("no api");
            stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
            const v = $("#video"); v.srcObject = stream; await v.play();
            $("#photo").hidden = true; v.hidden = false; showMedia(); $("#cam-off").hidden = false;
        } catch (e) { $("#cam-msg").textContent = t.camaraError; }
    });
    $("#cam-off").addEventListener("click", () => { stopCamera(); $("#video").hidden = true; $("#cam-empty").hidden = false; $("#ar").hidden = true; $("#cam-off").hidden = true; });
    $("#file").addEventListener("change", (e) => {
        const f = e.target.files && e.target.files[0]; if (!f) return;
        stopCamera(); $("#video").hidden = true;
        const ph = $("#photo"); ph.src = URL.createObjectURL(f); ph.hidden = false; showMedia(); $("#cam-off").hidden = true;
    });

    // arrastrar la joya (ratón y táctil)
    const cam = $("#cam"), ar = $("#ar"); let drag = false;
    const move = (x, y) => {
        if (!drag) return; const r = cam.getBoundingClientRect();
        ar.style.left = Math.max(0, Math.min(r.width, x - r.left)) + "px";
        ar.style.top = Math.max(0, Math.min(r.height, y - r.top)) + "px";
    };
    ar.addEventListener("pointerdown", (e) => { drag = true; ar.setPointerCapture(e.pointerId); });
    ar.addEventListener("pointermove", (e) => move(e.clientX, e.clientY));
    ar.addEventListener("pointerup", () => { drag = false; });
    ar.addEventListener("pointercancel", () => { drag = false; });
}

/* ------------------------------------------------------------- coleccionistas */
function viewColeccionistas() {
    const t = T();
    return `<section class="page">
        ${film("coleccionistas", `<h1 class="page-title">${esc(t.coleccTitulo)}</h1><p class="lead">${esc(t.coleccLead)}</p>`)}
        <div class="sel-grid">${JEWELS.map(j => {
            const on = S.cart.includes(j.id);
            return `<div class="sel-card ${on ? "on" : ""}">
                <img src="${mainImg(j)}" alt="" loading="lazy">
                <div><span class="eyebrow">${esc(t.obra)} ${j.code}</span><h4>${esc(L(j.titulo))}</h4><span class="small">${money(j.precioCLP).primary}</span></div>
                <button class="btn ${on ? "btn-solid" : ""}" data-toggle="${j.id}">${on ? "✓ " + esc(t.seleccionada) : esc(t.seleccionar)}</button>
            </div>`; }).join("")}</div>
        <div class="summary" id="summary"></div>
        <p class="muted small center">${esc(t.tasasNota(L(CONFIG.tasasFecha)))}</p>
    </section>`;
}
function afterColeccionistas() {
    const t = T();
    const draw = () => {
        const s = cartSummary(); const before = money(s.sub), after = money(s.total);
        $("#summary").innerHTML = `
            <span class="eyebrow">${esc(t.piezasSel(S.cart.length))} · ${s.b ? esc(t.bonoActivo(Math.round(s.b * 100))) : esc(t.elegirMas)}</span>
            ${s.b ? `<div class="muted strike">${esc(t.sumaIndividual)}: ${before.primary}</div>` : ""}
            <div class="sum-total">${after.primary}</div><div class="muted small">${after.otros}</div>
            ${S.cart.length ? `<a class="btn btn-solid" target="_blank" rel="noopener" href="${waLink(t.msgCofre(s.names.join(", "), after.clp, s.b ? Math.round(s.b * 100) : 0))}">${esc(t.reservar)} · ${esc(CONFIG.whatsappVisible)}</a>` : ""}`;
    };
    document.querySelectorAll("[data-toggle]").forEach(b => b.addEventListener("click", () => {
        const id = b.dataset.toggle;
        if (S.cart.includes(id)) S.cart = S.cart.filter(x => x !== id); else S.cart.push(id);
        store.set("jp2_cart", S.cart); renderCart(); render();
    }));
    draw();
}

/* ------------------------------------------------------------- orfebre */
function viewOrfebre() {
    const t = T(); const o = ORFEBRE;
    return `<section class="page">
        ${film("orfebre", `<span class="eyebrow">${esc(t.orfEyebrow)} · ${esc(L(o.lugar))}</span><h1 class="page-title">${esc(L(o.titulo))}</h1><p class="lead">${esc(L(o.entrada))}</p>`)}
        <div class="bio">
            <figure class="bio-photo"><img src="${o.foto}" alt="" loading="lazy" onerror="this.closest('figure').remove()"></figure>
            <div><h2 class="h2">${esc(L(o.origenTitulo))}</h2>${o.origen.map(p => `<p class="lead left">${esc(L(p))}</p>`).join("")}
                <a class="btn btn-solid" style="margin-top:1.5rem" target="_blank" rel="noopener" href="${waLink(t.msgGeneral)}">${esc(t.whatsapp)} · ${esc(CONFIG.whatsappVisible)}</a></div>
        </div>
        ${o.mostrarCronologia ? `<h2 class="h2 center">${esc(t.cronologia)}</h2>
        <div class="timeline">${o.cronologia.map(c => `<div class="tl"><div class="tl-year">${esc(c.anos)}</div><h4>${esc(L(c.titulo))}</h4><p>${esc(L(c.texto))}</p></div>`).join("")}</div>` : ""}
        <h2 class="h2 center">${esc(t.metodo)}</h2>
        <div class="pillars">${o.pilares.map(p => `<div class="pillar"><span class="eyebrow">${esc(L(p.etapa))}</span><h3>${esc(L(p.titulo))}</h3><p>${esc(L(p.texto))}</p></div>`).join("")}</div>
    </section>`;
}

/* ------------------------------------------------------------- zoom */
function openZoom(src) { const z = $("#zoom"); $("#zoom img").src = src; z.classList.add("on"); }

/* ------------------------------------------------------------- enrutador */
function parse() {
    const h = (location.hash || "#inicio").slice(1);
    let m;
    if ((m = h.match(/^pieza-(\d{2})$/))) return { route: "pieza", id: m[1] };
    if ((m = h.match(/^probador-(\d{2})$/))) return { route: "probador", id: m[1] };
    if (["inicio", "coleccion", "probador", "coleccionistas", "orfebre"].includes(h)) return { route: h };
    return { route: "inicio" };
}
function render() {
    const { route, id } = parse();
    if (route !== "probador") stopCamera();
    renderHeader(route);
    const views = {
        inicio: [viewInicio, afterInicio], coleccion: [viewColeccion, afterColeccion], pieza: [viewPieza, afterPieza],
        probador: [viewProbador, afterProbador], coleccionistas: [viewColeccionistas, afterColeccionistas], orfebre: [viewOrfebre, null]
    };
    const [v, a] = views[route];
    $("#main").innerHTML = v(id);
    if (a) a(id);
    bindFilms();
    $("#footer").innerHTML = `<p>${esc(CONFIG.marca)} · ${esc(T().sub)} · ${esc(CONFIG.whatsappVisible)}</p><p class="small">${esc(T().pie)}</p>`;
    renderCart();
    document.title = `${CONFIG.nombre} · Hecha de Tiempo`;
}

document.addEventListener("DOMContentLoaded", () => {
    applyTheme();
    $("#veil").addEventListener("click", () => toggleCart(false));
    $("#zoom").addEventListener("click", () => $("#zoom").classList.remove("on"));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { toggleCart(false); $("#zoom").classList.remove("on"); } });
    window.addEventListener("hashchange", () => { render(); window.scrollTo(0, 0); });
    render();
    intro();
});
})();
