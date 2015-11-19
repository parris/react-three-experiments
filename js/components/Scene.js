import React, {Component} from 'react';
import {Scene, PerspectiveCamera, Mesh, Line, PointLight} from 'react-three';
import THREE from 'three';

const sphereMat = new THREE.MeshPhongMaterial({
    color: 0x156289,
    emissive: 0x072534,
    side: THREE.DoubleSide,
    shading: THREE.FlatShading
});
const sphereGeo = new THREE.SphereGeometry( 5, 32, 32 );
const lineMat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5
});

class OurScene extends Component {

    constructor() {
        super();
        this.state = {
            rotation: 0,
        };
    }

    componentDidMount() {
        window.setInterval(() => {
            this.setState({
                rotation: this.state.rotation + 1,
            })
        }, 16);
    }

    render() {
        let aspectratio = this.props.width / this.props.height;
        let cameraprops = {fov:75, aspect:aspectratio, near:1, far:5000,
        position:new THREE.Vector3(0,0,10), lookat:new THREE.Vector3(0,0,0)};

        let rotation = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, this.state.rotation));

        return (
            <Scene width={this.props.width} height={this.props.height} camera="maincamera">
                <PerspectiveCamera name="maincamera" {...cameraprops} />
                <Mesh
                    geometry={sphereGeo}
                    material={sphereMat}
                    position={{x:0, y:0, z:0}}
                    quaternion={rotation}
                />
                <Line
                    geometry={sphereGeo}
                    material={lineMat}
                    position={{x:0, y:0, z:0}}
                    quaternion={rotation}
                />
                <PointLight color={0xffffff} intensity={2.0} target={new THREE.Vector3(0, 0, 0)} position={new THREE.Vector3(30, 30, 30)} />
                <PointLight color={0xffffff} intensity={3.0} target={new THREE.Vector3(0, 30, 0)} position={new THREE.Vector3(-60, -30, -30)} />
            </Scene>
        );
    }
}

export default OurScene;
