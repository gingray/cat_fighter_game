// import { Scene, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh, WebGLRenderer } from 'three'
// let scene = new Scene();
//
// let camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
// camera.position.z = 1000;
//
// let geometry = new BoxGeometry( 200, 200, 200 );
// let material = new MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
//
// let mesh = new Mesh( geometry, material );
// scene.add( mesh );
//
// let renderer = new WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
//
// document.body.appendChild( renderer.domElement );
//
// const animate = () => {
//   requestAnimationFrame( animate );
//
//   mesh.rotation.x += 0.01;
//   mesh.rotation.y += 0.02;
//
//   renderer.render( scene, camera );
// }
//
// animate();
