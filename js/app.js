import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';
import World from './World.js';
import Camera from './Camera.js';
import Navigation from './Navigation.js';

class Experience {
    constructor() {
        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas-container').appendChild(this.renderer.domElement);

        this.camera = new Camera();
        this.world = new World(this.scene);
        this.navigation = new Navigation();

        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.world.update();
        this.camera.update();
        this.renderer.render(this.scene, this.camera.instance);
    }
}

new Experience();
