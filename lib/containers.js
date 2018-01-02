import * as actionCreators from './actionCreators';
import { connect } from 'react-redux';
import HueApp from './components/HueApp';

const mapStateToProps = state => state;
const apiKey = location.search.substr(1).match(/key=([^&$]+)/)[1];
const apiUrl = `http://192.168.0.101/api/${apiKey}`;

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            getLights: () => {
                fetch(`${apiUrl}/lights`).then((resp) => {
                    resp.json().then((body) => {
                        dispatch(actionCreators.createGetLightsAction(body))
                    });
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