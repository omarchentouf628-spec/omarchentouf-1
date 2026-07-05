import React, { useRef, useEffect, useState, useCallback } from 'react';
import { 
  RotateCw, 
  RefreshCw, 
  Layers 
} from 'lucide-react';

export type MaterialPreset = 'obsidian' | 'electric' | 'velvet' | 'cyber' | 'hologram';

interface Logo3DCanvasProps {
  className?: string;
  initialPreset?: MaterialPreset;
}

interface Vertex3D {
  x: number;
  y: number;
  z: number;
}

interface Face3D {
  indices: number[];
  color: string;
  normal?: Vertex3D;
  isCore?: boolean;
}

export const Logo3DCanvas: React.FC<Logo3DCanvasProps> = ({ 
  className = '', 
  initialPreset = 'obsidian' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Control states
  const [preset, setPreset] = useState<MaterialPreset>(initialPreset);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [speed] = useState<number>(1.0);
  const [rimLight] = useState<number>(85);
  const [zoom, setZoom] = useState<number>(1.0);
  
  // UI states
  const [fps, setFps] = useState<number>(60);
  const [rotAngle, setRotAngle] = useState<{ x: number; y: number }>({ x: 15, y: 45 });

  useEffect(() => {
    setPreset(initialPreset);
  }, [initialPreset]);

  // References for smooth animation & dragging
  const angleRef = useRef<{ x: number; y: number; z: number }>({ x: 0.3, y: 0.8, z: 0 });
  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const velocityRef = useRef<{ x: number; y: number }>({ x: 0.01, y: 0.015 });

  // Presets styling config
  const getPresetConfig = useCallback(() => {
    switch (preset) {
      case 'obsidian':
        return {
          baseColor: [24, 24, 32],
          highlightColor: [138, 43, 226],
          coreColor: [192, 132, 252],
          wireColor: 'rgba(138, 43, 226, 0.4)',
          ambient: 0.25,
          shininess: 4.0,
          bgGradient: ['#0d0d12', '#151020', '#0a0a0f']
        };
      case 'electric':
        return {
          baseColor: [110, 20, 200],
          highlightColor: [216, 180, 254],
          coreColor: [255, 255, 255],
          wireColor: 'rgba(216, 180, 254, 0.7)',
          ambient: 0.45,
          shininess: 6.0,
          bgGradient: ['#130a24', '#2a0e52', '#0c0716']
        };
      case 'velvet':
        return {
          baseColor: [15, 15, 18],
          highlightColor: [100, 100, 120],
          coreColor: [138, 43, 226],
          wireColor: 'rgba(255, 255, 255, 0.2)',
          ambient: 0.15,
          shininess: 1.5,
          bgGradient: ['#08080a', '#101014', '#050507']
        };
      case 'cyber':
        return {
          baseColor: [40, 30, 10],
          highlightColor: [251, 191, 36],
          coreColor: [255, 237, 74],
          wireColor: 'rgba(251, 191, 36, 0.5)',
          ambient: 0.35,
          shininess: 5.0,
          bgGradient: ['#120d05', '#241a08', '#0b0803']
        };
      case 'hologram':
        return {
          baseColor: [30, 60, 90],
          highlightColor: [56, 189, 248],
          coreColor: [232, 121, 249],
          wireColor: 'rgba(56, 189, 248, 0.6)',
          ambient: 0.5,
          shininess: 8.0,
          bgGradient: ['#09131a', '#13283a', '#0a1017']
        };
    }
  }, [preset]);

  // Construct Haytem Media 3D Emblem Geometry (3D Faceted Chevron Shield - The Iconic Agency Emblem)
  const buildGeometry = () => {
    const vertices: Vertex3D[] = [];
    
    // Front Facet Perimeter (Z = +20)
    vertices.push({ x: 0, y: -145, z: 20 });     // 0: Front Top Apex
    vertices.push({ x: 135, y: 115, z: 20 });    // 1: Front Right Wing Tip
    vertices.push({ x: 0, y: 42, z: 20 });       // 2: Front Center Notch Apex
    vertices.push({ x: -135, y: 115, z: 20 });   // 3: Front Left Wing Tip
    
    // Front Center Spine Apex (Protruding forward to Z = +56 for 3D gem relief)
    vertices.push({ x: 0, y: -15, z: 56 });      // 4: Front Center Ridge Apex

    // Back Facet Perimeter (Z = -20)
    vertices.push({ x: 0, y: -145, z: -20 });    // 5: Back Top Apex
    vertices.push({ x: 135, y: 115, z: -20 });   // 6: Back Right Wing Tip
    vertices.push({ x: 0, y: 42, z: -20 });      // 7: Back Center Notch Apex
    vertices.push({ x: -135, y: 115, z: -20 });  // 8: Back Left Wing Tip
    
    // Back Center Spine Apex (Protruding backward to Z = -56)
    vertices.push({ x: 0, y: -15, z: -56 });     // 9: Back Center Ridge Apex

    // Inner Floating Energy Crystal (Octahedron at center of the emblem)
    const cr = 38;
    const cd = 44;
    vertices.push({ x: 0, y: -15 - cr, z: 0 });  // 10: Core Top
    vertices.push({ x: cr, y: -15, z: 0 });      // 11: Core Right
    vertices.push({ x: 0, y: -15 + cr, z: 0 });  // 12: Core Bottom
    vertices.push({ x: -cr, y: -15, z: 0 });     // 13: Core Left
    vertices.push({ x: 0, y: -15, z: cd });      // 14: Core Front Apex
    vertices.push({ x: 0, y: -15, z: -cd });     // 15: Core Back Apex

    const faces: Face3D[] = [
      // Front Shield Facets (4 triangular planes radiating from protruding center ridge)
      { indices: [0, 1, 4], color: 'front' },
      { indices: [1, 2, 4], color: 'front' },
      { indices: [2, 3, 4], color: 'front' },
      { indices: [3, 0, 4], color: 'front' },

      // Back Shield Facets (4 triangular planes on the reverse)
      { indices: [5, 9, 6], color: 'back' },
      { indices: [6, 9, 7], color: 'back' },
      { indices: [7, 9, 8], color: 'back' },
      { indices: [8, 9, 5], color: 'back' },

      // Extruded Side Bevel Walls (Connecting front perimeter to back perimeter)
      { indices: [0, 5, 6, 1], color: 'side_light' }, // Right Outer Diagonal Edge
      { indices: [1, 6, 7, 2], color: 'side_dark' },  // Right Inner Notch Edge
      { indices: [2, 7, 8, 3], color: 'side_mid' },   // Left Inner Notch Edge
      { indices: [3, 8, 5, 0], color: 'side_dark' },  // Left Outer Diagonal Edge

      // Inner Floating Crystal Core (Front Pyramid)
      { indices: [10, 11, 14], color: 'core_bright', isCore: true },
      { indices: [11, 12, 14], color: 'core_mid', isCore: true },
      { indices: [12, 13, 14], color: 'core_dark', isCore: true },
      { indices: [13, 10, 14], color: 'core_mid', isCore: true },

      // Inner Floating Crystal Core (Back Pyramid)
      { indices: [11, 10, 15], color: 'core_mid', isCore: true },
      { indices: [12, 11, 15], color: 'core_dark', isCore: true },
      { indices: [13, 12, 15], color: 'core_mid', isCore: true },
      { indices: [10, 13, 15], color: 'core_bright', isCore: true },
    ];

    return { vertices, faces };
  };

  // Main 3D Rendering Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    let frameCount = 0;
    let fpsTimer = performance.now();

    const { vertices: initialVertices, faces } = buildGeometry();
    const config = getPresetConfig();

    const render = (now: number) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // FPS tracking
      frameCount++;
      if (now - fpsTimer >= 500) {
        setFps(Math.round((frameCount * 1000) / (now - fpsTimer)));
        frameCount = 0;
        fpsTimer = now;
      }

      // Handle Canvas sizing
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }
      ctx.save();
      ctx.scale(dpr, dpr);
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;

      // Draw rich atmospheric background
      const bgGrad = ctx.createRadialGradient(
        centerX, centerY, 20,
        centerX, centerY, Math.max(width, height) * 0.7
      );
      bgGrad.addColorStop(0, config.bgGradient[0]);
      bgGrad.addColorStop(0.5, config.bgGradient[1]);
      bgGrad.addColorStop(1, config.bgGradient[2]);
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Subtle ambient grid pattern
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update rotation
      if (autoRotate && !isDraggingRef.current) {
        angleRef.current.y += 0.015 * speed;
        angleRef.current.x = 0.3 + Math.sin(now * 0.001 * speed) * 0.15;
        angleRef.current.z = Math.cos(now * 0.0008 * speed) * 0.08;
      } else if (!isDraggingRef.current) {
        // Inertial damping when let go
        angleRef.current.y += velocityRef.current.y;
        angleRef.current.x += velocityRef.current.x;
        velocityRef.current.x *= 0.93;
        velocityRef.current.y *= 0.93;
      }

      setRotAngle({
        x: Math.round((angleRef.current.x * 180) / Math.PI),
        y: Math.round((angleRef.current.y * 180) / Math.PI)
      });

      // Rotation matrices
      const cx = Math.cos(angleRef.current.x);
      const sx = Math.sin(angleRef.current.x);
      const cy = Math.cos(angleRef.current.y);
      const sy = Math.sin(angleRef.current.y);
      const cz = Math.cos(angleRef.current.z);
      const sz = Math.sin(angleRef.current.z);

      // Rotate vertices
      const rotatedVertices: (Vertex3D & { projX: number; projY: number })[] = [];
      const scale = zoom * Math.min(width, height) * 0.0035;

      for (let i = 0; i < initialVertices.length; i++) {
        const v = initialVertices[i];
        
        // Y rotation
        const x1 = v.x * cy + v.z * sy;
        const y1 = v.y;
        const z1 = -v.x * sy + v.z * cy;

        // X rotation
        const x2 = x1;
        const y2 = y1 * cx - z1 * sx;
        const z2 = y1 * sx + z1 * cx;

        // Z rotation
        const x3 = x2 * cz - y2 * sz;
        const y3 = x2 * sz + y2 * cz;
        const z3 = z2;

        // Perspective projection
        const distance = 400;
        const factor = distance / (distance - z3 * 0.6);
        const projX = centerX + x3 * factor * scale;
        const projY = centerY + y3 * factor * scale;

        rotatedVertices.push({
          x: x3,
          y: y3,
          z: z3,
          projX,
          projY
        });
      }

      // Calculate Face Normals and Sort by Average Z (Painter's Algorithm)
      const renderFaces = faces.map((face) => {
        const v0 = rotatedVertices[face.indices[0]];
        const v1 = rotatedVertices[face.indices[1]];
        const v2 = rotatedVertices[face.indices[2]];

        // Vector 1 (v1 - v0)
        const ax = v1.x - v0.x;
        const ay = v1.y - v0.y;
        const az = v1.z - v0.z;

        // Vector 2 (v2 - v0)
        const bx = v2.x - v0.x;
        const by = v2.y - v0.y;
        const bz = v2.z - v0.z;

        // Cross product for normal
        let nx = ay * bz - az * by;
        let ny = az * bx - ax * bz;
        let nz = ax * by - ay * bx;

        const len = Math.sqrt(nx * nx + ny * ny + nz * nz) || 1;
        nx /= len;
        ny /= len;
        nz /= len;

        // Average Z for sorting
        let avgZ = 0;
        for (const idx of face.indices) {
          avgZ += rotatedVertices[idx].z;
        }
        avgZ /= face.indices.length;

        return {
          ...face,
          normal: { x: nx, y: ny, z: nz },
          avgZ
        };
      });

      // Sort back-to-front
      renderFaces.sort((a, b) => a.avgZ - b.avgZ);

      // Light direction (Top-right-front vector)
      const lightDir = { x: 0.5, y: -0.6, z: 0.63 };
      const lightLen = Math.sqrt(lightDir.x * lightDir.x + lightDir.y * lightDir.y + lightDir.z * lightDir.z);
      const lx = lightDir.x / lightLen;
      const ly = lightDir.y / lightLen;
      const lz = lightDir.z / lightLen;

      // Draw each face
      for (const face of renderFaces) {
        // Backface culling (if normal points away from viewer and it's not wireframe/hologram)
        if (face.normal.z < -0.05 && !wireframe && preset !== 'hologram') {
          continue;
        }

        const pts = face.indices.map((idx) => rotatedVertices[idx]);

        ctx.beginPath();
        ctx.moveTo(pts[0].projX, pts[0].projY);
        for (let j = 1; j < pts.length; j++) {
          ctx.lineTo(pts[j].projX, pts[j].projY);
        }
        ctx.closePath();

        if (wireframe) {
          ctx.strokeStyle = config.wireColor;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          continue;
        }

        // Lighting calculation (diffuse dot product)
        const dot = Math.max(0, face.normal.x * lx + face.normal.y * ly + face.normal.z * lz);
        const rim = Math.pow(1 - Math.max(0, face.normal.z), 2.5) * (rimLight / 100);
        const totalIntensity = Math.min(1, config.ambient + dot * 0.75 + rim * 0.6);

        // Color interpolation
        let r = config.baseColor[0];
        let g = config.baseColor[1];
        let b = config.baseColor[2];

        if (face.isCore) {
          r = Math.min(255, Math.round(config.coreColor[0] * totalIntensity * 1.4));
          g = Math.min(255, Math.round(config.coreColor[1] * totalIntensity * 1.4));
          b = Math.min(255, Math.round(config.coreColor[2] * totalIntensity * 1.4));
        } else {
          // Mix highlight color on bright faces
          const mix = Math.pow(dot, config.shininess);
          r = Math.min(255, Math.round(r * totalIntensity + config.highlightColor[0] * mix * 0.6));
          g = Math.min(255, Math.round(g * totalIntensity + config.highlightColor[1] * mix * 0.6));
          b = Math.min(255, Math.round(b * totalIntensity + config.highlightColor[2] * mix * 0.6));
        }

        ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        ctx.fill();

        // Edge stroke for crisp geometric definition
        ctx.strokeStyle = face.isCore 
          ? `rgba(${config.coreColor.join(',')}, 0.8)` 
          : `rgba(255, 255, 255, ${0.08 + rim * 0.3})`;
        ctx.lineWidth = face.isCore ? 1.5 : 0.8;
        ctx.stroke();
      }

      // Draw Outer Aura / Rim Glow if rim lighting is active
      if (rimLight > 30 && !wireframe) {
        const auraGrad = ctx.createRadialGradient(
          centerX, centerY, 40 * zoom,
          centerX, centerY, 190 * zoom
        );
        auraGrad.addColorStop(0, `rgba(${config.highlightColor.join(',')}, ${0.15 * (rimLight / 100)})`);
        auraGrad.addColorStop(0.6, `rgba(${config.highlightColor.join(',')}, ${0.04 * (rimLight / 100)})`);
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = auraGrad;
        ctx.fillRect(0, 0, width, height);
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [preset, autoRotate, wireframe, speed, rimLight, zoom, getPresetConfig]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    velocityRef.current = { x: 0, y: 0 };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDraggingRef.current) return;
    const dx = (e.clientX - lastMousePosRef.current.x) * 0.008;
    const dy = (e.clientY - lastMousePosRef.current.y) * 0.008;

    angleRef.current.y += dx;
    angleRef.current.x += dy;

    velocityRef.current = { x: dy, y: dx };
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleResetView = () => {
    angleRef.current = { x: 0.3, y: 0.8, z: 0 };
    velocityRef.current = { x: 0, y: 0 };
    setZoom(1.0);
  };

  return (
    <div ref={containerRef} className={`bg-[#0e0e14] border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl relative overflow-hidden ${className}`}>
      
      {/* 3D Canvas Viewport */}
      <div className="relative w-full min-h-[380px] sm:min-h-[480px] rounded-2xl overflow-hidden bg-black/60 border border-white/10 group">
        <canvas
          ref={canvasRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full h-full cursor-grab active:cursor-grabbing block"
        />

        {/* Viewport Overlay Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>WEBGL HYBRID 3D ENGINE</span>
            <span className="text-slate-500">|</span>
            <span className="text-purple-400 font-bold">{fps} FPS</span>
          </div>

          <div className="flex items-center gap-1.5 pointer-events-auto">
            <button
              onClick={handleResetView}
              title="Reset View Angle"
              className="p-2 rounded-full bg-black/80 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setWireframe(!wireframe)}
              title="Toggle Wireframe"
              className={`p-2 rounded-full border transition-all ${
                wireframe 
                  ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_12px_rgba(138,43,226,0.6)]' 
                  : 'bg-black/80 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Layers className="w-4 h-4" />
            </button>
            <button
              onClick={() => setAutoRotate(!autoRotate)}
              title="Toggle Auto-Spin"
              className={`p-2 rounded-full border transition-all ${
                autoRotate 
                  ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_12px_rgba(138,43,226,0.6)]' 
                  : 'bg-black/80 border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin-slow' : ''}`} />
            </button>
          </div>
        </div>

        {/* Bottom Status Info in Viewport */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none text-[11px] font-mono text-slate-400">
          <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
            ROTATION: X: {rotAngle.x}° / Y: {rotAngle.y}°
          </div>
          <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 hidden sm:block">
            DRAG TO ROTATE &bull; INTERACTIVE 3D EMBLEM
          </div>
        </div>
      </div>
    </div>
  );
};
