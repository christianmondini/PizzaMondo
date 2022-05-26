import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Transitione from '../components/transizione';

function Parallaxe(){
    return(
        <>
                <Parallax pages={2} style={{ top: '30', left: '0' }}>
                    <ParallaxLayer
                        offset={0}
                        speed={2.5}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Transitione/>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: 'orange'  }} />

                    <ParallaxLayer
                        offset={1}
                        speed={0.5}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                        }}>
                        <p>Scroll up</p>
                    </ParallaxLayer>
                </Parallax>
        </>

    );
}

export default Parallaxe;