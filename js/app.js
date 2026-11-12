let currentLang = 'es';
let selectedBundle = new Set(['01', '02']);

document.addEventListener('DOMContentLoaded', async () => {
    await syncWithSupabaseIfConfigured();
    renderCatalog();
    renderTryOnThumbs();
    renderBundleBuilder();
    initArDrag();
    setupAudio();
    SelectTryOnJewel(JEWELS[0]);
});

async function syncWithSupabaseIfConfigured() {
    if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) return;
    try {
        const res = await fetch(`${SUPABASE_CONFIG.url}/rest/v1/joyas_catalogo?select=*`, {
            headers: { apikey: SUPABASE_CONFIG.anonKey, Authorization: `Bearer ${SUPABASE_CONFIG.anonKey}` }
        });
        if (res.ok) {
            const rows = await res.json();
            rows.forEach(r => {
                const item = JEWELS.find(j => j.id === r.id);
                if (item && r.precio_clp) item.priceCLP = r.precio_clp;
            });
        }
    } catch (e) {}
}

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-switch button').forEach(b => b.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (TRANSLATIONS[lang][key]) el.textContent = TRANSLATIONS[lang][key];
    });
    renderCatalog();
    renderTryOnThumbs();
    renderBundleBuilder();
}

function renderCatalog() {
    const grid = document.getElementById('catalog-grid');
    grid.innerHTML = '';

    JEWELS.forEach(item => {
        const p = formatCurrency(item.priceCLP);
        const card = document.createElement('div');
        card.className = 'jewel-card';
        card.onclick = () => openModal(item);

        // Efecto 3D Interactivo al mover el cursor
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotY = ((x / rect.width) - 0.5) * 22;
            const rotX = ((0.5 - (y / rect.height))) * 22;
            card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
            const glare = card.querySelector('.jewel-glare');
            if (glare) glare.style.background = `radial-gradient(circle at ${(x/rect.width)*100}% ${(y/rect.height)*100}%, rgba(255,255,255,0.22), transparent 60%)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0)';
        });

        card.innerHTML = `
            <div class="jewel-glare"></div>
            <div class="jewel-img-wrap">
                <img src="assets/joyas/${item.file}" alt="${item.title[currentLang]}" onerror="this.src='assets/joyas/${item.fallback}'">
            </div>
            <span class="jewel-code">${item.code}</span>
            <h3 class="jewel-title">${item.title[currentLang]}</h3>
            <p class="jewel-story-snippet">${item.desc[currentLang].substring(0, 95)}...</p>
            <div class="jewel-price-clp">${p.clp}</div>
            <div class="jewel-price-sub">${p.usd} · ${p.eur}</div>
        `;
        grid.appendChild(card);
    });
}

// Probador Virtual con Cámara (WebRTC)
async function startCamera() {
    const video = document.getElementById('webcam-video');
    const placeholder = document.getElementById('camera-placeholder');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' }, audio: false });
        video.srcObject = stream;
        placeholder.style.display = 'none';
    } catch (err) {
        alert('Para usar el espejo virtual, permite el acceso a la cámara en tu navegador.');
    }
}

function renderTryOnThumbs() {
    const box = document.getElementById('tryon-thumbs');
    box.innerHTML = '';
    JEWELS.forEach((item, idx) => {
        const btn = document.createElement('div');
        btn.className = 'thumb-btn' + (idx === 0 ? ' active' : '');
        btn.onclick = () => {
            document.querySelectorAll('.thumb-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            SelectTryOnJewel(item);
        };
        btn.innerHTML = `
            <img src="assets/joyas/${item.file}" onerror="this.src='assets/joyas/${item.fallback}'">
            <span>${item.code}</span>
        `;
        box.appendChild(btn);
    });
}

function SelectTryOnJewel(item) {
    const arImg = document.getElementById('ar-jewel-img');
    arImg.src = `assets/joyas/${item.file}`;
    arImg.onerror = () => { arImg.src = `assets/joyas/${item.fallback}`; };
    const p = formatCurrency(item.priceCLP);
    document.getElementById('ar-info-title').textContent = `${item.code} · ${item.title[currentLang]}`;
    document.getElementById('ar-info-price').textContent = `${p.clp} (${p.usd} · ${p.eur})`;
    const msg = encodeURIComponent(`Hola, acabo de probarme virtualmente la ${item.code} (${item.title[currentLang]}) en el catálogo de Jorge Pérez y me gustaría consultar su disponibilidad.`);
    document.getElementById('ar-whatsapp-btn').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function updateArScale(val) {
    document.getElementById('ar-jewel-wrapper').style.width = `${val}px`;
}

function initArDrag() {
    const stage = document.getElementById('camera-stage');
    const jewel = document.getElementById('ar-jewel-wrapper');
    let dragging = false;

    const move = (clientX, clientY) => {
        if (!dragging) return;
        const rect = stage.getBoundingClientRect();
        const x = Math.max(40, Math.min(rect.width - 40, clientX - rect.left));
        const y = Math.max(40, Math.min(rect.height - 40, clientY - rect.top));
        jewel.style.left = `${x}px`;
        jewel.style.top = `${y}px`;
    };

    jewel.addEventListener('mousedown', () => dragging = true);
    window.addEventListener('mouseup', () => dragging = false);
    window.addEventListener('mousemove', e => move(e.clientX, e.clientY));

    jewel.addEventListener('touchstart', () => dragging = true, { passive: true });
    window.addEventListener('touchend', () => dragging = false);
    window.addEventListener('touchmove', e => {
        if (e.touches[0]) move(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
}

// Calculadora de Promociones por Compra Múltiple
function renderBundleBuilder() {
    const container = document.getElementById('bundle-Checkboxes');
    container.innerHTML = '';
    JEWELS.forEach(item => {
        const label = document.createElement('label');
        label.className = 'bundle-item';
        const checked = selectedBundle.has(item.id) ? 'checked' : '';
        label.innerHTML = `
            <input type="checkbox" ${checked} onchange="toggleBundleItem('${item.id}', this.checked)">
            <span>${item.code} · ${item.title[currentLang]}</span>
        `;
        container.appendChild(label);
    });
    updateBundleSummary();
}

function toggleBundleItem(id, isChecked) {
    if (isChecked) selectedBundle.add(id);
    else selectedBundle.delete(id);
    updateBundleSummary();
}

function updateBundleSummary() {
    let subtotal = 0;
    const names = [];
    JEWELS.forEach(item => {
        if (selectedBundle.has(item.id)) {
            subtotal += item.priceCLP;
            names.push(`${item.code} (${item.title[currentLang]})`);
        }
    });

    const count = selectedBundle.size;
    let discountRate = 0;
    if (count === 2) discountRate = 0.10;
    else if (count >= 3) discountRate = 0.18;

    const finalCLP = Math.round(subtotal * (1 - discountRate));
    const formatted = formatCurrency(finalCLP);
    const badgeText = discountRate > 0 ? `${count} PIEZAS · BONIFICACIÓN ${Math.round(discountRate * 100)}% APLICADA` : `${count} PIEZA SELECCIONADA`;

    document.getElementById('bundle-status').textContent = badgeText;
    document.getElementById('bundle-clp').textContent = formatted.clp;
    document.getElementById('bundle-sub').textContent = `${formatted.usd} · ${formatted.eur}`;

    const waText = encodeURIComponent(`Hola, me interesa adquirir el siguiente conjunto del catálogo de Jorge Pérez: ${names.join(', ')}. Valor con bonificación aplicada: ${formatted.clp} (${formatted.usd}).`);
    document.getElementById('bundle-wa-btn').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;
}

function openModal(item) {
    const p = formatCurrency(item.priceCLP);
    const imgEl = document.getElementById('modal-img');
    imgEl.src = `assets/joyas/${item.file}`;
    imgEl.onerror = () => { imgEl.src = `assets/joyas/${item.fallback}`; };

    document.getElementById('modal-code').textContent = item.code;
    document.getElementById('modal-title').textContent = item.title[currentLang];
    document.getElementById('modal-materials').textContent = item.materials[currentLang];
    document.getElementById('modal-desc').textContent = item.desc[currentLang];
    document.getElementById('modal-clp').textContent = p.clp;
    document.getElementById('modal-usd').textContent = p.usd;
    document.getElementById('modal-eur').textContent = p.eur;

    const msg = encodeURIComponent(`Hola, me interesa recibir información privada sobre la ${item.code}: ${item.title[currentLang]} (${p.clp}) de Jorge Pérez.`);
    document.getElementById('modal-inquire').href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

    const box3d = document.getElementById('modal-3d-box');
    box3d.onmousemove = e => {
        const r = box3d.getBoundingClientRect();
        const ry = (((e.clientX - r.left) / r.width) - 0.5) * 28;
        const rx = (0.5 - ((e.clientY - r.top) / r.height)) * 28;
        imgEl.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.06)`;
    };
    box3d.onmouseleave = () => { imgEl.style.transform = 'rotateX(0) rotateY(0) scale(1)'; };

    document.getElementById('jewel-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('jewel-modal').classList.add('hidden');
}

// Reproductor de Saxofón (MP3 + Respaldo WebAudio Jazz Chord si no hay archivo MP3 aún)
function setupAudio() {
    const audio = document.getElementById('bg-music');
    const btn = document.getElementById('audio-toggle');
    audio.volume = 0.28;

    btn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => btn.classList.add('playing')).catch(() => {});
        } else {
            audio.pause();
            btn.classList.remove('playing');
        }
    });
}
