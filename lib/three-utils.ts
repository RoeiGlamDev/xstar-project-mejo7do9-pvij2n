Certainly! Below is a sample `lib/three-utils.ts` file that you can use in your React/TypeScript project for your luxury dark AirBNB website named HouseIL. This file includes utility functions for working with Three.js, which can be useful for creating 3D visualizations or effects that fit your elegant design theme.

```typescript
// lib/three-utils.ts

import * as THREE from 'three';

/**
 * Creates a basic scene with a camera and renderer.
 * @param container - The HTML element to attach the renderer to.
 * @returns An object containing the scene, camera, and renderer.
 */
export function createScene(container: HTMLElement) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    camera.position.z = 5;

    return { scene, camera, renderer };
}

/**
 * Adds a light to the scene.
 * @param scene - The Three.js scene to add the light to.
 */
export function addLight(scene: THREE.Scene) {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
}

/**
 * Creates a simple cube mesh.
 * @returns A Three.js mesh representing a cube.
 */
export function createCube(): THREE.Mesh {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 }); // Pink color
    const cube = new THREE.Mesh(geometry, material);
    return cube;
}

/**
 * Animates the scene.
 * @param renderer - The Three.js renderer.
 * @param scene - The Three.js scene.
 * @param camera - The Three.js camera.
 */
export function animate(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.PerspectiveCamera) {
    requestAnimationFrame(() => animate(renderer, scene, camera));
    renderer.render(scene, camera);
}

/**
 * Resizes the renderer and camera aspect ratio on window resize.
 * @param renderer - The Three.js renderer.
 * @param camera - The Three.js camera.
 */
export function onWindowResize(renderer: THREE.WebGLRenderer, camera: THREE.PerspectiveCamera) {
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
}
```

### Explanation:
- **createScene**: Initializes a Three.js scene, camera, and renderer, and appends the renderer to a specified container.
- **addLight**: Adds ambient and directional lights to the scene to enhance visibility and aesthetics.
- **createCube**: Creates a simple cube mesh with a pink color, which can be replaced or modified to fit your design.
- **animate**: A recursive function to render the scene continuously.
- **onWindowResize**: Adjusts the renderer and camera when the window is resized to maintain the correct aspect ratio.

You can import and use these utilities in your React components to create a visually appealing 3D experience for your luxury AirBNB website.