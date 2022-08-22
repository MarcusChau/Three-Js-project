import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


// Three.js always starts with 3 const: scene, camera, and renderer
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});


// pixel radius, size of the frame and the position of the camera
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

// rendering the background: which is the scene and camera const
renderer.render( scene, camera );


// A shape that is part of the three.js library, the material: standard means that you need light in order to see it, and mesh is the function that you use to put the shape together
const geometry = new THREE.TorusGeometry(10, 3, 16, 100 )
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus = new THREE.Mesh( geometry, material );

// Use the add function to add the shape into the frame
scene.add(torus);


// Creating the light
const pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set( 20, 20, 20 );

const ambientLight = new THREE.AmbientLight( 0xffffff );

scene.add( pointLight, ambientLight ); 


// Helper functions in order to make it easier to see what is going on
const lightHelper = new THREE.PointLightHelper( pointLight )
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);


// orbital controls
const controls = new OrbitControls(camera, renderer.domElement);


// constant loop to animate the image through the animate function
function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update();

  renderer.render( scene, camera );
}


// Calling the animation function
animate()

