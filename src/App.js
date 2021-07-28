import React from "react"
import { Viewer, Entity, Camera, Scene, Globe } from "resium"
import { Cartesian3, createWorldTerrain, Math as CesiumMath } from "cesium"

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100)
const pointGraphics = { pixelSize: 10 }
const terrainProvider = createWorldTerrain()

const App = () => {
  return (
    <Viewer full terrainProvider={terrainProvider}>
      <Entity
        position={position}
        point={pointGraphics}
        onDefinitionChange={inspectCamera}
      />
      <Camera />
      <Scene />
      <Globe />
    </Viewer>
  )
}
export default App
