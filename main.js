import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const gltfLoader = new GLTFLoader();


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
const splashTexture = new THREE.TextureLoader().load('clash.jfif');
const bumpTexture = new THREE.TextureLoader().load('Bumps.jpg');

const torus = new THREE.Mesh( 
  new THREE.TorusGeometry( 15, 2, 16, 10 ),
  new THREE.MeshStandardMaterial( { 
    map: splashTexture,
    normalMap: bumpTexture,
   } ),
);


// Use the add function to add the shape into the frame
scene.add(torus);

const innerRing = new THREE.Mesh(
  new THREE.TorusGeometry( 9, 2, 16, 10 ),
  new THREE.MeshStandardMaterial( { 
    map: splashTexture,
    normalMap: bumpTexture,
   } ),
)

scene.add(innerRing)


// Creating the light
const pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set( 20, 20, 20 );

const ambientLight = new THREE.AmbientLight( 0xffffff );

scene.add( pointLight, ambientLight ); 


// Helper functions in order to make it easier to see what is going on
//const lightHelper = new THREE.PointLightHelper( pointLight )
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);


// Point
gltfLoader.load('point.glb', (gltf) => {
  scene.add(gltf.scene)
})


// orbital controls
const controls = new OrbitControls(camera, renderer.domElement);


// Automatic window resizing
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}


// Dispersing random obj into the surroundings
function addObjects() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const obj = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));

  obj.position.set(x, y, z);
  scene.add(obj)
}

Array(200).fill().forEach(addObjects);


// background change
const spaceTexture = new THREE.TextureLoader().load('darkmatter.jfif');
scene.background = spaceTexture;


// constant loop to animate the image through the animate function
function animate() {
  requestAnimationFrame( animate );

  torus.rotation.x += 0.006;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.007;

  innerRing.rotation.x += -0.006;
  innerRing.rotation.y += -0.02;
  innerRing.rotation.z += -0.007;

  controls.update();

  renderer.render( scene, camera );
}


// Calling the animation function
animate()

