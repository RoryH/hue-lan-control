import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Switch from 'material-ui/Switch';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: '30px',
        color: theme.palette.text.secondary,
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        lineHeight: 2
    }
});



class LightCard extends React.Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        light: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired
    };

    handleLightToggle = () => {
        const {
            actions,
            light
        } = this.props;

        actions.toggleLightStateOn(light.id, !light.state.on);
    }

    render() {
        const {
            light,
            classes
        } = this.props;

        return (
            <Grid item xs={12} md={6} key={light.id} className={classes.item}>
                <Paper className={classes.paper}>
                    <Typography type="title" className={classes.title}>{light.name}</Typography>
                    <Switch checked={light.state.on} onClick={this.handleLightToggle} />
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(LightCard);