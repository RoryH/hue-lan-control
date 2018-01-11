import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import LightCard from './LightCard';

const styles = () => ({
    root: {
        marginTop: 20,
        alignContent: 'space-between'
    }
});

class LightsGrid extends React.Component {

    static propTypes = {
        actions: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        lights: PropTypes.object
    }

    renderLights(lights) {
        const {
            actions
        } = this.props;

        return Object.values(lights).map((light) => {
            return (
                <LightCard actions={actions} key={light.id} light={light} />
            );
        })
    }

    render() {
        const {
            classes,
            lights
        } = this.props;

        return (
            <Grid container spacing={8} className={classes.root}>
                {this.renderLights(lights)}
            </Grid>
        );
    }
}

export default withStyles(styles)(LightsGrid);