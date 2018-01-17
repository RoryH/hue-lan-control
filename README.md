Hue LAN Control

# Overview

A web application to run on your local LAN alongside a Philips Hue Bridge. Allows anyboy with on the LAN to controls the Philips Hue lights.

#Dependencies

* node v8+ - for building project
* a web server on your LAN

# Installation

* Clone this repo
* edit the file in the root called `app-config.json` accordingly adding your [hue user key](https://www.developers.meethue.com/documentation/getting-started) and the host/ip of the Philips Hue Bridge
* run `npm i`
* run `npx webpack -p` to build the Javascript with your config.