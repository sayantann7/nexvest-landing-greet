
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
    let particleSystem: THREE.Points;
    let lineSystems: THREE.Line[] = [];
    let cubes: THREE.Mesh[] = [];
    
    // Get the current size of the container
    const width = mountRef.current?.clientWidth || window.innerWidth;
    const height = mountRef.current?.clientHeight || window.innerHeight;
    
    // Setup scene
    scene = new THREE.Scene();
    
    // Setup camera
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 10;
    
    // Setup renderer
    renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    
    // Add renderer to DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create particles (stars)
    const createParticles = () => {
      const particleCount = 1000;
      const particles_geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 2);
      const colors = new Float32Array(particleCount * 2);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        // Distribute particles in a sphere
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 4 + Math.random() * 8;
        
        positions[i] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i + 2] = radius * Math.cos(phi);
        
        // Mix of green and blue colors for finance theme
        const colorChoice = Math.random();
        if (colorChoice < 0.6) {
          // Green shades (brand color)
          colors[i] = 0.1 + Math.random() * 0.2;
          colors[i + 1] = 0.6 + Math.random() * 0.4;
          colors[i + 2] = 0.1 + Math.random() * 0.2;
        } else if (colorChoice < 0.9) {
          // Blue shades (professional)
          colors[i] = 0.1;
          colors[i + 1] = 0.4 + Math.random() * 0.3;
          colors[i + 2] = 0.6 + Math.random() * 0.4;
        } else {
          // Gold/yellow accent (financial success)
          colors[i] = 0.8 + Math.random() * 0.2;
          colors[i + 1] = 0.7 + Math.random() * 0.3;
          colors[i + 2] = 0.1;
        }
      }
      
      particles_geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particles_geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const particles_material = new THREE.PointsMaterial({
        size: 0.06,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
      });
      
      particleSystem = new THREE.Points(particles_geometry, particles_material);
      scene.add(particleSystem);
    };
    
    // Create connections between particles (representing networks/connections)
    const createConnections = () => {
      // Create 12 random connection lines
      for (let i = 0; i < 12; i++) {
        const points = [];
        
        // Start point
        const startTheta = Math.random() * Math.PI * 2;
        const startPhi = Math.acos(2 * Math.random() - 1);
        const startRadius = 4 + Math.random() * 6;
        
        const startX = startRadius * Math.sin(startPhi) * Math.cos(startTheta);
        const startY = startRadius * Math.sin(startPhi) * Math.sin(startTheta);
        const startZ = startRadius * Math.cos(startPhi);
        
        // End point
        const endTheta = Math.random() * Math.PI * 2;
        const endPhi = Math.acos(2 * Math.random() - 1);
        const endRadius = 4 + Math.random() * 6;
        
        const endX = endRadius * Math.sin(endPhi) * Math.cos(endTheta);
        const endY = endRadius * Math.sin(endPhi) * Math.sin(endTheta);
        const endZ = endRadius * Math.cos(endPhi);
        
        // Create curved path with control points
        for (let j = 0; j <= 20; j++) {
          const t = j / 20;
          
          // Intermediate point for curve
          const midX = startX + (endX - startX) * t;
          const midY = startY + (endY - startY) * t + Math.sin(t * Math.PI) * 1.5;
          const midZ = startZ + (endZ - startZ) * t;
          
          points.push(new THREE.Vector3(midX, midY, midZ));
        }
        
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        
        // Choose color based on position (for variety)
        let lineMaterial;
        if (i % 3 === 0) {
          // Green (primary brand color)
          lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0x4CAF50, 
            transparent: true,
            opacity: 0.4 + Math.random() * 0.3
          });
        } else if (i % 3 === 1) {
          // Blue
          lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0x2196F3, 
            transparent: true,
            opacity: 0.4 + Math.random() * 0.3
          });
        } else {
          // Gold
          lineMaterial = new THREE.LineBasicMaterial({ 
            color: 0xFFD700, 
            transparent: true,
            opacity: 0.4 + Math.random() * 0.3
          });
        }
        
        const line = new THREE.Line(lineGeometry, lineMaterial);
        lineSystems.push(line);
        scene.add(line);
      }
    };
    
    // Add some floating data cubes (representing financial data/blocks)
    const createDataCubes = () => {
      for (let i = 0; i < 6; i++) {
        const size = 0.2 + Math.random() * 0.3;
        
        // Position at random points around the sphere
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const radius = 6 + Math.random() * 4;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        
        const geometry = new THREE.BoxGeometry(size, size, size);
        
        // Choose color based on position
        let material;
        if (i % 3 === 0) {
          // Green (semi-transparent)
          material = new THREE.MeshBasicMaterial({ 
            color: 0x4CAF50,
            transparent: true,
            opacity: 0.7
          });
        } else if (i % 3 === 1) {
          // Blue (semi-transparent)  
          material = new THREE.MeshBasicMaterial({ 
            color: 0x2196F3,
            transparent: true,
            opacity: 0.7
          });
        } else {
          // Gold (semi-transparent)
          material = new THREE.MeshBasicMaterial({ 
            color: 0xFFD700,
            transparent: true,
            opacity: 0.7
          });
        }
        
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x, y, z);
        
        // Store random rotation values for animation
        cube.userData = {
          rotSpeedX: (Math.random() - 0.5) * 0.01,
          rotSpeedY: (Math.random() - 0.5) * 0.01,
          floatSpeed: 0.005 + Math.random() * 0.01,
          floatDistance: 0.2 + Math.random() * 0.3,
          initialY: y,
          floatOffset: Math.random() * Math.PI * 2
        };
        
        cubes.push(cube);
        scene.add(cube);
      }
    };
    
    // Initialize all visual elements
    createParticles();
    // createConnections();
    // createDataCubes();
    
    // Animation function
    const animate = () => {
      // Rotate particle system slowly
      if (particleSystem) {
        particleSystem.rotation.y += 0.0003;
        particleSystem.rotation.x += 0.0001;
      }
      
      // Animate data cubes
      cubes.forEach(cube => {
        const userData = cube.userData;
        
        // Rotation
        cube.rotation.x += userData.rotSpeedX;
        cube.rotation.y += userData.rotSpeedY;
        
        // Floating motion
        cube.position.y = userData.initialY + 
          Math.sin(Date.now() * 0.001 * userData.floatSpeed + userData.floatOffset) * 
          userData.floatDistance;
      });
      
      // Animate connection lines (pulse effect)
      lineSystems.forEach((line, index) => {
        const material = line.material as THREE.LineBasicMaterial;
        material.opacity = 0.2 + 
          Math.sin(Date.now() * 0.001 + index * 0.5) * 0.25;
      });
      
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
      
      // Clean up all scene objects
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      scene.clear();
      
      // Dispose of geometries and materials
      if (particleSystem) {
        particleSystem.geometry.dispose();
        (particleSystem.material as THREE.Material).dispose();
      }
      
      lineSystems.forEach(line => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
      
      cubes.forEach(cube => {
        cube.geometry.dispose();
        (cube.material as THREE.Material).dispose();
      });
      
      renderer.dispose();
    };
  }, []);
  
  return <div ref={mountRef} className="absolute inset-0 pointer-events-none z-10" />;
};

export default ThreeAnimation;
