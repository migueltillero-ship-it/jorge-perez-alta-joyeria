// Fondo Escultórico en Perspectiva usando las Joyas Reales de la Colección
(function initJewelPerspectiveBackground() {
    const stage = document.getElementById('floating-jewels-bg');
    if (!stage || typeof JEWELS === 'undefined') return;

    // Seleccionamos 4 piezas representativas de la colección para flotar en distintas profundidades
    const layers = [
        { jewel: JEWELS[0], depthClass: 'depth-near', top: '12%', left: '6%', factorX: 28, factorY: 22, rot: -8 },
        { jewel: JEWELS[8], depthClass: 'depth-mid',  top: '58%', left: '78%', factorX: -20, factorY: 18, rot: 12 },
        { jewel: JEWELS[4], depthClass: 'depth-far',  top: '16%', left: '74%', factorX: 14, factorY: -14, rot: 6 },
        { jewel: JEWELS[6], depthClass: 'depth-far',  top: '68%', left: '10%', factorX: -12, factorY: -16, rot: -10 }
    ];

    const elements = [];

    layers.forEach(cfg => {
        const img = document.createElement('img');
        img.className = `bg-jewel-layer ${cfg.depthClass}`;
        img.src = `assets/joyas/${cfg.jewel.file}`;
        img.onerror = () => { img.src = `assets/joyas/${cfg.jewel.fallback}`; };
        img.style.top = cfg.top;
        img.style.left = cfg.left;
        img.style.transform = `translate3d(0px, 0px, 0px) rotate(${cfg.rot}deg)`;
        stage.appendChild(img);
        elements.push({ el: img, cfg });
    });

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    window.addEventListener('mousemove', (e) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animatePerspective() {
        currentX += (targetX - currentX) * 0.04;
        currentY += (targetY - currentY) * 0.04;

        const scrollOffset = window.scrollY * 0.04;

        elements.forEach(({ el, cfg }) => {
            const dx = currentX * cfg.factorX;
            const dy = currentY * cfg.factorY - (scrollOffset * (cfg.factorY / 20));
            const r = cfg.rot + (currentX * 4);
            el.style.transform = `translate3d(${dx}px, ${dy}px, 0px) rotate(${r}deg)`;
        });

        requestAnimationFrame(animatePerspective);
    }
    animatePerspective();
})();
