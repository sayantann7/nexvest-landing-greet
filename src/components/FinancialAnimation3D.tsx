
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const FinancialAnimation3D: React.FC = () => {
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
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    
    // Set camera position
    camera.position.z = 5;
    
    // Create financial-themed objects
    
    // 1. Create a group for coin stack
    const coinGroup = new THREE.Group();
    scene.add(coinGroup);
    
    // Create multiple gold coins
    const coinGeometry = new THREE.CylinderGeometry(1, 1, 0.1, 32);
    const coinMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFD700,
      metalness: 0.7,
      roughness: 0.3
    });
    
    // Create a stack of coins
    for (let i = 0; i < 8; i++) {
      const coin = new THREE.Mesh(coinGeometry, coinMaterial);
      coin.position.y = i * 0.12;
      coin.scale.set(0.4, 1, 0.4);
      coin.rotation.x = Math.PI / 2;
      coinGroup.add(coin);
      
      // Add edge detail to coins
      const edgeGeometry = new THREE.TorusGeometry(1, 0.05, 16, 100);
      const edgeMaterial = new THREE.MeshStandardMaterial({
        color: 0xDAA520,
        metalness: 0.8,
        roughness: 0.2
      });
      const edge = new THREE.Mesh(edgeGeometry, edgeMaterial);
      edge.rotation.x = Math.PI / 2;
      edge.scale.set(0.4, 0.4, 1);
      coin.add(edge);
      
      // Add embossed $ symbol
      if (i % 2 === 0) { // Add to every other coin to reduce complexity
        const dollarGeometry = new THREE.TextGeometry('$', {
          font: new THREE.Font(), // Placeholder - we'll use a circle instead
          size: 0.5,
          height: 0.02,
        });
        
        // Fallback to circle since TextGeometry requires font loading
        const symbolGeometry = new THREE.CircleGeometry(0.25, 32);
        const symbolMaterial = new THREE.MeshStandardMaterial({
          color: 0xDAA520,
          metalness: 0.9,
          roughness: 0.1
        });
        const symbol = new THREE.Mesh(symbolGeometry, symbolMaterial);
        symbol.position.set(0, 0, 0.05);
        symbol.rotation.x = -Math.PI / 2;
        coin.add(symbol);
      }
    }
    
    // Position the coin stack
    coinGroup.position.set(-2, -1, 0);
    
    // 2. Create a stock chart line using points
    const stockChartGroup = new THREE.Group();
    scene.add(stockChartGroup);
    
    // Generate chart points (upward trend line)
    const chartPoints = [];
    for (let i = 0; i < 20; i++) {
      // Create an upward trend with some randomness
      const x = (i / 19) * 4 - 2; // Range from -2 to 2
      const trendValue = (i / 19) * 1.5; // Base upward trend
      const randomness = (Math.random() - 0.5) * 0.3; // Some randomness
      const y = trendValue + randomness;
      chartPoints.push(new THREE.Vector3(x, y, 0));
    }
    
    // Create the chart line
    const chartLineGeometry = new THREE.BufferGeometry().setFromPoints(chartPoints);
    const chartLineMaterial = new THREE.LineBasicMaterial({
      color: 0x4CAF50, // Green for rising stocks
      linewidth: 3
    });
    const chartLine = new THREE.Line(chartLineGeometry, chartLineMaterial);
    stockChartGroup.add(chartLine);
    
    // Add points at each data point
    const pointGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const pointMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF });
    
    chartPoints.forEach((point) => {
      const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
      pointMesh.position.copy(point);
      stockChartGroup.add(pointMesh);
    });
    
    // Position the chart
    stockChartGroup.position.set(1, 0.5, 0);
    stockChartGroup.rotation.z = Math.PI * 0.05; // Slight tilt
    
    // 3. Create a floating house representing real estate investment
    const houseGroup = new THREE.Group();
    scene.add(houseGroup);
    
    // House base
    const baseGeometry = new THREE.BoxGeometry(1, 0.6, 1);
    const houseMaterial = new THREE.MeshStandardMaterial({
      color: 0xE0E0E0,
      metalness: 0.1,
      roughness: 0.8
    });
    const houseBase = new THREE.Mesh(baseGeometry, houseMaterial);
    houseGroup.add(houseBase);
    
    // House roof
    const roofGeometry = new THREE.ConeGeometry(0.8, 0.5, 4);
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: 0xFF5252,
      metalness: 0.1,
      roughness: 0.8
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 0.55;
    roof.rotation.y = Math.PI / 4; // Align the square base
    houseGroup.add(roof);
    
    // Add a door
    const doorGeometry = new THREE.PlaneGeometry(0.2, 0.3);
    const doorMaterial = new THREE.MeshBasicMaterial({ color: 0x795548 });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, -0.15, 0.51);
    houseGroup.add(door);
    
    // Add windows
    const windowGeometry = new THREE.PlaneGeometry(0.15, 0.15);
    const windowMaterial = new THREE.MeshBasicMaterial({
      color: 0xAED6F1,
      transparent: true,
      opacity: 0.7
    });
    
    // Left window
    const leftWindow = new THREE.Mesh(windowGeometry, windowMaterial);
    leftWindow.position.set(-0.25, 0.1, 0.51);
    houseGroup.add(leftWindow);
    
    // Right window
    const rightWindow = new THREE.Mesh(windowGeometry, windowMaterial);
    rightWindow.position.set(0.25, 0.1, 0.51);
    houseGroup.add(rightWindow);
    
    // Position house
    houseGroup.position.set(2.5, -0.5, -1);
    houseGroup.scale.set(0.7, 0.7, 0.7);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 2);
    scene.add(directionalLight);
    
    // Animation variables
    let frame = 0;
    
    // Animation loop
    const animate = () => {
      frame += 0.01;
      
      // Animate coin stack
      coinGroup.rotation.y = frame * 0.5;
      coinGroup.position.y = Math.sin(frame) * 0.1 - 0.7;
      
      // Animate chart (make it "draw" itself)
      const chartLine = stockChartGroup.children[0] as THREE.Line;
      const numPoints = chartPoints.length;
      const animatedPoints = chartPoints.slice(0, Math.min(numPoints, Math.floor((Math.sin(frame) + 1) / 2 * numPoints) + 1));
      chartLine.geometry.dispose();
      chartLine.geometry = new THREE.BufferGeometry().setFromPoints(animatedPoints);
      
      // Make chart points pulse
      stockChartGroup.children.forEach((child, index) => {
        if (index > 0) { // Skip the line itself
          child.scale.setScalar(1 + Math.sin(frame * 3 + index * 0.2) * 0.2);
        }
      });
      
      // Animate house (floating and spinning slowly)
      houseGroup.rotation.y = frame * 0.3;
      houseGroup.position.y = Math.sin(frame * 1.5) * 0.1 - 0.5;
      
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
    
    // Clean up
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
  
  return <div ref={mountRef} className="w-full h-full" />;
};

export default FinancialAnimation3D;
