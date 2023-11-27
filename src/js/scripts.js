import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const king = new URL('../models/king.obj', import.meta.url)

const renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(5);
axesHelper.position.y = 5;
scene.add(axesHelper);

camera.position.set(-10, 30, 30);
orbit.update();

// Example Cube
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
//scene.add(box);

// Floor
const planeGeometry = new THREE.PlaneGeometry(50, 50);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0x964B00});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;

// Grid Helper
const gridHelper = new THREE.GridHelper(50);
scene.add(gridHelper);

// Chess table
/*const loader = new GLTFLoader();
loader.load(

    './Chessboard.glb',

    function ( gltf ) {

		scene.add( gltf.scene );

		//gltf.animations; 
		//gltf.scene; 
		//gltf.scenes; 
		//gltf.cameras; 
		//gltf.asset;
	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
); */
// instantiate a loader
const loader = new OBJLoader();

// load a resource
loader.load(
	// resource URL
	king,
	// called when resource is loaded
	(object) => {
		var loc = window.location.pathname;
		var dir = loc.substring(0, loc.lastIndexOf('/'));
		console.log(object);
		console.log(dir);
		console.log(loc);
		console.log('Current directory: ' + process.cwd());
		scene.add( object );
	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);


function animate(time)
{
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;
    renderer.render( scene, camera );
}

renderer.setAnimationLoop(animate);