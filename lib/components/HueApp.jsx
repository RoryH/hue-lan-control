import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/ToolBar';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/createPalette'
import { blue, orange } from 'material-ui/colors';

export default class HueApp extends React.Component {

    static propTypes = {
        actions: PropTypes.shape({
            getLights: PropTypes.func
        }),
        lights: PropTypes.array
    };
    
    static defaultProps = {
        lights: []
    };

    componentDidMount() {
        this.props.actions.getLights();
    }

    renderLights(lights) {
        return lights.map((light) => {
            return (
                <Card key={light.id}>
                    <Typography type="subheading">{light.name}</Typography>
                </Card>
            );
        })
    }

    render() {
        const {
            lights
        } = this.props;

        const theme = createMuiTheme({
            palette: createPalette({
                type: 'light',
                primary: blue,
                secondary: orange
            })
        });

        return (
            <MuiThemeProvider theme={theme}>
                <AppBar>
                    <ToolBar disableGutters>
                        <IconButton>
                            <Icon color="contrast">menu</Icon>
                        </IconButton>
                        <Typography type="title" color="inherit">Hue LAN Control</Typography>
                    </ToolBar>
                </AppBar>
                <h1>Lights!</h1>
                {this.renderLights(lights)}
            </MuiThemeProvider>
        );
    }
}