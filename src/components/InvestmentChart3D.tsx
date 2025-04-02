
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Slider } from '@/components/ui/slider';
import { motion } from 'framer-motion';

interface InvestmentData {
  regularFund: {
    value: number;
    color: string;
  };
  directFund: {
    value: number;
    color: string;
  };
  years: number;
  monthlyInvestment: number;
}

const InvestmentChart3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  
  // Investment parameters
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(7000);
  const [years] = useState<number>(25);
  
  // Chart data
  const [investmentData, setInvestmentData] = useState<InvestmentData>({
    regularFund: {
      value: 1.43,
      color: '#36A2EB'
    },
    directFund: {
      value: 1.68,
      color: '#6366F1'
    },
    years: 25,
    monthlyInvestment: 7000
  });

  // Calculate investment growth based on parameters
  useEffect(() => {
    // Simple compound interest calculation
    const regularInterestRate = 0.1; // 10% annual return
    const directInterestRate = 0.11; // 11% annual return (1% higher)
    
    // Convert monthly investment to annual and calculate
    const annualInvestment = monthlyInvestment * 12;
    
    // Calculate compound growth for both funds over the years
    const regularFundValue = calculateCompoundInterest(annualInvestment, regularInterestRate, years);
    const directFundValue = calculateCompoundInterest(annualInvestment, directInterestRate, years);
    
    // Convert to Cr (crore) format
    const regularValueCr = regularFundValue / 10000000;
    const directValueCr = directFundValue / 10000000;
    
    setInvestmentData({
      ...investmentData,
      regularFund: {
        ...investmentData.regularFund,
        value: parseFloat(regularValueCr.toFixed(2))
      },
      directFund: {
        ...investmentData.directFund,
        value: parseFloat(directValueCr.toFixed(2))
      },
      monthlyInvestment
    });
  }, [monthlyInvestment, years]);

  // Calculate compound interest
  const calculateCompoundInterest = (principal: number, rate: number, time: number): number => {
    return principal * (Math.pow((1 + rate), time) - 1) / rate;
  };

  // Calculate extra earnings
  const extraEarnings = Math.round((investmentData.directFund.value - investmentData.regularFund.value) * 10000000 / 100000);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#f0fafa');

    // Setup camera
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 5, 12);
    camera.lookAt(0, 0, 0);

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Add ground plane
    const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xeeeeee,
      side: THREE.DoubleSide
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = Math.PI / 2;
    ground.position.y = -0.01;
    ground.receiveShadow = true;
    scene.add(ground);

    // Create a grid
    const gridHelper = new THREE.GridHelper(20, 20, 0x000000, 0xcccccc);
    gridHelper.position.y = 0;
    scene.add(gridHelper);

    // Add orbit controls for user interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.minPolarAngle = 0.5;  // Restrict vertical rotation
    controls.maxPolarAngle = Math.PI / 2 - 0.1;
    controls.minDistance = 5;
    controls.maxDistance = 25;
    controls.target.set(0, 2, 0);
    controlsRef.current = controls;

    // Add 3D chart elements
    const createChart = () => {
      // Calculate maxHeight for scaling
      const maxValue = Math.max(investmentData.directFund.value, investmentData.regularFund.value);
      const heightScale = 5 / maxValue; // Scale to make the tallest bar 5 units high
      
      // Regular fund bar
      const regularBarGeometry = new THREE.BoxGeometry(1.5, investmentData.regularFund.value * heightScale, 1.5);
      const regularBarMaterial = new THREE.MeshStandardMaterial({ 
        color: investmentData.regularFund.color,
        transparent: true,
        opacity: 0.8
      });
      const regularBar = new THREE.Mesh(regularBarGeometry, regularBarMaterial);
      regularBar.position.set(-2, investmentData.regularFund.value * heightScale / 2, 0);
      regularBar.castShadow = true;
      scene.add(regularBar);
      
      // Direct fund bar
      const directBarGeometry = new THREE.BoxGeometry(1.5, investmentData.directFund.value * heightScale, 1.5);
      const directBarMaterial = new THREE.MeshStandardMaterial({ 
        color: investmentData.directFund.color,
        transparent: true,
        opacity: 0.8
      });
      const directBar = new THREE.Mesh(directBarGeometry, directBarMaterial);
      directBar.position.set(2, investmentData.directFund.value * heightScale / 2, 0);
      directBar.castShadow = true;
      scene.add(directBar);

      // Add glowing edges to the bars
      const addGlowingEdges = (bar: THREE.Mesh, color: string) => {
        const edges = new THREE.EdgesGeometry(bar.geometry);
        const lineMaterial = new THREE.LineBasicMaterial({ 
          color: new THREE.Color(color).addScalar(0.4),
          linewidth: 2
        });
        const wireframe = new THREE.LineSegments(edges, lineMaterial);
        bar.add(wireframe);
      };

      addGlowingEdges(regularBar, investmentData.regularFund.color);
      addGlowingEdges(directBar, investmentData.directFund.color);

      // Create growth curve
      const curvePoints = [];
      for (let i = 0; i <= years; i++) {
        // Calculate direct fund growth for each year
        const yearValue = calculateCompoundInterest(monthlyInvestment * 12, 0.11, i) / 10000000;
        const scaledHeight = yearValue * heightScale;
        
        // Position x from -5 to 5 along the years
        const x = (i / years * 10) - 5;
        curvePoints.push(new THREE.Vector3(x, scaledHeight, -3));
      }

      const curveGeometry = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const curveMaterial = new THREE.LineBasicMaterial({ color: 0x00a651, linewidth: 3 });
      const curve = new THREE.Line(curveGeometry, curveMaterial);
      scene.add(curve);

      // Add animated particles along the curve
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x00a651,
        size: 0.15,
        transparent: true,
        opacity: 0.8
      });

      const particles = new THREE.Points(curveGeometry, particleMaterial);
      scene.add(particles);

      return { regularBar, directBar, curve, particles };
    };

    // Store meshes so we can update them later
    let chartMeshes = createChart();

    // Add text labels (using HTML overlay since Three.js text is complex)
    const addLabelsOverlay = () => {
      const labelsContainer = document.createElement('div');
      labelsContainer.style.position = 'absolute';
      labelsContainer.style.top = '0';
      labelsContainer.style.left = '0';
      labelsContainer.style.width = '100%';
      labelsContainer.style.height = '100%';
      labelsContainer.style.pointerEvents = 'none';
      labelsContainer.className = 'labels-container';
      
      mountRef.current?.appendChild(labelsContainer);
      
      // Will be handled by HTML/CSS overlay
      return labelsContainer;
    };
    
    const labelsContainer = addLabelsOverlay();

    // Animation loop
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update controls
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      // Animate particles along curve
      if (chartMeshes.particles) {
        const particleMaterial = chartMeshes.particles.material as THREE.PointsMaterial;
        particleMaterial.size = 0.15 + Math.sin(frame * 0.05) * 0.05;
        frame += 0.1;
      }
      
      renderer.render(scene, camera);
    };
    
    // Start animation
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Function to update chart when investment data changes
    const updateChart = () => {
      // Remove old chart elements
      if (chartMeshes.regularBar) scene.remove(chartMeshes.regularBar);
      if (chartMeshes.directBar) scene.remove(chartMeshes.directBar);
      if (chartMeshes.curve) scene.remove(chartMeshes.curve);
      if (chartMeshes.particles) scene.remove(chartMeshes.particles);
      
      // Create new chart with updated data
      chartMeshes = createChart();
    };
    
    // Watch for changes in investment data
    const investmentDataWatcher = setInterval(() => {
      updateChart();
    }, 1000); // Check every second

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(investmentDataWatcher);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      if (labelsContainer && mountRef.current) {
        mountRef.current.removeChild(labelsContainer);
      }
      
      // Dispose of Three.js objects
      scene.clear();
      renderer.dispose();
    };
  }, [investmentData, monthlyInvestment, years]);

  return (
    <div className="relative w-full">
      <div ref={mountRef} className="w-full h-96 rounded-lg overflow-hidden mb-4" />
      
      <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Monthly SIP</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">₹</span>
          <Slider
            value={[monthlyInvestment]}
            min={1000}
            max={50000}
            step={1000}
            onValueChange={(value) => setMonthlyInvestment(value[0])}
            className="w-64"
          />
          <span className="text-lg font-semibold">{monthlyInvestment.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="absolute bottom-24 left-4 right-4 flex justify-between">
        <motion.div 
          className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: investmentData.directFund.color }}></div>
            <span className="text-sm">Direct fund</span>
          </div>
          <div className="font-bold">₹{investmentData.directFund.value} Cr</div>
        </motion.div>
        
        <motion.div 
          className="bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: investmentData.regularFund.color }}></div>
            <span className="text-sm">Regular fund</span>
          </div>
          <div className="font-bold">₹{investmentData.regularFund.value} Cr</div>
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="text-xl text-indigo-600 font-bold">
          ₹{extraEarnings} lakhs
          <span className="text-base text-gray-600 font-normal ml-2">
            extra earnings in {years} yrs with Direct funds
          </span>
        </div>
        <div className="mt-2">
          <span className="text-gray-500 text-sm cursor-pointer hover:text-nexvest-green transition-colors">
            See how this works
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default InvestmentChart3D;
