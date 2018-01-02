import {
    GET_LIGHTS,
    ERROR
} from './actionTypes';

export function createGetLightsAction(lights) {
    return {
      type: GET_LIGHTS,
      lights
    };
}

export function createErrorAction(msg) {
    return {
      type: ERROR,
      msg
    };
}