import * as THREE from 'https://unpkg.com/three/build/three.module.js';
            import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
            import { STLLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/STLLoader';
            import { GLTFLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js';

            

            //TEXTURE
            const textureLoader = new THREE.TextureLoader();
            // background
            //const bck = textureLoader.load('./texture/background.jpg');
            const bck = new THREE.Color( 0x292929 )
            // light wood textures
            const baseWood = textureLoader.load('./texture/Wood_027_basecolor_ps.png');
            const normalWood = textureLoader.load('./texture/Wood_027_normal.jpg');
            const roughWood = textureLoader.load('./texture/Wood_027_roughness.jpg');
            const heightWood = textureLoader.load('./texture/Wood_027_height.png');
            const aoWood = textureLoader.load('./texture/Wood_027_ambientOcclusion.jpg');
            // wood plate texture
            const basePlate = textureLoader.load('./texture/Wood_Wicker_010_basecolor_ps.png');
            const normalPlate = textureLoader.load('./texture/Wood_Wicker_010_normal.jpg');
            const roughPlate = textureLoader.load('./texture/Wood_Wicker_010_roughness.jpg');
            const aoPlate = textureLoader.load('./texture/Wood_Wicker_010_ambientOcclusion.jpg');
            const opPlate = textureLoader.load('./texture/Wood_Wicker_010_opacity.jpg');
            // moon cake
            const pattern = textureLoader.load('./texture/cakeTexture.png');
            // guihua
            const guihua = textureLoader.load('./texture/guihua.png');
            // ball tetxure
            const baseBall = textureLoader.load('./texture/Orange_001_COLOR.jpg'); 
            const roughBall = textureLoader.load('./texture/Orange_001_ROUGH.jpg'); 
            const normalBall = textureLoader.load('./texture/Orange_001_NORM.jpg'); 
            const aoBall = textureLoader.load('./texture/Orange_001_OCC.jpg'); 

            // scene & camera
            const scene = new THREE.Scene();
            //scene.add(new THREE.GridHelper(10,10,0x888888,0x444444)) // helper grid
            bck.mapping= THREE.EquirectangularReflectionMapping;
            scene.background = bck;
            const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
            
            camera.position.set(0,8,13);

            // STL
            // loader
            const loader = new STLLoader()
            // red date cake
            const material = new THREE.MeshPhysicalMaterial({
                color: 0x4a1a0a,
                metalness: 0,
                roughness: 0.2,
                opacity: 1.0,
                transmission: 0.4,
                clearcoat: 1.0,
                //clearcoatRoughness: 0.25
            })
            loader.load(
                'stlModel/stlcube.stl',
                function (geometry) {
                    const mesh = new THREE.Mesh(geometry, material);
                    mesh.position.set( 0.5, 0, 0.5 );
                    mesh.scale.set(1.2,0.3,1.2);
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                    scene.add(mesh);
                }
            )
            
            const material2 = new THREE.MeshPhysicalMaterial({
                color: 0xe3d7d3,
                metalness: 0,
                roughness: 0.2,
                transmission: 0.0,
            })
            loader.load(
                'stlModel/stlcube.stl',
                function (geometry) {
                    const mesh = new THREE.Mesh(geometry, material2);
                    mesh.position.set( 0.5, 0.3, 0.5 );
                    mesh.scale.set(1.2,0.2,1.2);
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                    scene.add(mesh);
                }
            )
            const material3 = new THREE.MeshPhysicalMaterial({
                color: 0x944328,
                metalness: 0,
                roughness: 0.2,
                transmission: 0.1,
                //thickness: 0.4
            })
            loader.load(
                'stlModel/stlcube.stl',
                function (geometry) {
                    const mesh = new THREE.Mesh(geometry, material3);
                    mesh.position.set( 0.5, 0.5, 0.5 );
                    mesh.scale.set(1.2,0.4,1.2);
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                    scene.add(mesh);
                }
            )

            const chunk = new THREE.Mesh( new THREE.BoxGeometry( 0.14, 0.14, 0.2 ), 
            new THREE.MeshStandardMaterial( { color: 0x30130c } ) );
            chunk.position.set( 1, 0.68, 1 );
            chunk.rotation.set( 1, 0.68, 1 );
            scene.add( chunk );
            const chunk2 = new THREE.Mesh( new THREE.BoxGeometry( 0.2, 0.12, 0.14 ), 
            new THREE.MeshStandardMaterial( { color: 0x30130c } ) );
            chunk2.position.set( 1.5, 0.7, 0.9 );
            chunk2.rotation.set( 0.4, 0.68, 1 );
            scene.add( chunk2 );
            const chunk3 = new THREE.Mesh( new THREE.BoxGeometry( 0.2, 0.14, 0.14 ), 
            new THREE.MeshStandardMaterial( { color: 0x30130c } ) );
            chunk3.position.set( 1.56, 0.65, 1.5 );
            chunk3.rotation.set( 1, 0.68, 1.5 );
            scene.add( chunk3 );
            const chunk4 = new THREE.Mesh( new THREE.BoxGeometry( 0.14, 0.2, 0.14 ), 
            new THREE.MeshStandardMaterial( { color: 0x30130c } ) );
            chunk4.position.set( 0.8, 0.62, 1.3 );
            chunk4.rotation.set( 1, 2, 1 );
            scene.add( chunk4 );
            const chunk5 = new THREE.Mesh( new THREE.BoxGeometry( 0.24, 0.12, 0.14 ), 
            new THREE.MeshStandardMaterial( { color: 0x30130c } ) );
            chunk5.position.set( 0.8, 0.71, 0.7 );
            chunk5.rotation.set( 1, 2, 1 );
            scene.add( chunk5 );
            const chunk6 = new THREE.Mesh( new THREE.BoxGeometry( 0.14, 0.14, 0.14 ), 
            new THREE.MeshStandardMaterial( { color: 0x30130c } ) );
            chunk6.position.set( 1.2, 0.7, 1.35 );
            chunk6.rotation.set( .5, 2, 1 );
            scene.add( chunk6 );

            // moon cake
            const cakeMaterial = new THREE.MeshPhysicalMaterial({
                color: 0x914e13,
                roughness: 1,
                // opacity: 0.5,
                reflectivity: 0.9,
                //sheen: 1,
                //sheenColorMap: basePlate,
                sheenColor: 0x0000ff
            })
            loader.load('stlModel/cake.stl', function(cakeGeometry){
                const cakeMesh = new THREE.Mesh(cakeGeometry,cakeMaterial)
                cakeMesh.scale.set(0.1,0.1,0.09);
                cakeMesh.rotateX(-Math.PI / 2);
                cakeMesh.position.set( -1, 0, -1 );
                cakeMesh.castShadow = true;
                cakeMesh.receiveShadow = true;
                scene.add(cakeMesh);
            })
            // pattern
            const cpGeometry = new THREE.PlaneGeometry( 1.25, 1.25 );
			const cpMaterial = new THREE.MeshStandardMaterial( {
                map: pattern,
                transparent: true, opacity: 0.6,

            } );
			const cp = new THREE.Mesh( cpGeometry, cpMaterial);
            cp.rotateX(-Math.PI / 2);
            cp.position.set( -1, 0.901, -1 );
			scene.add( cp );


            // star
            const starMaterial = new THREE.MeshPhysicalMaterial({
                color: 0x999999,
                roughness: 1,
                clearcoat: 0.5
            })
            loader.load('stlModel/star.stl', function(starGeometry){
                const starMesh = new THREE.Mesh(starGeometry, starMaterial)
                starMesh.scale.set(0.013,0.013,0.03);
                starMesh.rotateX(-Math.PI / 2);
                starMesh.position.set( -1, 0, 1 );
                starMesh.castShadow = true;
                starMesh.receiveShadow = true;
                scene.add(starMesh);
            })
            
            // guihua
            const spGeometry = new THREE.PlaneGeometry( 0.8, 0.8 );
			const spMaterial = new THREE.MeshStandardMaterial( {
                map: guihua,
                transparent: true, opacity: 0.6,

            } );
			const sp = new THREE.Mesh( spGeometry, spMaterial);
            sp.rotateX(-Math.PI / 2);
            sp.position.set( -0.9, 0.751, 1 );
			scene.add( sp );


            // BASIC geo.
            //base
            const baseGeometry = new THREE.BoxGeometry( 8, 30, 8);
			const baseMaterial = new THREE.MeshStandardMaterial( {
                map: heightWood,
                normalMap: normalWood,
                roughnessMap: roughWood,
                roughness: 1.0,
                aoMap: aoWood

            } );
			const base = new THREE.Mesh( baseGeometry, baseMaterial );
            base.position.y = -15.25;
            base.geometry.attributes.uv2 = base.geometry.attributes.uv;
            base.receiveShadow = true;
			scene.add( base );


            //frame 1 & 2
            const frameGeometry = new THREE.BoxGeometry( 5, 0.9, 0.15);
			const frameMaterial = new THREE.MeshStandardMaterial( {
                map: baseWood,
                normalMap: normalWood,
                roughnessMap: roughWood,
                roughness: 1.0,
                aoMap: aoWood

            } );
			const frame = new THREE.Mesh( frameGeometry, frameMaterial );
            frame.position.z = 2.425;
            frame.geometry.attributes.uv2 = frame.geometry.attributes.uv;
            frame.castShadow = true;
            frame.receiveShadow = true;
			scene.add( frame );

            const frame2 = new THREE.Mesh( frameGeometry, frameMaterial );
            frame2.position.z = -2.425;
            frame2.geometry.attributes.uv2 = frame2.geometry.attributes.uv;
            frame2.castShadow = true;
            frame2.receiveShadow = true;
			scene.add( frame2 );

            //frame 3 & 4
            const frameGeometryShort = new THREE.BoxGeometry( 0.15, 0.9, 4.7);
            const frame3 = new THREE.Mesh( frameGeometryShort, frameMaterial );
            frame3.position.x = -2.425;
            frame3.geometry.attributes.uv2 = frame3.geometry.attributes.uv;
            frame3.castShadow = true;
            frame3.receiveShadow = true;
			scene.add( frame3 );

            const frame4 = new THREE.Mesh( frameGeometryShort, frameMaterial );
            frame4.position.x = 2.425;
            frame4.geometry.attributes.uv2 = frame4.geometry.attributes.uv;
            frame4.castShadow = true;
            frame4.receiveShadow = true;
			scene.add( frame4 );

            // plate
            const plateGeometry = new THREE.PlaneGeometry( 5, 5 );
			const plateMaterial = new THREE.MeshStandardMaterial( {
                map: basePlate,
                normalMap: normalPlate,
                roughnessMap: roughPlate,
                roughness: 1.0,
                aoMap: aoPlate,
                alphaMap: opPlate

            } );
			const plate = new THREE.Mesh( plateGeometry, plateMaterial);
            plate.rotateX(-Math.PI / 2);
            plate.geometry.attributes.uv2 = plate.geometry.attributes.uv;
            plate.castShadow = true;
            plate.receiveShadow = true;
			scene.add( plate );

            //ball
            const ballGeometry = new THREE.SphereGeometry(0.75);
			const ballMaterial = new THREE.MeshStandardMaterial( {
                map: baseBall,
                normalMap: normalBall,
                roughnessMap: roughBall,
                roughness: 1.0,
                aoMap: aoBall

            } );
			const ball = new THREE.Mesh( ballGeometry, ballMaterial);
            ball.rotateX(-Math.PI / 2);
            ball.geometry.attributes.uv2 = ball.geometry.attributes.uv;
            ball.position.set( 1.1, 0, -1.1 );
            ball.castShadow = true;
            ball.receiveShadow = true;
			scene.add( ball );


            // LIGHT
            // Ambient
            const light = new THREE.AmbientLight( 0xffffff, 0.4); // soft white light
            scene.add( light );
            // drectional
            const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
            directionalLight.position.set(-8,7,0);
            directionalLight.castShadow = true;
            scene.add( directionalLight );
            const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
            //scene.add( helper );

            // spot
            const spotLight = new THREE.SpotLight( 0xd4d4d4);
            spotLight.position.set( 10, 10, 10 );
            spotLight.castShadow = true;
            scene.add( spotLight );
            const spotLightHelper = new THREE.SpotLightHelper( spotLight );
            //scene.add( spotLightHelper );


            // Render
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize( window.innerWidth, window.innerHeight );
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            document.body.appendChild( renderer.domElement );

            

            // OrbitControls
            const controls = new OrbitControls( camera, renderer.domElement );
            controls.autoRotate = true;
            controls.autoRotateSpeed = 1.8;
            controls.enablePan = false;

            controls.addEventListener('start', function(){
                controls.autoRotate = false;
            });

            controls.addEventListener('end', function(){
                setTimeout(() => {
                    controls.autoRotate = true;
                }, 1000);
                
            });

            function animate() {
                requestAnimationFrame( animate );
                controls.update();
                renderer.render( scene, camera );
            }

            animate();