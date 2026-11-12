(function initJewelPerspectiveBackground() {
    const stage = document.getElementById('floating-jewels-bg');
    if (!stage || typeof JEWELS === 'undefined') return;

    const layers = [
        { jewel: JEWELS[0], top: '12%', left: '5%', size: '340px', fx: 22, fy: 18, rot: -8 },
        { jewel: JEWELS[8], top: '60%', left: '78%', size: '300px', fx: -18, fy: 15, rot: 12 },
        { jewel: JEWELS[4], top: '18%', left: '75%', size: '240px', fx: 14, fy: -14, rot: 6 },
        { jewel: JEWELS[6], top: '68%', left: '8%', size: '250px', fx: -12, fy: -16, rot: -10 }
    ];

    const els = [];
    layers.forEach(cfg => {
        const img = document.createElement('img');
        img.className = 'bg-jewel-layer';
        img.src = `assets/joyas/${cfg.jewel.file}`;
        img.onerror = () => { img.src = `assets/joyas/${cfg.jewel.fallback}`; };
        img.style.top = cfg.top;
        img.style.left = cfg.left;
        img.style.width = cfg.size;
        stage.appendChild(img);
        els.push({ el: img, cfg });
    });

    let tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', e => {
        tx = (e.clientX / window.innerWidth - 0.5) * 2;
        ty = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function loop() {
        cx += (tx - cx) * 0.04;
        cy += (ty - cy) * 0.04;
        els.forEach(({ el, cfg }) => {
            el.style.transform = `translate3d(${cx * cfg.fx}px, ${cy * cfg.fy}px, 0) rotate(${cfg.rot + cx * 3}deg)`;
        });
        requestAnimationFrame(loop);
    }
    loop();
})();
