import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Home from "../Home";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Home">
                <Home />
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews