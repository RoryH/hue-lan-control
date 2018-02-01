import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Switch from 'material-ui/Switch';
import Radio from 'material-ui/Radio';
import SvgIcon from 'material-ui/SvgIcon';

const styles = theme => ({
    item: {
        margin: '10px 0'
    },
    paper: {
        padding: '10px 20px',
        color: theme.palette.text.secondary
    },
    paperRow: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        lineHeight: 2
    },
    brightnessPaper: {
        padding: '0 20px',
        margin: '0 10px',
        backgroundImage: 'linear-gradient(0deg, rgb(236,236,236) 90%, rgb(200,200,200))'
    },
    brightnessText: {
        lineHeight: '48px',
        flexBasis: '10%'
    },
    brightnessIcon: {
        height: '48px'
    },
    iconFill: {
        color: theme.typography.caption.color
    },
    radio: {
        flexBasis: '10%'
    }
});



class LightCard extends React.Component {
    static propTypes = {
        actions: PropTypes.object.isRequired,
        light: PropTypes.object.isRequired,
        classes: PropTypes.object.isRequired,
        selectedBrightness: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedBrightness: props.light.state.bri
        };
    }

    handleLightToggle = () => {
        const {
            actions,
            light
        } = this.props;

        actions.toggleLightStateOn(light.id, !light.state.on);
    }

    handleBrightnessChange = event => {
        const selectedBrightness = parseInt(event.target.value, 10);
        const {
            actions: {
                setLightBrightness
            },
            light
        } = this.props;

        if (!isNaN(selectedBrightness)) {
            this.setState({ selectedBrightness });
            setLightBrightness(light.id, selectedBrightness)
        }
    };

    render() {
        const {
            light,
            classes
        } = this.props;

        return (
            <Grid item xs={12} md={6} key={light.id} className={classes.item}>
                <Paper className={classes.paper}>
                    <div className={classes.paperRow}>
                        <Typography type="title" className={classes.title}>{light.name}</Typography>
                        <Switch checked={light.state.on} onClick={this.handleLightToggle} />
                    </div>
                </Paper>
                <Paper className={classes.brightnessPaper} square elevation={0}>
                    <div className={classes.paperRow}>
                        {/* <Icon className={classes.brightnessText}>ic_brightness_6</Icon> */}
                        <SvgIcon className={classes.brightnessIcon}>
                            <path className={classes.iconFill} d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z" />
                        </SvgIcon>
                        <Typography type="caption" className={classes.brightnessText}>20%</Typography>
                        <Radio
                            checked={this.state.selectedBrightness === 51}
                            onChange={this.handleBrightnessChange}
                            value="51"
                            name={`lightBrightness${light.id}`}
                            aria-label="20%"
                            className={classes.radio}
                            />
                        <Radio
                            checked={this.state.selectedBrightness === 102}
                            onChange={this.handleBrightnessChange}
                            value="102"
                            name={`lightBrightness${light.id}`}
                            aria-label="40%"
                            className={classes.radio}
                            />
                        <Radio
                            checked={this.state.selectedBrightness === 153}
                            onChange={this.handleBrightnessChange}
                            value="153"
                            name={`lightBrightness${light.id}`}
                            aria-label="60%"
                            className={classes.radio}
                            />
                        <Radio
                            checked={this.state.selectedBrightness === 202}
                            onChange={this.handleBrightnessChange}
                            value="202"
                            name={`lightBrightness${light.id}`}
                            aria-label="80%"
                            className={classes.radio}
                            />
                        <Radio
                            checked={this.state.selectedBrightness === 254}
                            onChange={this.handleBrightnessChange}
                            value="254"
                            name={`lightBrightness${light.id}`}
                            aria-label="100%"
                            className={classes.radio}
                            />
                        <Typography type="caption" className={classes.brightnessText}>100%</Typography>
                    </div>
                </Paper>
            </Grid>
        );
    }
}

export default withStyles(styles)(LightCard);