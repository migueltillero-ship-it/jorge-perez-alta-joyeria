const UI_TEXT = {
    es: {
        brandSub: "ALTA JOYERÍA · VALPARAÍSO, CHILE",
        navHome: "Atelier", navCat: "Colección", navTry: "Probador Virtual", navPromo: "Adquisición", navArtist: "El Orfebre",
        themeLight: "☀ Luz de Día", themeDark: "☾ Terciopelo Nocturno",
        cartBtn: "Seleccionadas",
        cartTitle: "Cofre de Selección",
        cartEmpty: "Tu cofre está vacío. Explora la colección para seleccionar tus piezas favoritas.",
        cartBonusActive: "BONIFICACIÓN DE COLECCIONISTA APLICADA",
        cartBonusHint: "Privilegio: 10% al elegir 2 piezas · 18% en 3 o más piezas",
        cartCheckout: "Coordinar Adquisición por WhatsApp",
        featuredTag: "PIEZA EMBLEMÁTICA DE LA COLECCIÓN",
        readStory: "Descubrir su Historia",
        addToCart: "Añadir al Cofre",
        addedToCart: "✓ En tu Cofre",
        backCat: "← Volver a la Colección",
        reliefHint: "Mueve suavemente el cursor sobre la joya para apreciar su volumen y engaste",
        tryBtn: "Probar en el Espejo Virtual",
        waDirect: "Atención Personalizada en WhatsApp"
    },
    fr: {
        brandSub: "HAUTE JOAILLERIE · VALPARAÍSO, CHILI",
        navHome: "Atelier", navCat: "Collection", navTry: "Essayage Virtuel", navPromo: "Acquisition", navArtist: "L'Orfèvre",
        themeLight: "☀ Lumière du Jour", themeDark: "☾ Velours Nocturne",
        cartBtn: "Sélection",
        cartTitle: "Écrin de Sélection",
        cartEmpty: "Votre écrin est vide. Parcourez la collection pour choisir vos pièces.",
        cartBonusActive: "PRIVILÈGE COLLECTIONNEUR APPLIQUÉ",
        cartBonusHint: "Privilège: 10% pour 2 pièces · 18% dès 3 pièces",
        cartCheckout: "Finaliser l'Acquisition sur WhatsApp",
        featuredTag: "PIÈCE EMBLÉMATIQUE DE LA COLLECTION",
        readStory: "Découvrir son Histoire",
        addToCart: "Ajouter à l'Écrin",
        addedToCart: "✓ Dans l'Écrin",
        backCat: "← Retour à la Collection",
        reliefHint: "Survolez délicatement le bijou pour apprécier son volume",
        tryBtn: "Essayer dans le Miroir Virtuel",
        waDirect: "Service Privé sur WhatsApp"
    },
    en: {
        brandSub: "HIGH JEWELRY · VALPARAÍSO, CHILE",
        navHome: "Atelier", navCat: "Collection", navTry: "Virtual Try On", navPromo: "Acquisition", navArtist: "The Goldsmith",
        themeLight: "☀ Daylight Gallery", themeDark: "☾ Night Velvet",
        cartBtn: "Selection",
        cartTitle: "Collector Selection",
        cartEmpty: "Your selection box is empty. Explore the collection to choose your pieces.",
        cartBonusActive: "COLLECTOR PRIVILEGE APPLIED",
        cartBonusHint: "Privilege: 10% on 2 pieces · 18% on 3 or more pieces",
        cartCheckout: "Arrange Acquisition via WhatsApp",
        featuredTag: "SIGNATURE PIECE OF THE COLLECTION",
        readStory: "Discover the Story",
        addToCart: "Add to Selection",
        addedToCart: "✓ In Selection",
        backCat: "← Back to Collection",
        reliefHint: "Gently move your cursor over the jewel to appreciate its relief",
        tryBtn: "Try On in Virtual Mirror",
        waDirect: "Private Concierge on WhatsApp"
    }
};

let currentLang = localStorage.getItem('jp_lang') || 'es';
let currentCurrency = localStorage.getItem('jp_currency') || 'CLP';
// Luminoso ("light") por defecto para transmitir calma, limpieza y elegancia
let currentTheme = localStorage.getItem('jp_theme') || 'light';
let cart = JSON.parse(localStorage.getItem('jp_cart') || '[]');

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
                <img src="assets/joyas/${j.file}" onerror="this.src='assets/joyas/${j.fallback}'">
                <div style="flex:1">
                    <div style="font-size:0.62rem;color:var(--accent-rose);letter-spacing:0.14em">${j.code}</div>
                    <div style="font-family:'Cormorant Garamond',serif;font-size:1.25rem">${j.title[currentLang]}</div>
                    <div style="font-size:0.78rem;color:var(--text-body)">${p.primary}</div>
                </div>
                <button class="control-pill" onclick="removeFromCart('${j.id}')">✕</button>
            </div>
        `;
    }).join('');

    let disc = cart.length === 2 ? 0.10 : (cart.length >= 3 ? 0.18 : 0);
    const finalCLP = Math.round(subtotal * (1 - disc));
    const totals = formatMoney(finalCLP);
    const waMsg = encodeURIComponent(`Hola, me gustaría adquirir las siguientes obras de la colección de Jorge Pérez: ${names.join(', ')}. Valor total (${Math.round(disc*100)}% bonificación): ${totals.clp} (${totals.usd} / ${totals.eur}).`);

    drawer.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border-hairline);padding-bottom:1.1rem">
            <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:400">${t.cartTitle}</h3>
            <button class="control-pill" onclick="toggleCartDrawer()">✕</button>
        </div>
        <div class="cart-items-list">
            ${cart.length === 0 ? `<p style="color:var(--text-muted);font-size:0.84rem;line-height:1.7">${t.cartEmpty}</p>` : itemsHtml}
        </div>
        <div class="cart-footer">
            <div style="font-size:0.66rem;letter-spacing:0.15em;color:var(--accent-rose);margin-bottom:0.4rem">
                ${disc > 0 ? `${t.cartBonusActive} (${Math.round(disc*100)}%)` : t.cartBonusHint}
            </div>
            <div style="font-family:'Cormorant Garamond',serif;font-size:2rem">${totals.primary}</div>
            <div style="font-size:0.74rem;color:var(--text-muted);margin-bottom:1.3rem">${totals.all}</div>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}" target="_blank" class="btn-luxury btn-soft full-width">
                ${t.cartCheckout}
            </a>
        </div>
    `;
}

function initHomePage() {
    const t = UI_TEXT[currentLang];
    const feat = JEWELS[0];
    const p = formatMoney(feat.priceCLP);
    const box = document.getElementById('hero-featured-jewel');
    if (box) {
        box.innerHTML = `
            <span class="eyebrow">${feat.code} · ${t.featuredTag}</span>
            <img src="assets/joyas/${feat.file}" onerror="this.src='assets/joyas/${feat.fallback}'" alt="${feat.title[currentLang]}">
            <h2 style="font-family:'Cormorant Garamond',serif;font-size:2.2rem;font-weight:400;margin-top:1.2rem">${feat.title[currentLang]}</h2>
            <p style="font-size:0.82rem;color:var(--text-muted);margin:0.5rem 0 1.5rem">${p.all}</p>
            <a href="joya.html?id=01" class="btn-luxury">${t.readStory}</a>
        `;
    }
}

function initCatalogPage(filterCat) {
    const t = UI_TEXT[currentLang];
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const list = filterCat === 'all' ? JEWELS : JEWELS.filter(j => j.category === filterCat);
    list.forEach(item => {
        const p = formatMoney(item.priceCLP);
        const inCart = cart.includes(item.id);
        const card = document.createElement('div');
        card.className = 'jewel-card';

        card.innerHTML = `
            <div>
                <div class="jewel-img-wrap">
                    <img src="assets/joyas/${item.file}" alt="${item.title[currentLang]}" onerror="this.src='assets/joyas/${item.fallback}'">
                </div>
                <span class="eyebrow" style="margin-bottom:0.2rem">${item.code}</span>
                <h3 class="jewel-title">${item.title[currentLang]}</h3>
                <p class="jewel-excerpt">${item.excerpt[currentLang]}</p>
            </div>
            <div>
                <div class="jewel-price-main">${p.primary}</div>
                <div class="jewel-price-sub">${p.all}</div>
                <div class="card-actions">
                    <a href="joya.html?id=${item.id}" class="btn-luxury">${t.readStory}</a>
                    <button class="btn-luxury btn-soft" onclick="addToCart('${item.id}')">${inCart ? t.addedToCart : t.addToCart}</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
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

    const waDirect = encodeURIComponent(`Hola, me interesa adquirir la ${item.code} (${item.title[currentLang]}) del maestro Jorge Pérez (${p.clp} / ${p.usd}).`);

    container.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2.5rem;border-bottom:1px solid var(--border-hairline);padding-bottom:1rem">
            <a href="coleccion.html" class="control-pill">${t.backCat}</a>
            <div style="display:flex;gap:0.8rem">
                <a href="joya.html?id=${prevItem.id}" class="control-pill">← ${prevItem.code}</a>
                <a href="joya.html?id=${nextItem.id}" class="control-pill">${nextItem.code} →</a>
            </div>
        </div>

        <div class="single-jewel-layout">
            <div class="single-jewel-stage" id="single-3d-stage">
                <span class="eyebrow">${item.code} · PIEZA ÚNICA (1 DE 1)</span>
                <img id="single-3d-img" src="assets/joyas/${item.file}" onerror="this.src='assets/joyas/${item.fallback}'" alt="${item.title[currentLang]}">
                <p style="font-size:0.68rem;letter-spacing:0.14em;color:var(--text-muted);margin-top:1.8rem">${t.reliefHint}</p>
            </div>

            <div>
                <span class="eyebrow">JORGE PÉREZ · COLECCIÓN HECHA DE TIEMPO</span>
                <h1 class="page-title" style="margin-bottom:0.4rem">${item.title[currentLang]}</h1>
                <p style="color:var(--accent-rose);font-size:0.84rem;letter-spacing:0.08em;margin-bottom:1.8rem">${item.materials[currentLang]}</p>

                <div style="padding:1.6rem;background:var(--bg-elevated);border:1px solid var(--border-hairline);margin-bottom:2rem;box-shadow:var(--shadow-luxury)">
                    <div style="font-family:'Cormorant Garamond',serif;font-size:2.2rem">${p.primary}</div>
                    <div style="font-size:0.8rem;color:var(--text-muted);margin-top:0.3rem">${p.all}</div>
                </div>

                <div class="story-chapter">
                    <h3>I. Inspiración y Forma</h3>
                    <p>${item.storyPart1[currentLang]}</p>
                    <h3 style="margin-top:1.4rem">II. Carácter Mineral</h3>
                    <p>${item.storyPart2[currentLang]}</p>
                </div>

                <table class="specs-table">
                    <tr><td>Orfebre</td><td>Jorge Pérez (Valparaíso, Chile)</td></tr>
                    <tr><td>Metal Noble</td><td>Plata Ley 950 forjada a mano</td></tr>
                    <tr><td>Gema Austral</td><td>Rodocrosita natural (${item.stoneCut})</td></tr>
                    <tr><td>Dimensiones</td><td>${item.dimensions}</td></tr>
                    <tr><td>Peso</td><td>${item.weight}</td></tr>
                </table>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2.2rem">
                    <button class="btn-luxury btn-soft" onclick="addToCart('${item.id}')">${t.addToCart}</button>
                    <a href="probador.html?id=${item.id}" class="btn-luxury">${t.tryBtn}</a>
                </div>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waDirect}" target="_blank" class="btn-luxury full-width" style="margin-top:0.9rem">
                    ${t.waDirect} (+56 9 5625 8569)
                </a>
            </div>
        </div>
    `;

    const stage = document.getElementById('single-3d-stage');
    const img = document.getElementById('single-3d-img');
    if (stage && img) {
        stage.addEventListener('mousemove', e => {
            const r = stage.getBoundingClientRect();
            const ry = (((e.clientX - r.left) / r.width) - 0.5) * 18;
            const rx = (0.5 - ((e.clientY - r.top) / r.height)) * 18;
            img.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.04)`;
        });
        stage.addEventListener('mouseleave', () => { img.style.transform = 'rotateX(0) rotateY(0) scale(1)'; });
    }
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
            btn.innerHTML = `<img src="assets/joyas/${item.file}" onerror="this.src='assets/joyas/${item.fallback}'"><span>${item.code}</span>`;
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
    arImg.onerror = () => { arImg.src = `assets/joyas/${item.fallback}`; };

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
        alert('Por favor autoriza la cámara en tu navegador para activar el espejo virtual.');
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
                <img src="assets/joyas/${item.file}" onerror="this.src='assets/joyas/${item.fallback}'" style="width:68px;height:68px;object-fit:contain;filter:var(--jewel-drop)">
                <div>
                    <span class="eyebrow" style="margin:0">${item.code}</span>
                    <h4 style="font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:400">${item.title[currentLang]}</h4>
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
        <span class="eyebrow">${cart.length} PIEZAS SELECCIONADAS · ${disc > 0 ? `BONIFICACIÓN DEL ${Math.round(disc*100)}% APLICADA` : 'ELIGE 2 O MÁS PIEZAS PARA ACTIVAR BONIFICACIÓN'}</span>
        <div style="font-size:0.85rem;color:var(--text-muted);text-decoration:${disc>0?'line-through':'none'}">Suma individual: ${before.all}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:2.8rem;margin:0.4rem 0">${after.primary}</div>
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
