// Lienzo 3D Dinámico de Alta Joyería (Partículas de Plata y Rodocrosita + Órbitas Escultóricas)
(function initLuxury3DBackground() {
    const canvas = document.getElementById('webgl-bg');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 26;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    // Geometría de polvo mineral en suspensión
    const count = 420;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorSilver = new THREE.Color(0xD8DCE3);
    const colorRose = new THREE.Color(0xCE8992);

    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 55;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 38;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 28;

        const c = i % 3 === 0 ? colorRose : colorSilver;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
        size: 0.16,
        vertexColors: true,
        transparent: true,
        opacity: 0.55
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Dos aros orbitales finos que evocan el hilo de plata ley 950
    const ringGeo1 = new THREE.TorusGeometry(11, 0.025, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xCE8992, transparent: true, opacity: 0.22 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = 1.1;
    group.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(15.5, 0.02, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xD8DCE3, transparent: true, opacity: 0.16 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = 0.8;
    group.add(ring2);

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.update3DTheme = function(theme) {
        if (theme === 'light') {
            particleMat.opacity = 0.35;
            ringMat1.color.setHex(0xA65662);
            ringMat2.color.setHex(0x71717A);
        } else {
            particleMat.opacity = 0.58;
            ringMat1.color.setHex(0xCE8992);
            ringMat2.color.setHex(0xD8DCE3);
        }
    };

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.0007;
        particles.rotation.x += 0.0003;
        ring1.rotation.z += 0.0012;
        ring2.rotation.x -= 0.0009;

        group.rotation.y += (mouseX * 0.18 - group.rotation.y) * 0.03;
        group.rotation.x += (-mouseY * 0.12 - group.rotation.x) * 0.03;

        renderer.render(scene, camera);
    }
    animate();
})();
