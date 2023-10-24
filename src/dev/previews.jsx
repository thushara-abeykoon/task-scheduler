import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import TestComponent from "../components/TestComponent";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/TestComponent">
                <TestComponent/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews