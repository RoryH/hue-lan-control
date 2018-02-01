import * as actionCreators from './actionCreators';
import { connect } from 'react-redux';
import HueApp from './components/HueApp';
import appConfig from '../app-config.json';

const mapStateToProps = state => state;

const apiUrl = `api/${appConfig.hueUserKey}`;

// import ApiFixture from '../all.json';

const defaultFetchOptions = {
    mode: 'cors',
    cache: 'default'
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            getLights: () => {
                // dispatch(actionCreators.createGetLightsAction(ApiFixture.lights));
                
                fetch(
                    `${apiUrl}/lights`,
                    defaultFetchOptions
                ).then((resp) => {
                    resp.json().then((body) => {
                        dispatch(actionCreators.createGetLightsAction(body))
                    });
                },
                () => {
                    dispatch(actionCreators.createErrorAction('The lights are ot accessible'));
                });
            },
            toggleLightStateOn: (lightKey, on) => {
                const stateBody = JSON.stringify({ on: on });

                fetch(
                    `${apiUrl}/lights/${lightKey}/state`,
                    {
                        ...defaultFetchOptions,
                        headers: {
                            'Content-type': 'application/json'
                        },
                        method: 'PUT',
                        body: stateBody
                    }
                ).then(() => {
                    dispatch(actionCreators.toggleLightStateOn(lightKey, on));
                },
                () => {
                    dispatch(actionCreators.createErrorAction('The lights are ot accessible'));
                })
                
            },

            /**
             * @param {string} lightKey
             * @param {number} brightness  - brightness val from 0 to 254
             */
            setLightBrightness: (lightKey, brightness) => {
                const stateBody = JSON.stringify({ on: true, bri: brightness });

                fetch(
                    `${apiUrl}/lights/${lightKey}/state`,
                    {
                        ...defaultFetchOptions,
                        headers: {
                            'Content-type': 'application/json'
                        },
                        method: 'PUT',
                        body: stateBody
                    }
                ).then(() => {
                    dispatch(actionCreators.changeLightBrightness(lightKey, brightness));
                },
                () => {
                    dispatch(actionCreators.createErrorAction('The lights are ot accessible'));
                })
            }
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HueApp)