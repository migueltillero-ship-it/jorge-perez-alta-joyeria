const UI_TEXT = {
    es: {
        conciergeLeft: "LA RODOCROSITA ES TIEMPO HECHO PIEDRA · NINGUNA VETA SE REPITE",
        conciergeRight: "CADA PIEZA EXISTE UNA SOLA VEZ (1 DE 1) · WHATSAPP: +56 9 5625 8569",
        brandSub: "ALTA JOYERÍA · VALPARAÍSO, CHILE",
        navHome: "Portada y Film", navCat: "Catálogo (9 Obras)", navTry: "Probador con Cámara", navPromo: "Coleccionistas", navArtist: "El Orfebre",
        themeLight: "☀ Luz de Galería", themeDark: "☾ Azul Nocturno",
        cartBtn: "Cofre", cartTitle: "Cofre de Adquisición",
        cartEmpty: "Tu cofre está vacío. Explora las nueve obras únicas para configurar tu selección.",
        cartBonusActive: "BONIFICACIÓN DE COLECCIONISTA APLICADA",
        cartBonusHint: "Privilegio: 10% al elegir 2 obras · 18% en 3 o más obras",
        cartCheckout: "Confirmar Reserva por WhatsApp",
        readStory: "Inspeccionar Obra", addToCart: "Añadir al Cofre", addedToCart: "✓ En tu Cofre",
        backCat: "← Volver al Catálogo Completo", tryBtn: "Probar en Cámara", waDirect: "Atención Privada en WhatsApp",
        loupeHint: "PASA EL CURSOR SOBRE LA FOTOGRAFÍA PARA ACTIVAR LA LUPA GEMOLÓGICA 3X",
        viewMacro: "Vista Macro en Terciopelo", viewClean: "Vista Silueta sobre Luz",
        chainLabel: "SELECCIONA EL LARGO DE CADENA EN PLATA LEY 950 (INCLUIDA):",
        chain1: "45 cm · Clavícula", chain2: "50 cm · Princesa", chain3: "60 cm · Matinée",
        certBtn: "Ver Certificado de Pieza Única (1 de 1)"
    },
    fr: {
        conciergeLeft: "LA RHODOCHROSITE EST LE TEMPS FAIT PIERRE · AUCUNE VEINE NE SE RÉPÈTE",
        conciergeRight: "CHAQUE PIÈCE N'EXISTE QU'UNE SEULE FOIS · WHATSAPP: +56 9 5625 8569",
        brandSub: "HAUTE JOAILLERIE · VALPARAÍSO, CHILI",
        navHome: "Vitrine & Film", navCat: "Catalogue (9 Œuvres)", navTry: "Essayage Caméra", navPromo: "Collectionneurs", navArtist: "L'Orfèvre",
        themeLight: "☀ Galerie Claire", themeDark: "☾ Bleu Nocturne",
        cartBtn: "Écrin", cartTitle: "Écrin d'Acquisition",
        cartEmpty: "Votre écrin est vide. Découvrez les neuf pièces uniques.",
        cartBonusActive: "PRIVILÈGE COLLECTIONNEUR APPLIQUÉ",
        cartBonusHint: "Privilège: 10% pour 2 œuvres · 18% dès 3 œuvres",
        cartCheckout: "Confirmer sur WhatsApp",
        readStory: "Inspecter l'Œuvre", addToCart: "Ajouter à l'Écrin", addedToCart: "✓ Dans l'Écrin",
        backCat: "← Retour au Catalogue", tryBtn: "Essayer avec Caméra", waDirect: "Conciergerie WhatsApp",
        loupeHint: "SURVOLEZ LA PHOTOGRAPHIE POUR ACTIVER LA LOUPE GEMMOLOGIQUE 3X",
        viewMacro: "Vue Macro sur Velours", viewClean: "Vue Silhouette Claire",
        chainLabel: "CHOISISSEZ LA LONGUEUR DE CHAÎNE EN ARGENT 950 (INCLUSE):",
        chain1: "45 cm · Clavicule", chain2: "50 cm · Princesse", chain3: "60 cm · Matinée",
        certBtn: "Voir le Certificat de Pièce Unique (1 sur 1)"
    },
    en: {
        conciergeLeft: "RHODOCHROSITE IS TIME MADE STONE · NO VEIN EVER REPEATS",
        conciergeRight: "EACH PIECE EXISTS ONLY ONCE (1 OF 1) · WHATSAPP: +56 9 5625 8569",
        brandSub: "HIGH JEWELRY · VALPARAÍSO, CHILE",
        navHome: "Showcase & Film", navCat: "Catalog (9 Works)", navTry: "Camera Try On", navPromo: "Collectors", navArtist: "The Goldsmith",
        themeLight: "☀ Daylight Gallery", themeDark: "☾ Midnight Velvet",
        cartBtn: "Selection", cartTitle: "Acquisition Chest",
        cartEmpty: "Your selection chest is empty. Explore the nine unique works.",
        cartBonusActive: "COLLECTOR PRIVILEGE APPLIED",
        cartBonusHint: "Privilege: 10% on 2 works · 18% on 3 or more works",
        cartCheckout: "Confirm via WhatsApp",
        readStory: "Inspect Work", addToCart: "Add to Selection", addedToCart: "✓ In Selection",
        backCat: "← Back to Full Catalog", tryBtn: "Camera Try On", waDirect: "Private Concierge on WhatsApp",
        loupeHint: "HOVER OVER THE PHOTOGRAPH TO ACTIVATE THE 3X GEMOLOGICAL LOUPE",
        viewMacro: "Macro View on Velvet", viewClean: "Silhouette View",
        chainLabel: "SELECT INCLUDED 950 STERLING SILVER CHAIN LENGTH:",
        chain1: "45 cm · Collarbone", chain2: "50 cm · Princess", chain3: "60 cm · Matinee",
        certBtn: "View Certificate of Authenticity (1 of 1)"
    }
};

let currentLang = localStorage.getItem('jp_lang') || 'es';
let currentCurrency = localStorage.getItem('jp_currency') || 'CLP';
let currentTheme = localStorage.getItem('jp_theme') || 'light';
let cart = JSON.parse(localStorage.getItem('jp_cart') || '[]');
let selectedChain = "50 cm · Princesa";

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    renderSharedHeaderAndCart();

    const page = document.body.getAttribute('data-page');
    if (page === 'home') initHomePage();
    if (page === 'catalog') initCatalogPage('all');
    if (page === 'single') initSingleJewelPage();
    if (page === 'tryon') initTryOnPage();
    if (page === 'promos') initPromosPage();
});

function formatMoney(clpAmount) {
    const usd = Math.round(clpAmount * EXCHANGE_RATES.USD);
    const eur = Math.round(clpAmount * EXCHANGE_RATES.EUR);
    const clpStr = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(clpAmount) + ' CLP';
    const usdStr = `USD $${usd}`;
    const eurStr = `EUR €${eur}`;

    let primary = clpStr;
    if (currentCurrency === 'USD') primary = usdStr;
    if (currentCurrency === 'EUR') primary = eurStr;

    return { primary, clp: clpStr, usd: usdStr, eur: eurStr, all: `${clpStr} · ${usdStr} · ${eurStr}` };
}

function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('jp_theme', theme);
    const t = UI_TEXT[currentLang];
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) btn.textContent = theme === 'light' ? t.themeDark : t.themeLight;
}

function toggleTheme() {
    applyTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function setCurrency(curr) {
    currentCurrency = curr;
    localStorage.setItem('jp_currency', curr);
    location.reload();
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('jp_lang', lang);
    location.reload();
}

function renderSharedHeaderAndCart() {
    const page = document.body.getAttribute('data-page');
    const t = UI_TEXT[currentLang];

    if (!document.getElementById('top-concierge')) {
        const topBar = document.createElement('div');
        topBar.id = 'top-concierge';
        topBar.className = 'top-concierge-bar';
        topBar.innerHTML = `<span>${t.conciergeLeft}</span><span>${t.conciergeRight}</span>`;
        document.body.prepend(topBar);
    }

    const header = document.getElementById('shared-navbar');
    if (header) {
        header.innerHTML = `
            <a href="index.html" class="brand">
                <span class="brand-name">JORGE PÉREZ</span>
                <span class="brand-sub">${t.brandSub}</span>
            </a>
            <nav class="nav-links">
                <a href="index.html" class="${page==='home'?'active':''}">${t.navHome}</a>
                <a href="coleccion.html" class="${page==='catalog'||page==='single'?'active':''}">${t.navCat}</a>
                <a href="probador.html" class="${page==='tryon'?'active':''}">${t.navTry}</a>
                <a href="coleccionistas.html" class="${page==='promos'?'active':''}">${t.navPromo}</a>
                <a href="orfebre.html" class="${page==='artist'?'active':''}">${t.navArtist}</a>
            </nav>
            <div class="controls">
                <div class="lang-switch">
                    <button onclick="setLanguage('es')" class="${currentLang==='es'?'active':''}">ES</button>·
                    <button onclick="setLanguage('fr')" class="${currentLang==='fr'?'active':''}">FR</button>·
                    <button onclick="setLanguage('en')" class="${currentLang==='en'?'active':''}">EN</button>
                </div>
                <select class="control-pill" onchange="setCurrency(this.value)" aria-label="Moneda">
                    <option value="CLP" ${currentCurrency==='CLP'?'selected':''}>CLP</option>
                    <option value="USD" ${currentCurrency==='USD'?'selected':''}>USD</option>
                    <option value="EUR" ${currentCurrency==='EUR'?'selected':''}>EUR</option>
                </select>
                <button id="theme-toggle-btn" class="control-pill" onclick="toggleTheme()">
                    ${currentTheme === 'light' ? t.themeDark : t.themeLight}
                </button>
                <button class="control-pill" onclick="toggleAudio()" id="audio-btn">♪ Sax</button>
                <button class="control-pill active" onclick="toggleCartDrawer()">
                    ${t.cartBtn} (<span id="cart-count">${cart.length}</span>)
                </button>
            </div>
        `;
    }
    updateCartUI();
}

function addToCart(id) {
    if (!cart.includes(id)) {
        cart.push(id);
        localStorage.setItem('jp_cart', JSON.stringify(cart));
    }
    updateCartUI();
    document.getElementById('shared-cart-drawer').classList.add('open');
}

function removeFromCart(id) {
    cart = cart.filter(item => item !== id);
    localStorage.setItem('jp_cart', JSON.stringify(cart));
    updateCartUI();
}

function toggleCartDrawer() {
    document.getElementById('shared-cart-drawer').classList.toggle('open');
}

function updateCartUI() {
    const t = UI_TEXT[currentLang];
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = cart.length;

    const drawer = document.getElementById('shared-cart-drawer');
    if (!drawer) return;

    let subtotal = 0;
    const names = [];
    const itemsHtml = cart.map(id => {
        const j = JEWELS.find(x => x.id === id);
        if (!j) return '';
        subtotal += j.priceCLP;
        names.push(`${j.code} (${j.title[currentLang]})`);
        const p = formatMoney(j.priceCLP);
        return `
            <div class="cart-item">
                <img src="${j.macro}" onerror="this.src='assets/joyas/${j.fallback}'">
                <div style="flex:1">
                    <div style="font-size:0.6rem;color:var(--accent-rose);letter-spacing:0.14em">${j.code} · ${j.reg}</div>
                    <div style="font-family:'Cormorant Garamond',serif;font-size:1.25rem">${j.title[currentLang]}</div>
                    <div style="font-size:0.76rem;color:var(--text-body)">${p.primary}</div>
                </div>
                <button class="control-pill" onclick="removeFromCart('${j.id}')">✕</button>
            </div>
        `;
    }).join('');

    let disc = cart.length === 2 ? 0.10 : (cart.length >= 3 ? 0.18 : 0);
    const finalCLP = Math.round(subtotal * (1 - disc));
    const totals = formatMoney(finalCLP);
    const waMsg = encodeURIComponent(`Hola, deseo coordinar la adquisición de las siguientes obras de Jorge Pérez: ${names.join(', ')}. Cadena: ${selectedChain}. Total (${Math.round(disc*100)}% bonificación): ${totals.clp} (${totals.usd} / ${totals.eur}).`);

    drawer.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border-hairline);padding-bottom:1rem">
            <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:400">${t.cartTitle}</h3>
            <button class="control-pill" onclick="toggleCartDrawer()">✕</button>
        </div>
        <div class="cart-items-list">
            ${cart.length === 0 ? `<p style="color:var(--text-muted);font-size:0.84rem;line-height:1.7">${t.cartEmpty}</p>` : itemsHtml}
        </div>
        <div class="cart-footer">
            <div style="font-size:0.64rem;letter-spacing:0.15em;color:var(--accent-rose);margin-bottom:0.35rem">
                ${disc > 0 ? `${t.cartBonusActive} (${Math.round(disc*100)}%)` : t.cartBonusHint}
            </div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:2rem">${totals.primary}</div>
            <div style="font-size:0.72rem;color:var(--text-muted);margin-bottom:1.1rem">${totals.all}</div>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}" target="_blank" class="btn-luxury btn-soft full-width">
                ${t.cartCheckout}
            </a>
        </div>
    `;
}

// 1. Inicializador Portada + Controlador Inteligente del Video (Suprime voz errónea en 11.8s)
function initHomePage() {
    const t = UI_TEXT[currentLang];
    const ribbon = document.getElementById('hero-horizontal-ribbon');
    if (ribbon) {
        ribbon.innerHTML = '';
        JEWELS.forEach((item, index) => {
            const p = formatMoney(item.priceCLP);
            const panel = document.createElement('a');
            panel.href = `joya.html?id=${item.id}`;
            panel.className = 'ribbon-panel' + (index === 0 ? ' active-panel' : '');
            panel.addEventListener('mouseenter', () => {
                document.querySelectorAll('.ribbon-panel').forEach(el => el.classList.remove('active-panel'));
                panel.classList.add('active-panel');
            });

            panel.innerHTML = `
                <span class="ribbon-roman">${item.roman}</span>
                <img src="${item.macro}" alt="${item.title[currentLang]}" onerror="this.src='assets/joyas/${item.fallback}'">
                <div class="ribbon-overlay">
                    <span class="ribbon-code">${item.code} · ${item.weight}</span>
                    <h2 class="ribbon-title">${item.title[currentLang]}</h2>
                    <div class="ribbon-details">
                        <div class="ribbon-specs-mini">${item.stoneCut} · ${item.hours}</div>
                        <div class="ribbon-price">${p.primary} (${p.usd} · ${p.eur})</div>
                        <span class="ribbon-cta">${t.readStory} →</span>
                    </div>
                </div>
            `;
            ribbon.appendChild(panel);
        });
    }

    setupCollectionVideoFilter();

    const homeGrid = document.getElementById('home-full-showcase');
    if (homeGrid) renderJewelCardsInto(homeGrid, JEWELS);
}

// Controlador que silencia suavemente los últimos 3 segundos del video (desde 11.8s) y muestra el cierre escrito correcto
function setupCollectionVideoFilter() {
    const vid = document.getElementById('collection-film');
    const overlay = document.getElementById('video-closing-overlay');
    const soundBtn = document.getElementById('video-sound-btn');
    if (!vid) return;

    let userUnmuted = false;

    vid.addEventListener('timeupdate', () => {
        // Entre el segundo 0 y 11.4 la voz es perfecta; desde 11.4 hacemos fade out y en 11.8 silenciamos por completo la frase errónea
        if (vid.currentTime >= 11.4 && vid.currentTime < 11.8) {
            if (userUnmuted) {
                const factor = Math.max(0, (11.8 - vid.currentTime) / 0.4);
                vid.volume = factor;
            }
        } else if (vid.currentTime >= 11.8) {
            vid.volume = 0;
            if (overlay) overlay.classList.add('visible');
        } else {
            if (userUnmuted) vid.volume = 0.9;
            if (overlay) overlay.classList.remove('visible');
        }
    });

    if (soundBtn) {
        soundBtn.addEventListener('click', () => {
            userUnmuted = !userUnmuted;
            vid.muted = !userUnmuted;
            if (userUnmuted) {
                vid.currentTime = 0;
                vid.volume = 0.9;
                vid.play();
                soundBtn.textContent = '🔊 Reproduciendo con Voz (Cierre de 3s Corregido)';
                soundBtn.classList.add('active');
            } else {
                soundBtn.textContent = '🔈 Activar Narración del Video';
                soundBtn.classList.remove('active');
            }
        });
    }
}

function renderJewelCardsInto(gridElement, list) {
    const t = UI_TEXT[currentLang];
    gridElement.innerHTML = '';
    list.forEach(item => {
        const p = formatMoney(item.priceCLP);
        const inCart = cart.includes(item.id);
        const card = document.createElement('div');
        card.className = 'jewel-card';

        card.innerHTML = `
            <div>
                <a href="joya.html?id=${item.id}" style="display:block;text-decoration:none">
                    <div class="jewel-macro-wrap">
                        <div class="card-badge-top">
                            <span class="badge-chip">${item.code}</span>
                            <span class="badge-chip">1 DE 1 · ${item.weight}</span>
                        </div>
                        <img src="${item.macro}" alt="${item.title[currentLang]}" onerror="this.src='assets/joyas/${item.fallback}'">
                    </div>
                </a>
                <div class="jewel-card-body">
                    <span class="eyebrow" style="margin-bottom:0.15rem">${item.reg}</span>
                    <h3 class="jewel-title">${item.title[currentLang]}</h3>
                    <div class="jewel-meta-strip">
                        <span>${item.dimensions}</span> · <span>${item.hours}</span>
                    </div>
                    <p class="jewel-excerpt">${item.excerpt[currentLang]}</p>
                    <div class="jewel-price-main">${p.primary}</div>
                    <div class="jewel-price-sub">${p.all}</div>
                    <div class="card-actions">
                        <a href="joya.html?id=${item.id}" class="btn-luxury">${t.readStory}</a>
                        <button class="btn-luxury btn-soft" onclick="addToCart('${item.id}')">${inCart ? t.addedToCart : t.addToCart}</button>
                    </div>
                </div>
            </div>
        `;
        gridElement.appendChild(card);
    });
}

function initCatalogPage(filterCat) {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;
    const list = filterCat === 'all' ? JEWELS : JEWELS.filter(j => j.category === filterCat);
    renderJewelCardsInto(grid, list);
}

function initSingleJewelPage() {
    const t = UI_TEXT[currentLang];
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || '01';
    const item = JEWELS.find(j => j.id === id) || JEWELS[0];
    const idx = JEWELS.indexOf(item);
    const prevItem = JEWELS[(idx - 1 + JEWELS.length) % JEWELS.length];
    const nextItem = JEWELS[(idx + 1) % JEWELS.length];
    const p = formatMoney(item.priceCLP);

    const container = document.getElementById('single-jewel-container');
    if (!container) return;

    const waDirect = encodeURIComponent(`Hola, me interesa adquirir la ${item.code} (${item.title[currentLang]}, Reg: ${item.reg}) del maestro Jorge Pérez (${p.clp} / ${p.usd}).`);

    container.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2.2rem;border-bottom:1px solid var(--border-hairline);padding-bottom:1rem">
            <a href="coleccion.html" class="control-pill">${t.backCat}</a>
            <div style="display:flex;gap:0.8rem">
                <a href="joya.html?id=${prevItem.id}" class="control-pill">← ${prevItem.code}</a>
                <a href="joya.html?id=${nextItem.id}" class="control-pill">${nextItem.code} →</a>
            </div>
        </div>

        <div class="single-jewel-layout">
            <div class="single-jewel-stage">
                <div class="loupe-container" id="loupe-box">
                    <img id="main-jewel-photo" src="${item.macro}" onerror="this.src='assets/joyas/${item.fallback}'" alt="${item.title[currentLang]}">
                    <div class="gem-loupe" id="gem-loupe"></div>
                </div>
                <p style="font-size:0.64rem;letter-spacing:0.16em;color:var(--accent-rose);margin-top:0.9rem">
                    🔍 ${t.loupeHint}
                </p>
                <div class="stage-view-switcher">
                    <button class="control-pill active" onclick="switchJewelPhoto('${item.macro}', '#071120')">${t.viewMacro}</button>
                    <button class="control-pill" onclick="switchJewelPhoto('assets/joyas/${item.fallback}', '#F4F1EA')">${t.viewClean}</button>
                </div>
            </div>

            <div>
                <span class="eyebrow">${item.code} · PIEZA ÚNICA EXISTENTE UNA SOLA VEZ · REGISTRO ${item.reg}</span>
                <h1 class="page-title" style="margin-bottom:0.35rem">${item.title[currentLang]}</h1>
                <p style="color:var(--accent-rose);font-size:0.84rem;letter-spacing:0.08em;margin-bottom:1.5rem">${item.materials[currentLang]}</p>

                <div style="padding:1.5rem 1.8rem;background:var(--bg-elevated);border:1px solid var(--border-hairline);margin-bottom:1.6rem;box-shadow:var(--shadow-luxury);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem">
                    <div>
                        <div style="font-family:'Cormorant Garamond',serif;font-size:2.3rem">${p.primary}</div>
                        <div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.2rem">${p.all}</div>
                    </div>
                    <button class="control-pill active" onclick="openCertModal()">📜 ${t.certBtn}</button>
                </div>

                <div class="chain-selector-box">
                    <span style="font-size:0.65rem;letter-spacing:0.16em;color:var(--text-muted)">${t.chainLabel}</span>
                    <div class="chain-options">
                        <button class="chain-btn" onclick="selectChain(this, '${t.chain1}')">${t.chain1}</button>
                        <button class="chain-btn active" onclick="selectChain(this, '${t.chain2}')">${t.chain2}</button>
                        <button class="chain-btn" onclick="selectChain(this, '${t.chain3}')">${t.chain3}</button>
                    </div>
                </div>

                <div class="story-chapter">
                    <h3>I. Génesis y Arquitectura</h3>
                    <p>${item.storyPart1[currentLang]}</p>
                    <h3 style="margin-top:1.2rem">II. Tiempo Hecho Piedra</h3>
                    <p>${item.storyPart2[currentLang]}</p>
                </div>

                <table class="specs-table">
                    <tr><td>Maestro Orfebre</td><td>Jorge Pérez (Valparaíso, Chile)</td></tr>
                    <tr><td>Carácter de Edición</td><td>Ejemplar irrepetible (1 de 1) · Registro ${item.reg}</td></tr>
                    <tr><td>Tiempo de Forja</td><td>${item.hours} de trabajo manual</td></tr>
                    <tr><td>Aleación Metálica</td><td>Plata Ley 950 fundida y forjada sin moldes</td></tr>
                    <tr><td>Gema Principal</td><td>Rodocrosita natural (${item.stoneCut})</td></tr>
                    <tr><td>Procedencia Geológica</td><td>${item.origin}</td></tr>
                    <tr><td>Dureza y Lustre</td><td>${item.mohs}</td></tr>
                    <tr><td>Dimensiones y Peso</td><td>${item.dimensions} · ${item.weight}</td></tr>
                </table>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.8rem">
                    <button class="btn-luxury btn-soft" onclick="addToCart('${item.id}')">${t.addToCart}</button>
                    <a href="probador.html?id=${item.id}" class="btn-luxury">${t.tryBtn}</a>
                </div>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waDirect}" target="_blank" class="btn-luxury full-width" style="margin-top:0.85rem">
                    ${t.waDirect} (+56 9 5625 8569)
                </a>
            </div>
        </div>

        <div class="cert-modal" id="cert-modal" onclick="closeCertModal()">
            <div class="cert-paper" onclick="event.stopPropagation()">
                <span style="font-size:0.65rem;letter-spacing:0.28em;color:#8C7355">TALLER DE ALTA JOYERÍA DE VALPARAÍSO · CHILE</span>
                <h2 style="font-family:'Cormorant Garamond',serif;font-size:2.3rem;font-weight:400;margin:0.5rem 0">Certificado de Pieza Única</h2>
                <p style="font-size:0.75rem;color:#524E4A;margin-bottom:1.5rem">LA RODOCROSITA ES TIEMPO HECHO PIEDRA · EDICIÓN 1 DE 1</p>
                <div style="text-align:left;font-size:0.84rem;line-height:1.85;border-top:1px solid #D8CBB8;border-bottom:1px solid #D8CBB8;padding:1.3rem 0;margin-bottom:1.5rem">
                    <p>Se certifica que la obra <strong>${item.code}: ${item.title[currentLang]}</strong> (Registro <strong>${item.reg}</strong>) ha sido forjada a mano en <strong>Plata Ley 950</strong> y <strong>Rodocrosita Natural</strong> (${item.stoneCut}, ${item.weight}, ${item.dimensions}).</p>
                    <p style="margin-top:0.7rem">La rodocrosita crece capa sobre capa durante miles de años. Cada banda rosa y blanca es irrepetible y esta pieza existe una sola vez.</p>
                </div>
                <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.75rem;color:#524E4A;margin-bottom:1.5rem">
                    <div><strong>Autor:</strong> Maestro Orfebre en Valparaíso</div>
                    <div style="font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-style:italic">Jorge Pérez</div>
                </div>
                <div style="display:flex;gap:1rem;justify-content:center">
                    <button class="btn-luxury" style="border-color:#181715;color:#181715" onclick="window.print()">Imprimir / Guardar PDF</button>
                    <button class="btn-luxury" style="border-color:#8C7355;color:#8C7355" onclick="closeCertModal()">Cerrar</button>
                </div>
            </div>
        </div>
    `;

    setupGemologicalLoupe();
}

function setupGemologicalLoupe() {
    const box = document.getElementById('loupe-box');
    const img = document.getElementById('main-jewel-photo');
    const loupe = document.getElementById('gem-loupe');
    if (!box || !img || !loupe) return;

    const zoom = 2.6;
    box.addEventListener('mouseenter', () => {
        loupe.style.display = 'block';
        loupe.style.backgroundImage = `url('${img.src}')`;
    });
    box.addEventListener('mouseleave', () => {
        loupe.style.display = 'none';
    });
    box.addEventListener('mousemove', e => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        loupe.style.left = `${x - 87}px`;
        loupe.style.top = `${y - 87}px`;
        loupe.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
        loupe.style.backgroundPosition = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
    });
}

function switchJewelPhoto(src, bgColor) {
    const img = document.getElementById('main-jewel-photo');
    const box = document.getElementById('loupe-box');
    const loupe = document.getElementById('gem-loupe');
    if (img && box) {
        img.src = src;
        img.style.objectFit = src.includes('macro') ? 'cover' : 'contain';
        box.style.background = bgColor;
        if (loupe) loupe.style.backgroundImage = `url('${src}')`;
    }
}

function selectChain(btn, chainName) {
    selectedChain = chainName;
    document.querySelectorAll('.chain-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

function openCertModal() {
    const m = document.getElementById('cert-modal');
    if (m) m.classList.add('open');
}
function closeCertModal() {
    const m = document.getElementById('cert-modal');
    if (m) m.classList.remove('open');
}

function initTryOnPage() {
    const params = new URLSearchParams(window.location.search);
    const startId = params.get('id') || '01';
    const initialItem = JEWELS.find(j => j.id === startId) || JEWELS[0];

    const thumbs = document.getElementById('tryon-thumbs');
    if (thumbs) {
        thumbs.innerHTML = '';
        JEWELS.forEach(item => {
            const btn = document.createElement('div');
            btn.className = 'thumb-btn' + (item.id === initialItem.id ? ' active' : '');
            btn.onclick = () => {
                document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectArJewel(item);
            };
            btn.innerHTML = `<img src="${item.macro}" onerror="this.src='assets/joyas/${item.fallback}'"><span>${item.code}</span>`;
            thumbs.appendChild(btn);
        });
    }
    selectArJewel(initialItem);
    setupArDragging();
}

function selectArJewel(item) {
    const arImg = document.getElementById('ar-jewel-img');
    if (!arImg) return;
    arImg.src = `assets/joyas/${item.file}`;
    arImg.onerror = () => { arImg.src = item.macro; };

    const p = formatMoney(item.priceCLP);
    document.getElementById('ar-title').textContent = `${item.code} · ${item.title[currentLang]}`;
    document.getElementById('ar-price').textContent = p.all;
    document.getElementById('ar-story-link').href = `joya.html?id=${item.id}`;
    document.getElementById('ar-add-cart').onclick = () => addToCart(item.id);
}

async function startCamera() {
    const video = document.getElementById('webcam-video');
    const placeholder = document.getElementById('camera-placeholder');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
        video.srcObject = stream;
        placeholder.style.display = 'none';
    } catch (e) {
        alert('Autoriza la cámara en tu navegador para activar el espejo virtual.');
    }
}

function setupArDragging() {
    const stage = document.getElementById('camera-stage');
    const jewel = document.getElementById('ar-jewel-wrapper');
    if (!stage || !jewel) return;
    let dragging = false;

    const move = (cx, cy) => {
        if (!dragging) return;
        const r = stage.getBoundingClientRect();
        jewel.style.left = `${Math.max(40, Math.min(r.width - 40, cx - r.left))}px`;
        jewel.style.top = `${Math.max(40, Math.min(r.height - 40, cy - r.top))}px`;
    };
    jewel.addEventListener('mousedown', () => dragging = true);
    window.addEventListener('mouseup', () => dragging = false);
    window.addEventListener('mousemove', e => move(e.clientX, e.clientY));
    jewel.addEventListener('touchstart', () => dragging = true, { passive: true });
    window.addEventListener('touchend', () => dragging = false);
    window.addEventListener('touchmove', e => { if (e.touches[0]) move(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
}

function initPromosPage() {
    const grid = document.getElementById('promo-selector-grid');
    if (!grid) return;
    grid.innerHTML = '';

    JEWELS.forEach(item => {
        const p = formatMoney(item.priceCLP);
        const isSelected = cart.includes(item.id);
        const card = document.createElement('div');
        card.className = 'pillar-card';
        card.style.borderColor = isSelected ? 'var(--accent-rose)' : 'var(--border-hairline)';
        card.innerHTML = `
            <div style="display:flex;align-items:center;gap:1.2rem;margin-bottom:1.2rem">
                <img src="${item.macro}" onerror="this.src='assets/joyas/${item.fallback}'" style="width:76px;height:76px;object-fit:cover">
                <div>
                    <span class="eyebrow" style="margin:0">${item.code} · ${item.reg}</span>
                    <h4 style="font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:400">${item.title[currentLang]}</h4>
                    <span style="font-size:0.8rem;color:var(--text-body)">${p.primary}</span>
                </div>
            </div>
            <button class="btn-luxury full-width ${isSelected ? 'btn-soft' : ''}" onclick="togglePromoSelection('${item.id}')">
                ${isSelected ? '✓ Incluida en tu Conjunto' : '+ Seleccionar para mi Conjunto'}
            </button>
        `;
        grid.appendChild(card);
    });
    renderPromoSummaryBox();
}

function togglePromoSelection(id) {
    if (cart.includes(id)) cart = cart.filter(x => x !== id);
    else cart.push(id);
    localStorage.setItem('jp_cart', JSON.stringify(cart));
    updateCartUI();
    initPromosPage();
}

function renderPromoSummaryBox() {
    const box = document.getElementById('promo-live-calculation');
    if (!box) return;
    let sub = 0;
    const names = [];
    cart.forEach(id => {
        const j = JEWELS.find(x => x.id === id);
        if (j) { sub += j.priceCLP; names.push(`${j.code} (${j.title[currentLang]})`); }
    });
    let disc = cart.length === 2 ? 0.10 : (cart.length >= 3 ? 0.18 : 0);
    const finalCLP = Math.round(sub * (1 - disc));
    const before = formatMoney(sub);
    const after = formatMoney(finalCLP);
    const msg = encodeURIComponent(`Hola, deseo reservar el siguiente conjunto de la colección de Jorge Pérez (${cart.length} piezas): ${names.join(', ')}. Total con ${Math.round(disc*100)}% de bonificación: ${after.clp} (${after.usd} / ${after.eur}).`);

    box.innerHTML = `
        <span class="eyebrow">${cart.length} OBRAS SELECCIONADAS · ${disc > 0 ? `BONIFICACIÓN DEL ${Math.round(disc*100)}% APLICADA` : 'ELIGE 2 O MÁS OBRAS PARA ACTIVAR BONIFICACIÓN'}</span>
        <div style="font-size:0.85rem;color:var(--text-muted);text-decoration:${disc>0?'line-through':'none'}">Suma individual: ${before.all}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:2.9rem;margin:0.4rem 0">${after.primary}</div>
        <div style="font-size:0.84rem;color:var(--accent-rose);margin-bottom:1.6rem">${after.all}</div>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${msg}" target="_blank" class="btn-luxury btn-soft">
            Reservar este Conjunto por WhatsApp (+56 9 5625 8569)
        </a>
    `;
}

function toggleAudio() {
    const audioEl = document.getElementById('bg-music');
    const btn = document.getElementById('audio-btn');
    if (!audioEl) return;
    if (audioEl.paused) {
        audioEl.volume = 0.22;
        audioEl.play().then(() => btn.classList.add('active')).catch(() => {});
    } else {
        audioEl.pause();
        btn.classList.remove('active');
    }
}
