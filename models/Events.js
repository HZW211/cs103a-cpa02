'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var eventSchema = Schema( {
    // limit: Number,
    // times: Mixed,
    // enrolled: Number,
    day: String,
    thisevent: String,
    // status_text: String,
    // section: String,
    // waiting: Number,
    // instructor: Mixed,
    // coinstructors: Mixed,
    // code: Mixed,
    // subject: String,
    // coursenum: String,
    // num: Number,
    // suffix: String,
    // name: String,
    // independent_study: Boolean,
    // term: Number,
    // description: String,
} );

module.exports = mongoose.model( 'Events', eventSchema );
