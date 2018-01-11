import {
  GET_LIGHTS,
  TOGGLE_LIGHT_STATE_ON
} from './actionTypes';

const initialState = {};

function transformLights(lights) {
  for (let light in lights) {
    lights[light].id = light;
  }
  return lights;
}

export default function hueApp(state = initialState, action) {

  switch (action.type) {
    case GET_LIGHTS:
      return Object.assign({}, state, {
        lights: transformLights(action.lights)
      });
    case TOGGLE_LIGHT_STATE_ON:
      return Object.assign({}, state, {
        lights: {
          ...state.lights,
          [action.key]: {
            ...state.lights[action.key],
            state: {
              ...state.lights[action.key].state,
             on: action.on,
            }
          }
        }
      });
    default:
      return state;
  }
}