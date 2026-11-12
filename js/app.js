let currentLang = localStorage.getItem('jp_lang') || 'es';
let currentCurrency = localStorage.getItem('jp_currency') || 'CLP';
let currentTheme = localStorage.getItem('jp_theme') || 'dark';
let cart = JSON.parse(localStorage.getItem('jp_cart') || '[]');

document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    renderSharedHeaderAndCart();
    updateStaticTranslations();

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
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) btn.textContent = theme === 'dark' ? '☀ Modo Claro' : '☾ Modo Oscuro';
    if (window.update3DTheme) window.update3DTheme(theme);
}

function toggleTheme() {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
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
    const header = document.getElementById('shared-navbar');
    if (header) {
        header.innerHTML = `
            <a href="index.html" class="brand">
                <span class="brand-name">JORGE PÉREZ</span>
                <span class="brand-sub">ALTA JOYERÍA · VALPARAÍSO, CHILE</span>
            </a>
            <nav class="nav-links">
                <a href="index.html" class="${page==='home'?'active':''}">Portada</a>
                <a href="coleccion.html" class="${page==='catalog'||page==='single'?'active':''}">Catálogo (9 Piezas)</a>
                <a href="probador.html" class="${page==='tryon'?'active':''}">Mídete las Joyas</a>
                <a href="coleccionistas.html" class="${page==='promos'?'active':''}">Compra y Promociones</a>
                <a href="orfebre.html" class="${page==='artist'?'active':''}">El Orfebre</a>
            </nav>
            <div class="controls">
                <div class="lang-switch">
                    <button onclick="setLanguage('es')" class="${currentLang==='es'?'active':''}">ES</button>·
                    <button onclick="setLanguage('fr')" class="${currentLang==='fr'?'active':''}">FR</button>·
                    <button onclick="setLanguage('en')" class="${currentLang==='en'?'active':''}">EN</button>
                </div>
                <select class="control-pill" onchange="setCurrency(this.value)" aria-label="Divisa">
                    <option value="CLP" ${currentCurrency==='CLP'?'selected':''}>CLP $</option>
                    <option value="USD" ${currentCurrency==='USD'?'selected':''}>USD $</option>
                    <option value="EUR" ${currentCurrency==='EUR'?'selected':''}>EUR €</option>
                </select>
                <button id="theme-toggle-btn" class="control-pill" onclick="toggleTheme()">
                    ${currentTheme === 'dark' ? '☀ Modo Claro' : '☾ Modo Oscuro'}
                </button>
                <button class="control-pill" onclick="toggleAudio()" id="audio-btn">♪ Saxofón</button>
                <button class="control-pill active" onclick="toggleCartDrawer()">
                    Cofre (<span id="cart-count">${cart.length}</span>)
                </button>
            </div>
        `;
    }

    const drawer = document.getElementById('shared-cart-drawer');
    if (drawer) {
        updateCartUI();
    }
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
        names.push(`${j.code}: ${j.title[currentLang]}`);
        const p = formatMoney(j.priceCLP);
        return `
            <div class="cart-item">
                <img src="assets/joyas/${j.file}" onerror="this.src='assets/joyas/${j.fallback}'">
                <div style="flex:1">
                    <div style="font-size:0.65rem;color:var(--accent-rose)">${j.code}</div>
                    <div style="font-family:'Cormorant Garamond',serif;font-size:1.2rem">${j.title[currentLang]}</div>
                    <div style="font-size:0.78rem;color:var(--text-secondary)">${p.primary}</div>
                </div>
                <button class="control-pill" onclick="removeFromCart('${j.id}')">✕</button>
            </div>
        `;
    }).join('');

    let disc = 0;
    if (cart.length === 2) disc = 0.10;
    if (cart.length >= 3) disc = 0.18;

    const finalCLP = Math.round(subtotal * (1 - disc));
    const totals = formatMoney(finalCLP);
    const waMsg = encodeURIComponent(`Hola, deseo adquirir las siguientes piezas del catálogo de Jorge Pérez: ${names.join(', ')}. Total con bonificación (${Math.round(disc*100)}%): ${totals.clp} (${totals.usd} / ${totals.eur}).`);

    drawer.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border-subtle);padding-bottom:1rem">
            <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.7rem;font-weight:400">Cofre de Adquisición</h3>
            <button class="control-pill" onclick="toggleCartDrawer()">Cerrar ✕</button>
        </div>
        <div class="cart-items-list">
            ${cart.length === 0 ? '<p style="color:var(--text-muted);font-size:0.85rem">Aún no has seleccionado piezas únicas en tu cofre.</p>' : itemsHtml}
        </div>
        <div class="cart-footer">
            <div style="font-size:0.7rem;letter-spacing:0.16em;color:var(--accent-rose);margin-bottom:0.4rem">
                ${disc > 0 ? `BONIFICACIÓN COLECCIONISTA ${Math.round(disc*100)}% APLICADA` : 'SELECCIONA 2 PIEZAS PARA 10% O 3 PARA 18% DE BONIFICACIÓN'}
            </div>
            <div style="font-size:1.35rem;font-weight:500">${totals.primary}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:1.2rem">${totals.all}</div>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}" target="_blank" class="btn-luxury full-width">
                Finalizar Adquisición por WhatsApp
            </a>
        </div>
    `;
}

// 1. Inicializador Portada (index.html)
function initHomePage() {
    const feat = JEWELS[0];
    const p = formatMoney(feat.priceCLP);
    const box = document.getElementById('hero-featured-jewel');
    if (box) {
        box.innerHTML = `
            <span class="eyebrow">${feat.code} · OBRA DESTACADA</span>
            <img src="assets/joyas/${feat.file}" onerror="this.src='assets/joyas/${feat.fallback}'" alt="${feat.title[currentLang]}">
            <h2 style="font-family:'Cormorant Garamond',serif;font-size:2.1rem;font-weight:400;margin-top:1rem">${feat.title[currentLang]}</h2>
            <p style="font-size:0.85rem;color:var(--text-secondary);margin:0.5rem 0 1.2rem">${p.all}</p>
            <a href="joya.html?id=01" class="btn-luxury">Leer la Historia de esta Pieza</a>
        `;
    }
}

// 2. Inicializador Catálogo (coleccion.html)
function initCatalogPage(filterCat) {
    const grid = document.getElementById('catalog-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const list = filterCat === 'all' ? JEWELS : JEWELS.filter(j => j.category === filterCat);
    list.forEach(item => {
        const p = formatMoney(item.priceCLP);
        const card = document.createElement('div');
        card.className = 'jewel-card';

        card.addEventListener('mousemove', e => {
            const r = card.getBoundingClientRect();
            const ry = (((e.clientX - r.left) / r.width) - 0.5) * 18;
            const rx = (0.5 - ((e.clientY - r.top) / r.height)) * 18;
            card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-5px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0) rotateY(0) translateY(0)';
        });

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
                    <a href="joya.html?id=${item.id}" class="btn-luxury">Historia y Ficha</a>
                    <button class="btn-luxury btn-rose" onclick="addToCart('${item.id}')">+ Añadir al Cofre</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 3. Inicializador Página Individual por Joya (joya.html?id=XX)
function initSingleJewelPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || '01';
    const item = JEWELS.find(j => j.id === id) || JEWELS[0];
    const idx = JEWELS.indexOf(item);
    const prevItem = JEWELS[(idx - 1 + JEWELS.length) % JEWELS.length];
    const nextItem = JEWELS[(idx + 1) % JEWELS.length];
    const p = formatMoney(item.priceCLP);

    const container = document.getElementById('single-jewel-container');
    if (!container) return;

    const waDirect = encodeURIComponent(`Hola, estoy en la página individual de la ${item.code} (${item.title[currentLang]}) de Jorge Pérez y deseo coordinar su adquisición (${p.clp} / ${p.usd}).`);

    container.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem;border-bottom:1px solid var(--border-subtle);padding-bottom:1rem">
            <a href="coleccion.html" class="control-pill">← Volver al Catálogo Completo</a>
            <div style="display:flex;gap:0.8rem">
                <a href="joya.html?id=${prevItem.id}" class="control-pill">← ${prevItem.code}</a>
                <a href="joya.html?id=${nextItem.id}" class="control-pill">${nextItem.code} →</a>
            </div>
        </div>

        <div class="single-jewel-layout">
            <div class="single-jewel-stage" id="single-3d-stage">
                <span class="eyebrow">${item.code} · PIEZA ÚNICA NUMERADA</span>
                <img id="single-3d-img" src="assets/joyas/${item.file}" onerror="this.src='assets/joyas/${item.fallback}'" alt="${item.title[currentLang]}">
                <p style="font-size:0.7rem;letter-spacing:0.2em;color:var(--accent-rose);margin-top:1.5rem">DESLIZA EL CURSOR PARA INSPECCIONAR EL RELIEVE 3D</p>
            </div>

            <div>
                <span class="eyebrow">COLECCIÓN HECHA DE TIEMPO · JORGE PÉREZ</span>
                <h1 class="page-title" style="margin-bottom:0.4rem">${item.title[currentLang]}</h1>
                <p style="color:var(--accent-rose);font-size:0.85rem;letter-spacing:0.1em;margin-bottom:1.5rem">${item.materials[currentLang]}</p>

                <div style="padding:1.4rem;background:var(--bg-secondary);border:1px solid var(--border-subtle);margin-bottom:2rem">
                    <div style="font-size:1.65rem;font-weight:500">${p.primary}</div>
                    <div style="font-size:0.82rem;color:var(--text-muted);margin-top:0.3rem">Equivalencia internacional: ${p.all}</div>
                </div>

                <div class="story-chapter">
                    <h3>I. Génesis e Inspiración Escultórica</h3>
                    <p>${item.storyPart1[currentLang]}</p>
                    <h3 style="margin-top:1.2rem">II. Simbolismo Mineral y Porte</h3>
                    <p>${item.storyPart2[currentLang]}</p>
                </div>

                <table class="specs-table">
                    <tr><td>Autor</td><td>Jorge Pérez (Taller de Valparaíso, Chile)</td></tr>
                    <tr><td>Aleación Metálica</td><td>Plata Ley 950 fundida y forjada manualmente</td></tr>
                    <tr><td>Gema Principal</td><td>Rodocrosita natural seleccionada (${item.stoneCut})</td></tr>
                    <tr><td>Dimensiones</td><td>${item.dimensions}</td></tr>
                    <tr><td>Peso Orfebre</td><td>${item.weight}</td></tr>
                    <tr><td>Edición</td><td>Ejemplar Único (1 de 1) con Certificado Firmado</td></tr>
                </table>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:2rem">
                    <button class="btn-luxury btn-rose" onclick="addToCart('${item.id}')">+ Añadir al Cofre de Compra</button>
                    <a href="probador.html?id=${item.id}" class="btn-luxury">Probar con Cámara en Vivo</a>
                </div>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waDirect}" target="_blank" class="btn-luxury full-width" style="margin-top:1rem">
                    Adquirir directamente por WhatsApp (+56 9 5625 8569)
                </a>
            </div>
        </div>
    `;

    const stage = document.getElementById('single-3d-stage');
    const img = document.getElementById('single-3d-img');
    if (stage && img) {
        stage.addEventListener('mousemove', e => {
            const r = stage.getBoundingClientRect();
            const ry = (((e.clientX - r.left) / r.width) - 0.5) * 28;
            const rx = (0.5 - ((e.clientY - r.top) / r.height)) * 28;
            img.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.06)`;
        });
        stage.addEventListener('mouseleave', () => { img.style.transform = 'rotateX(0) rotateY(0) scale(1)'; });
    }
}

// 4. Inicializador Probador Virtual (probador.html)
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
        alert('Autoriza el permiso de cámara en tu navegador para activar el espejo en vivo.');
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

// 5. Inicializador Página de Promociones y Conjuntos (coleccionistas.html)
function initPromosPage() {
    const grid = document.getElementById('promo-selector-grid');
    if (!grid) return;
    grid.innerHTML = '';

    JEWELS.forEach(item => {
        const p = formatMoney(item.priceCLP);
        const isSelected = cart.includes(item.id);
        const card = document.createElement('div');
        card.className = 'pillar-card';
        card.style.borderColor = isSelected ? 'var(--accent-rose)' : 'var(--border-subtle)';
        card.innerHTML = `
            <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1rem">
                <img src="assets/joyas/${item.file}" onerror="this.src='assets/joyas/${item.fallback}'" style="width:68px;height:68px;object-fit:contain">
                <div>
                    <span class="eyebrow" style="margin:0">${item.code}</span>
                    <h4 style="font-family:'Cormorant Garamond',serif;font-size:1.35rem">${item.title[currentLang]}</h4>
                    <span style="font-size:0.8rem;color:var(--text-secondary)">${p.primary}</span>
                </div>
            </div>
            <button class="btn-luxury full-width ${isSelected ? 'btn-rose' : ''}" onclick="togglePromoSelection('${item.id}')">
                ${isSelected ? '✓ Seleccionada en tu Conjunto' : '+ Incluir en mi Conjunto'}
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
    const msg = encodeURIComponent(`Hola, he configurado en la página de Coleccionistas el siguiente conjunto de Jorge Pérez (${cart.length} piezas): ${names.join(', ')}. Total con ${Math.round(disc*100)}% de bonificación: ${after.clp} (${after.usd} / ${after.eur}).`);

    box.innerHTML = `
        <span class="eyebrow">${cart.length} PIEZAS SELECCIONADAS · ${disc > 0 ? `BONIFICACIÓN DEL ${Math.round(disc*100)}% ACTIVA` : 'AÑADE 2 O MÁS PIEZAS PARA ACTIVAR BONIFICACIÓN'}</span>
        <div style="font-size:0.9rem;color:var(--text-muted);text-decoration:${disc>0?'line-through':'none'}">Valor individual acumulado: ${before.all}</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:2.6rem;margin:0.4rem 0">${after.primary}</div>
        <div style="font-size:0.88rem;color:var(--accent-rose);margin-bottom:1.5rem">Equivalencia final: ${after.all}</div>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${msg}" target="_blank" class="btn-luxury btn-rose">
            Solicitar Reserva Oficial de este Conjunto (+56 9 5625 8569)
        </a>
    `;
}

// Reproductor de Saxofón Ambiental (WebAudio Jazz + MP3 si existe)
let audioCtx = null, isPlayingAudio = false;
function toggleAudio() {
    const audioEl = document.getElementById('bg-music');
    const btn = document.getElementById('audio-btn');
    if (audioEl && audioEl.canPlayType('audio/mpeg')) {
        if (audioEl.paused) {
            audioEl.volume = 0.25;
            audioEl.play().then(() => { btn.classList.add('active'); }).catch(() => {});
            return;
        } else {
            audioEl.pause();
            btn.classList.remove('active');
            return;
        }
    }
}

function updateStaticTranslations() {}
