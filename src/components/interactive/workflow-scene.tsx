"use client";

import { useEffect, useRef } from "react";
import {
  AmbientLight,
  BoxGeometry,
  Color,
  EdgesGeometry,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

const layerLabels = ["UI", "API", "DB", "AI"];

export function WorkflowScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const container = mount;
    const scene = new Scene();
    const camera = new PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.15, 7.2);

    const renderer = new WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    container.appendChild(renderer.domElement);

    const group = new Group();
    scene.add(group);
    scene.add(new AmbientLight(0xffffff, 2.8));

    const fills = [0xf7efe3, 0xeedfc8, 0xd8c4aa, 0xb98a46];
    const lineColors = [0x1f5b4e, 0xa64833, 0xb78a35, 0x1c2933];

    layerLabels.forEach((_, index) => {
      const width = 3.25 - index * 0.34;
      const height = 2.04 - index * 0.2;
      const depth = 0.06;
      const geometry = new BoxGeometry(width, height, depth);
      const material = new MeshStandardMaterial({
        color: new Color(fills[index]),
        metalness: 0.04,
        roughness: 0.78,
        transparent: true,
        opacity: 0.74,
      });
      const mesh = new Mesh(geometry, material);
      mesh.position.set(index * 0.28 - 0.42, index * -0.18 + 0.26, -index * 0.5);
      mesh.rotation.z = -0.08 + index * 0.045;
      group.add(mesh);

      const edges = new LineSegments(
        new EdgesGeometry(geometry),
        new LineBasicMaterial({
          color: lineColors[index],
          transparent: true,
          opacity: 0.64,
        }),
      );
      edges.position.copy(mesh.position);
      edges.rotation.copy(mesh.rotation);
      group.add(edges);
    });

    const connectorMaterial = new LineBasicMaterial({
      color: 0x1f5b4e,
      transparent: true,
      opacity: 0.52,
    });

    for (let index = 0; index < 4; index += 1) {
      const connector = new LineSegments(
        new EdgesGeometry(new BoxGeometry(0.14, 0.14, 0.95)),
        connectorMaterial,
      );
      connector.position.set(-1.55 + index * 1.03, 1.16 - index * 0.08, -0.9);
      connector.rotation.x = 0.8;
      group.add(connector);
    }

    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;

    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    }

    function handlePointer(event: PointerEvent) {
      const rect = container.getBoundingClientRect();
      pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 0.45;
      pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 0.35;
    }

    function animate(time: number) {
      const t = time * 0.001;
      group.rotation.y += (pointerX + Math.sin(t * 0.55) * 0.12 - group.rotation.y) * 0.045;
      group.rotation.x += (-pointerY + Math.cos(t * 0.45) * 0.06 - group.rotation.x) * 0.045;
      group.position.y = Math.sin(t * 0.9) * 0.08;
      frameId = window.requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    resize();
    frameId = window.requestAnimationFrame(animate);
    window.addEventListener("resize", resize);
    container.addEventListener("pointermove", handlePointer);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", handlePointer);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="workflow-scene" ref={mountRef}>
      <div className="scene-labels" aria-hidden="true">
        {layerLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </div>
  );
}
