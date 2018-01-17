import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/ToolBar';
import Typography from 'material-ui/Typography';
import LightsGrid from './LightsGrid'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/createPalette'
import { blue, orange } from 'material-ui/colors';

const styles = () => ({
    appContainer: {
        margin: '0 auto',
        width: 'calc(100% - 16px)'
    },
    appTitle: {
        paddingLeft: '20px'
    }
});

class HueApp extends React.Component {

    static propTypes = {
        actions: PropTypes.shape({
            getLights: PropTypes.func,
            toggleLightOn: PropTypes.func
        }),
        classes: PropTypes.object.isRequired,
        lights: PropTypes.object
    };
    
    static defaultProps = {
        lights: {}
    };

    componentDidMount() {
        this.props.actions.getLights();
    }

    render() {
        const {
            actions,
            classes,
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
                <Reboot />
                <AppBar position="static">
                    <ToolBar disableGutters>
                        {/* <IconButton>
                            <Icon color="contrast">menu</Icon>
                        </IconButton> */}
                        <Typography type="title" color="inherit" className={classes.appTitle}>Hue LAN Control</Typography>
                    </ToolBar>
                </AppBar>
                <div className={classes.appContainer}>
                    <LightsGrid actions={actions} lights={lights} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(HueApp);