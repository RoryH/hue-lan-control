import { GET_LIGHTS } from './actionTypes';

const initialState = {};

function getLightsArray(lights) {
  const lightArr = [];
  for (let light in lights) {
      lightArr.push({
        ...lights[light],
        id: light
      });
  }
  return lightArr;
}

export default function hueApp(state = initialState, action) {

    switch (action.type) {
        case GET_LIGHTS:
          return Object.assign({}, state, {
            lights: getLightsArray(action.lights)
          });
        default:
          return state
  }
}