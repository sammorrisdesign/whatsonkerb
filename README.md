whatsonkerb
===========

A service that tells you what's on Kerb KX

## Requirements
* Ruby 1.9.2
* [Node](nodejs.org) with the latest version of Node Package Manager

## Description

This project uses Node scrape the Kerb website, Handlebrs to output static html and Sass to output CSS. These tasks are automated using [Grunt](http://gruntjs.com/).

## Installation & Usage

To get Grunt, run: `npm install -g grunt-cli`

You'll then need to run `npm install` from both the root folder and the `/api` folder to get the various dependances.

Finally, run `grunt init` to run a full compile

From then on use just `grunt` to compile all then watch for changes in sass and all scripts and html related to the individual market pages.