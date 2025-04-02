
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Initialize variables for scene, camera, renderer
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let animationFrameId: number;
    let particles: THREE.Points;

    // Get the current size of the container
    const width = mountRef.current?.clientWidth || window.innerWidth;
    const height = mountRef.current?.clientHeight || window.innerHeight;
    
    // Setup scene
    scene = new THREE.Scene();
    
    // Setup camera
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    
    // Setup renderer
    renderer = new THREE.WebGLRenderer({ 
      alpha: true, // Make background transparent
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    
    // Add renderer to DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create particle system for a financial/investment theme
    const particleCount = 1000;
    const particles_geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    // Generate random particles with a cluster-like distribution
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Create clusters for more interesting visual
      const cluster = Math.floor(Math.random() * 5);
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 3 + (cluster * 0.5);
      
      positions[i] = Math.cos(angle) * radius; // x
      positions[i + 1] = Math.sin(angle) * radius - 1; // y
      positions[i + 2] = (Math.random() - 0.5) * 5; // z
      
      // Green shades for NexVest theme
      colors[i] = 0.2; // r
      colors[i + 1] = 0.8 + Math.random() * 0.2; // g (green dominant)
      colors[i + 2] = 0.2; // b
    }
    
    particles_geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles_geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const particles_material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    });
    
    particles = new THREE.Points(particles_geometry, particles_material);
    scene.add(particles);
    
    // Animation function
    const animate = () => {
      // Rotate particles slowly for subtle movement
      particles.rotation.y += 0.001;
      particles.rotation.z += 0.0005;
      
      // Effect for particles - simulating data flow
      const positions = particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Small random movement for "floating" effect
        positions[i] += Math.random() * 0.002 - 0.001; // x
        positions[i + 1] += Math.random() * 0.002 - 0.001; // y
        positions[i + 2] += Math.random() * 0.002 - 0.001; // z
      }
      particles.geometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      const width = mountRef.current?.clientWidth || window.innerWidth;
      const height = mountRef.current?.clientHeight || window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    
    // Start animation
    animate();
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      window.cancelAnimationFrame(animationFrameId);
      mountRef.current?.removeChild(renderer.domElement);
      particles_geometry.dispose();
      particles_material.dispose();
      renderer.dispose();
    };
  }, []);
  
  return <div ref={mountRef} className="absolute inset-0 pointer-events-none z-10" />;
};

export default ThreeAnimation;
