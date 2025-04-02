
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const HeroFinancial3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    
    if (!mountRef.current) return;
    
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0.2); // Slight dark background
    mountRef.current.appendChild(renderer.domElement);
    
    // Set camera position
    camera.position.z = 5;
    
    // Create financial-themed objects
    
    // Building group representing financial institution
    const buildingGroup = new THREE.Group();
    scene.add(buildingGroup);
    
    // Main building
    const buildingGeometry = new THREE.BoxGeometry(2, 3, 2);
    const buildingMaterial = new THREE.MeshStandardMaterial({
      color: 0xD8D8D8,
      metalness: 0.7,
      roughness: 0.3
    });
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    buildingGroup.add(building);
    
    // Windows
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 3; j++) {
        const windowGeometry = new THREE.PlaneGeometry(0.2, 0.3);
        const windowMaterial = new THREE.MeshStandardMaterial({
          color: 0x88CCEE,
          emissive: 0x88CCEE,
          emissiveIntensity: 0.5,
          transparent: true,
          opacity: 0.8
        });
        const windowPane = new THREE.Mesh(windowGeometry, windowMaterial);
        windowPane.position.set(-0.6 + j * 0.6, -1 + i * 0.7, 1.01);
        building.add(windowPane);
      }
    }
    
    // Building top
    const topGeometry = new THREE.ConeGeometry(1.5, 1, 4);
    const topMaterial = new THREE.MeshStandardMaterial({
      color: 0x00a651, // NexVest green
      metalness: 0.8,
      roughness: 0.2
    });
    const buildingTop = new THREE.Mesh(topGeometry, topMaterial);
    buildingTop.rotation.y = Math.PI / 4; // Rotate to align with building
    buildingTop.position.y = 2;
    buildingGroup.add(buildingTop);
    
    // Financial charts floating around
    const chartGroup = new THREE.Group();
    scene.add(chartGroup);
    chartGroup.position.set(-2, 0, 0);
    
    // Chart base
    const chartBaseGeometry = new THREE.BoxGeometry(1.5, 0.1, 0.8);
    const chartBaseMaterial = new THREE.MeshStandardMaterial({
      color: 0xC0C0C0,
    });
    const chartBase = new THREE.Mesh(chartBaseGeometry, chartBaseMaterial);
    chartGroup.add(chartBase);
    
    // Chart bars
    const barColors = [0x00a651, 0x4287f5, 0x00a651, 0x4287f5, 0x00a651];
    for (let i = 0; i < 5; i++) {
      const height = 0.5 + Math.random() * 1;
      const barGeometry = new THREE.BoxGeometry(0.2, height, 0.3);
      const barMaterial = new THREE.MeshStandardMaterial({
        color: barColors[i],
        transparent: true,
        opacity: 0.8
      });
      const bar = new THREE.Mesh(barGeometry, barMaterial);
      bar.position.set(-0.6 + i * 0.3, height / 2, 0);
      chartBase.add(bar);
    }
    
    // Add floating coins
    const coinGroup = new THREE.Group();
    scene.add(coinGroup);
    coinGroup.position.set(2, 0.5, 0);
    
    // Create gold coins
    for (let i = 0; i < 5; i++) {
      const coinGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.05, 32);
      const coinMaterial = new THREE.MeshStandardMaterial({
        color: 0xFFD700,
        metalness: 0.8,
        roughness: 0.2
      });
      const coin = new THREE.Mesh(coinGeometry, coinMaterial);
      coin.position.set(
        (Math.random() - 0.5) * 2,
        i * 0.3,
        (Math.random() - 0.5) * 2
      );
      coin.rotation.x = Math.PI / 2;
      coinGroup.add(coin);
      
      // Add edge detail
      const edgeGeometry = new THREE.TorusGeometry(0.4, 0.03, 16, 100);
      const edgeMaterial = new THREE.MeshStandardMaterial({
        color: 0xDAA520,
        metalness: 0.8,
        roughness: 0.2
      });
      const edge = new THREE.Mesh(edgeGeometry, edgeMaterial);
      edge.rotation.x = Math.PI / 2;
      coin.add(edge);
      
      // Add $ symbol using a simple circle
      const symbolGeometry = new THREE.CircleGeometry(0.15, 32);
      const symbolMaterial = new THREE.MeshStandardMaterial({
        color: 0xDAA520,
        metalness: 0.9,
        roughness: 0.1
      });
      const symbol = new THREE.Mesh(symbolGeometry, symbolMaterial);
      symbol.position.set(0, 0, 0.03);
      coin.add(symbol);
    }
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 2);
    scene.add(directionalLight);
    
    // Animation loop
    let frame = 0;
    
    const animate = () => {
      frame += 0.01;
      
      // Rotate building slightly
      buildingGroup.rotation.y = Math.sin(frame * 0.5) * 0.2;
      
      // Float chart up and down
      chartGroup.position.y = Math.sin(frame) * 0.2;
      chartGroup.rotation.y = frame * 0.2;
      
      // Spin coins
      coinGroup.children.forEach((coin, index) => {
        coin.rotation.z = frame * (0.5 + index * 0.1);
        coin.position.y = Math.sin(frame + index) * 0.2 + (index * 0.3);
      });
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    
    // Start animation
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      className="w-full h-full flex items-center justify-center" 
      style={{ minHeight: '100%' }}
    />
  );
};

export default HeroFinancial3D;
