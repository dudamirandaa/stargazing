export interface Planet {
  aboveHorizon: boolean,
  altitude: number,
  azimuth: number,
  constellation: string,
  declination: {
    arcminutes: number,
    arcseconds: number,
    degrees: number,
    negative: boolean,
    raw: number
  },
  magnitude: number,
  nakedEyeObject: boolean,
  name: string,
  rightAscension: {
    hour: number,
    minuts: number,
    negative: boolean,
    raw: number,
    seconds: number
  }
}
