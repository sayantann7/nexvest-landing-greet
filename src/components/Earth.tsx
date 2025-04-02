import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

const EarthComponent = () => {
  const containerRef = useRef(null);
  const earthRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const { scrollYProgress } = useScroll();
  
  // Transform scrollYProgress to x position with increased speed
  const xPosition = useTransform(scrollYProgress, [0, 1], [0, -300]); // Faster movement (-300 instead of -100)
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Setup scene
    const scene = new THREE.Scene();
    
    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;
    
    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    containerRef.current.appendChild(renderer.domElement);
    
    // Load textures
    const textureLoader = new THREE.TextureLoader();
    
    // For simplicity, we'll use different roles for your textures
    const cloudTexture = textureLoader.load('/earth/color.jpg'); // From your first image
    const normalMap = textureLoader.load('/earth/normal.jpg');    // From your second image
    const maskMap = textureLoader.load('/earth/occlusion.jpg');      // From your third image
    
    // Create Earth with material
    const earthGeometry = new THREE.SphereGeometry(1, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: maskMap,
      normalMap: normalMap,
      specularMap: maskMap,
      shininess: 5,
    });
    
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);
    
    // Create clouds
    const cloudGeometry = new THREE.SphereGeometry(1.02, 64, 64);
    const cloudMaterial = new THREE.MeshPhongMaterial({
      map: cloudTexture,
      transparent: true,
      opacity: 0.4,
    });
    
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    scene.add(clouds);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    
    // Initial rotation values
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Auto rotation (slower when user is interacting)
      if (!isDraggingRef.current) {
        targetRotationY += 0.001;
      }
      
      // Smooth interpolation for rotation
      currentRotationX += (targetRotationX - currentRotationX) * 0.1;
      currentRotationY += (targetRotationY - currentRotationY) * 0.1;
      
      earth.rotation.x = currentRotationX;
      earth.rotation.y = currentRotationY;
      clouds.rotation.x = currentRotationX * 0.9;
      clouds.rotation.y = currentRotationY * 1.1; // Clouds rotate slightly faster
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Mouse event handlers
    const handleMouseDown = (event) => {
      isDraggingRef.current = true;
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    const handleMouseMove = (event) => {
      if (!isDraggingRef.current) return;
      
      const newMouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const newMouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      const deltaX = newMouseX - mouseRef.current.x;
      const deltaY = newMouseY - mouseRef.current.y;
      
      targetRotationY += deltaX * 3; // Increased sensitivity
      targetRotationX += deltaY * 2; // Increased sensitivity
      
      // Limit vertical rotation to avoid flipping
      targetRotationX = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, targetRotationX));
      
      mouseRef.current.x = newMouseX;
      mouseRef.current.y = newMouseY;
    };
    
    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };
    
    const handleTouchStart = (event) => {
      if (event.touches.length === 1) {
        isDraggingRef.current = true;
        mouseRef.current.x = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };
    
    const handleTouchMove = (event) => {
      if (!isDraggingRef.current || event.touches.length !== 1) return;
      
      const newMouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
      const newMouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
      
      const deltaX = newMouseX - mouseRef.current.x;
      const deltaY = newMouseY - mouseRef.current.y;
      
      targetRotationY += deltaX * 3;
      targetRotationX += deltaY * 2;
      
      targetRotationX = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, targetRotationX));
      
      mouseRef.current.x = newMouseX;
      mouseRef.current.y = newMouseY;
    };
    
    const handleTouchEnd = () => {
      isDraggingRef.current = false;
    };
    
    // Add event listeners
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Save reference to earth for animation
    earthRef.current = {
      earth,
      clouds,
      scene,
      camera,
      renderer,
      targetRotation: { x: targetRotationX, y: targetRotationY }
    };
    
    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Update earth position on scroll with increased movement speed
  useEffect(() => {
    return scrollYProgress.onChange(latest => {
      if (!earthRef.current) return;
      
      // Move earth based on scroll position (faster movement)
      earthRef.current.earth.position.x = latest * -6; // Increased from -3 to -6
      earthRef.current.clouds.position.x = latest * -6;
    });
  }, [scrollYProgress]);
  
  return (
    <motion.div 
      ref={containerRef} 
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%', 
        height: '100vh',
        x: xPosition,
      }}
      className="earth-container"
    />
  );
};

export default EarthComponent;