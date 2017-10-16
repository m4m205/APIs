const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


// creste Geo_Schema
const GeoSchema = new Schema ({
	type: {
		type: String,
		default: "Point"
	},
	coordinates:{
		type: [Number],
		index: "2dsphere"
	}
}); 


// Create ninja Schema $ model
const NinjaSchema = new Schema({
	name: {
		type: String,
		require: [true, 'Mane field is required'],
	},
	rank: {
		type: String
	},
	available:{
		type: Boolean,
		default: false
	},
	geometry: GeoSchema

});

const Ninja = mongoose.model('ninja' , NinjaSchema);

module.exports = Ninja;