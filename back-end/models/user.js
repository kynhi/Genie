const mongoose = require('mongoose');

var UserSchema = new mongose.Schema({

	username: {
		type: String,
		required: true,
		unique: true
	}

	password: {
		type: String,
		required: true
	},

	email: {
		type: String,
		required: true,
		unique: true
	},

	points: {
		type: number,
		default: 0
	}
});

UserSchema.methods.toJSON = function (){
	var user = this;
	var userObject = user.toObject();

	return _.pick(userObject, ['_id', 'email', 'password', 'email', 'points']);
};

UserSchema.methods.generateAuthToken = function (){
	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), acess}, 'abc123').toString();
	user.tokens = user.tokens.concat([{access, token}]);

	return user.save().then(() => {
		return token;
	});
};

var User = mongoose.model('User', UserSchema);

module.exports = { User };
