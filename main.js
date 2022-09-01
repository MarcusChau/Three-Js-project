import '/style.css';

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

//import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

//import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';


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


// Creating the light
const pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set( 0, 50, 50 );

const ambientLight = new THREE.AmbientLight( 0xffffff );

scene.add( pointLight, ambientLight ); 


const spotlight1 = new THREE.SpotLight( 0xffffff );
spotlight1.position.set(0, 100, -100);

scene.add( spotlight1 ) 

// Helper functions in order to make it easier to see what is going on
//const lightHelper = new THREE.PointLightHelper( pointLight )
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);

// colors
const colors = 0xffffff * Math.random();

// loading gltf function
const gltfLoader = new GLTFLoader();
// loaded GLTF
var humanMesh;

gltfLoader.load('/img/Marcus.glb', function (gltf) {
  humanMesh = gltf.scene.children.find((child) => child.name === "Marcus");
  humanMesh.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  humanMesh.scale.set(15, 15, 15);
  humanMesh.position.setY(-15);
  function addColor() {
    humanMesh.material.color.set( colors );
  }
  addColor();
  scene.add(humanMesh)
}); 



// Audio loader
const listener = new THREE.AudioListener();
camera.add(listener);
const myVoice = new THREE.Audio( listener );
// Create Audioloader to load all sound files
const audioLoader = new THREE.AudioLoader();

// load sound files
// audioLoader.load('/Welcome to my website.m4a', (buffer) => {
//   myVoice.setBuffer(buffer);
//   myVoice.setVolume(1);
//   myVoice.play();
// });


// Audio loader
const listener1 = new THREE.AudioListener();
camera.add(listener1);
const background = new THREE.Audio( listener1 );
// Create Audioloader to load all sound files
const audioLoader1 = new THREE.AudioLoader();

// load sound files
// audioLoader1.load('/IEROD1900372-midnight-320.mp3', (buffer) => {
//   background.setBuffer(buffer);
//   background.setVolume(0.2);
//   console.log("playing");
//   background.play();
// });


// raycaster as well as variable to keep track for pause and play of audio
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
var numberOfClickForOne = 0;
var pausePlay = 0;


// Event listener to see whether the gltf was clicked 
renderer.domElement.addEventListener('pointerup', (event) => {
  mouse.x = (event.clientX / renderer.domElement.clientWidth - renderer.domElement.getBoundingClientRect().x) * 2 - 1;
  mouse.y = -(event.clientY / renderer.domElement.clientHeight + renderer.domElement.getBoundingClientRect().y) * 2 + 1;
  
  console.log(mouse.x, mouse.y);

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(scene.children, true);

  if (intersects.length > 0) {
    //console.log("Model clicked.");
    //console.log(numberOfClickForOne);
    // for my voice to play
    if(numberOfClickForOne == 0) {
      numberOfClickForOne++;
      audioLoader.load('/Welcome to my website.m4a', (buffer) => {
        myVoice.setBuffer(buffer);
        myVoice.setVolume(1);
        myVoice.play();
      });
    }


    // For Pause and Play of background music
    if(pausePlay == 0) {
      pausePlay ++;
      // load sound files
      audioLoader1.load('/IEROD1900372-midnight-320.mp3', (buffer) => {
        background.setBuffer(buffer);
        background.setVolume(0.3);
        //console.log("Playing");
        background.play();
      });
    }
    else {
      pausePlay--;
      //console.log("Pausing");
      background.pause();
    }
  }
});

let btn = document.createElement("button");
btn.setAttribute('id', 'changeColor');
btn.setAttribute('class', 'changeColor');
btn.innerHTML = "Change Color";
btn.onclick = function () {
  humanMesh.material.color.set( 0xffffff * Math.random() );
};
document.body.appendChild(btn);

// let mixer;

// const fbx = new FBXLoader();

// fbx.load('/Hip Hop Dancing.fbx', (fbx) => {
//   mixer = new THREE.AnimationMixer( obj );
//   let action = mixer.clipAction( obj.animations[0] );
//   action.play();
//   fbx.traverse( c => {
//     c.castShadow = true;
//   });
//   scene.add(fbx);

//   mixer = new THREE.AnimationMixer(fbx);
//   manager = new THREE.LoadingManager();

// });

// const loader = new OBJLoader();
// loader.load('/img/72.obj', object => {
//   object.rotateX(30);
//   object.scale.set(15, 15, 15);
//   object.position.setY(-15);
//   scene.add(object);
// })


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

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 300 ));

  obj.position.set(x, y, z);
  scene.add(obj)
}

Array(700).fill().forEach(addObjects);


// background change
const spaceTexture = new THREE.TextureLoader().load('/img/darkmatter.jfif');
scene.background = spaceTexture;


// constant loop to animate the image through the animate function
function animate() {
  requestAnimationFrame( animate );

  controls.update();

  renderer.render( scene, camera );
}


// Calling the animation function
animate()

