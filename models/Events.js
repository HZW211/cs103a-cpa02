'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var eventSchema = Schema( {
    day: String,
    thisevent: String,
} );

module.exports = mongoose.model( 'Events', eventSchema );
