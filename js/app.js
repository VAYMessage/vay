function create3DIcon(containerId, shape="sphere", color=0x4da3ff){

    const container = document.getElementById(containerId);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / 160, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});

    renderer.setSize(container.clientWidth,160);
    container.appendChild(renderer.domElement);

    let geometry;

    if(shape==="sphere"){
        geometry = new THREE.SphereGeometry(2,64,64);
    }
    if(shape==="box"){
        geometry = new THREE.BoxGeometry(3,3,3);
    }
    if(shape==="torus"){
        geometry = new THREE.TorusGeometry(2,0.6,32,100);
    }
    if(shape==="octa"){
        geometry = new THREE.OctahedronGeometry(3);
    }

    const material = new THREE.MeshPhysicalMaterial({
        color:color,
        metalness:0.2,
        roughness:0.1,
        transmission:0.7,
        thickness:1,
        clearcoat:1,
        clearcoatRoughness:0
    });

    const mesh = new THREE.Mesh(geometry,material);
    scene.add(mesh);

    const light = new THREE.PointLight(0xffffff,1.2);
    light.position.set(10,10,10);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff,0.5);
    scene.add(ambient);

    camera.position.z = 8;

    function animate(){
        requestAnimationFrame(animate);
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.005;
        renderer.render(scene,camera);
    }

    animate();
}

/* Создаём иконки */

create3DIcon("cloud","sphere",0x4da3ff);
create3DIcon("ai","octa",0x3ff2d0);
create3DIcon("security","box",0x8b5cf6);
create3DIcon("monitoring","torus",0xf97316);