import {
    GET_LIGHTS,
    ERROR,
    TOGGLE_LIGHT_STATE_ON
} from './actionTypes';

export function createGetLightsAction(lights) {
    return {
      type: GET_LIGHTS,
      lights
    };
}

export function toggleLightStateOn (lightKey, on) {
    return {
        type: TOGGLE_LIGHT_STATE_ON,
        key: lightKey,
        on
    };
}

export function createErrorAction(msg) {
    return {
      type: ERROR,
      msg
    };
}