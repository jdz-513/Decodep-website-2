import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Hero3DProps {
  hoverState: 'default' | 'company' | 'community';
}

export const Hero3D: React.FC<Hero3DProps> = ({ hoverState }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoverStateRef = useRef(hoverState);

  useEffect(() => {
    hoverStateRef.current = hoverState;
  }, [hoverState]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040814, 0.045);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 14);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x38bdf8, 3, 20);
    blueLight.position.set(-6, 3, 5);
    scene.add(blueLight);

    const goldLight = new THREE.PointLight(0xf59e0b, 3, 20);
    goldLight.position.set(6, -3, 5);
    scene.add(goldLight);

    const centralLight = new THREE.PointLight(0xffffff, 2, 10);
    centralLight.position.set(0, 0, 2);
    scene.add(centralLight);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central DECODEP Nexus Core (Nested Geometric Core)
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x091b3e,
      roughness: 0.2,
      metalness: 0.9,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreMesh);

    // Core Wireframe Lattice
    const coreWireGeo = new THREE.IcosahedronGeometry(1.85, 2);
    const coreWireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreWireMesh = new THREE.Mesh(coreWireGeo, coreWireMat);
    rootGroup.add(coreWireMesh);

    // 2. Orbital Rings (Electric Blue & DECODEP Gold)
    const ring1Geo = new THREE.TorusGeometry(3.2, 0.02, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    rootGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(4.2, 0.025, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    rootGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(5.2, 0.015, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.25,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.z = Math.PI / 5;
    rootGroup.add(ring3);

    // 3. Left Branch: BUILD / COMPANY (Technology & AI Nodes)
    const companyGroup = new THREE.Group();
    companyGroup.position.set(-3.8, 0.5, 0);
    rootGroup.add(companyGroup);

    const companyNodes: THREE.Mesh[] = [];
    const compNodePositions = [
      [-1.2, 1.2, 0.5],
      [-1.8, -0.6, 0.8],
      [-0.6, -1.5, -0.4],
      [-2.4, 0.4, -0.8],
    ];

    compNodePositions.forEach((pos) => {
      const nodeGeo = new THREE.OctahedronGeometry(0.35, 0);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x1d4ed8,
        emissiveIntensity: 0.8,
        roughness: 0.1,
        metalness: 0.9,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(pos[0], pos[1], pos[2]);
      companyGroup.add(nodeMesh);
      companyNodes.push(nodeMesh);
    });

    // 4. Right Branch: GROW / COMMUNITY (Organic Network & Collaborative Nodes)
    const communityGroup = new THREE.Group();
    communityGroup.position.set(3.8, -0.5, 0);
    rootGroup.add(communityGroup);

    const communityNodes: THREE.Mesh[] = [];
    const commNodePositions = [
      [1.2, 1.3, -0.5],
      [1.9, -0.4, 0.6],
      [0.8, -1.4, 0.7],
      [2.5, 0.6, -0.3],
    ];

    commNodePositions.forEach((pos) => {
      const nodeGeo = new THREE.DodecahedronGeometry(0.32, 0);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        emissive: 0xd97706,
        emissiveIntensity: 0.8,
        roughness: 0.2,
        metalness: 0.8,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(pos[0], pos[1], pos[2]);
      communityGroup.add(nodeMesh);
      communityNodes.push(nodeMesh);
    });

    // 5. Connecting Cyber Conduit Lines (from Central Core to Company & Community)
    const lineMatCompany = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
    });
    const compLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-1.8, 0.2, 0),
      new THREE.Vector3(-3.8, 0.5, 0),
    ]);
    const compLine = new THREE.Line(compLineGeo, lineMatCompany);
    rootGroup.add(compLine);

    const lineMatCommunity = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      transparent: true,
      opacity: 0.5,
    });
    const commLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(1.8, -0.2, 0),
      new THREE.Vector3(3.8, -0.5, 0),
    ]);
    const commLine = new THREE.Line(commLineGeo, lineMatCommunity);
    rootGroup.add(commLine);

    // 6. Ambient Dust Particles
    const particleCount = isMobile ? 200 : 500;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      particlePositions[idx] = (Math.random() - 0.5) * 22;
      particlePositions[idx + 1] = (Math.random() - 0.5) * 16;
      particlePositions[idx + 2] = (Math.random() - 0.5) * 14;

      // Half blueish, half golden/white
      if (Math.random() > 0.4) {
        particleColors[idx] = 0.22; // R
        particleColors[idx + 1] = 0.74; // G
        particleColors[idx + 2] = 0.97; // B
      } else {
        particleColors[idx] = 0.96; // R
        particleColors[idx + 1] = 0.62; // G
        particleColors[idx + 2] = 0.04; // B
      }
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.8;
      mouseY = y * 0.6;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window Resize Handler
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const state = hoverStateRef.current;

      if (!prefersReducedMotion) {
        // Base Rotations
        coreMesh.rotation.y = elapsedTime * 0.25;
        coreMesh.rotation.x = elapsedTime * 0.15;

        coreWireMesh.rotation.y = -elapsedTime * 0.3;
        coreWireMesh.rotation.z = elapsedTime * 0.2;

        ring1.rotation.y = elapsedTime * 0.35;
        ring2.rotation.z = elapsedTime * 0.25;
        ring3.rotation.x = -elapsedTime * 0.2;

        // Node rotations & oscillations
        companyNodes.forEach((node, i) => {
          node.rotation.x = elapsedTime * (0.8 + i * 0.2);
          node.rotation.y = elapsedTime * (0.5 + i * 0.3);
          node.position.y += Math.sin(elapsedTime * 2 + i) * 0.002;
        });

        communityNodes.forEach((node, i) => {
          node.rotation.y = elapsedTime * (0.6 + i * 0.2);
          node.rotation.z = elapsedTime * (0.7 + i * 0.15);
          node.position.y += Math.cos(elapsedTime * 2 + i) * 0.002;
        });

        particles.rotation.y = elapsedTime * 0.03;
      }

      // Dynamic Hover State Interpolation
      let targetCameraX = mouseX;
      let targetCameraY = mouseY;
      let targetGroupRotY = 0;
      let targetScaleComp = 1;
      let targetScaleComm = 1;

      if (state === 'company') {
        // Focus on BUILD (tilt towards company)
        targetCameraX = -1.6 + mouseX * 0.5;
        targetGroupRotY = 0.28;
        targetScaleComp = 1.3;
        targetScaleComm = 0.8;
        blueLight.intensity = 5.0;
        goldLight.intensity = 1.5;
        lineMatCompany.opacity = 0.9;
        lineMatCommunity.opacity = 0.2;
      } else if (state === 'community') {
        // Focus on GROW (tilt towards community)
        targetCameraX = 1.6 + mouseX * 0.5;
        targetGroupRotY = -0.28;
        targetScaleComp = 0.8;
        targetScaleComm = 1.3;
        blueLight.intensity = 1.5;
        goldLight.intensity = 5.0;
        lineMatCompany.opacity = 0.2;
        lineMatCommunity.opacity = 0.9;
      } else {
        blueLight.intensity = 3.0;
        goldLight.intensity = 3.0;
        lineMatCompany.opacity = 0.5;
        lineMatCommunity.opacity = 0.5;
      }

      // Smooth Lerp
      targetX += (targetCameraX - targetX) * 0.05;
      targetY += (targetCameraY - targetY) * 0.05;
      camera.position.x = targetX;
      camera.position.y = targetY;
      camera.lookAt(0, 0, 0);

      rootGroup.rotation.y += (targetGroupRotY - rootGroup.rotation.y) * 0.05;

      companyGroup.scale.lerp(new THREE.Vector3(targetScaleComp, targetScaleComp, targetScaleComp), 0.08);
      communityGroup.scale.lerp(new THREE.Vector3(targetScaleComm, targetScaleComm, targetScaleComm), 0.08);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      // Clean up Three.js memory
      coreGeo.dispose();
      coreMat.dispose();
      coreWireGeo.dispose();
      coreWireMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
