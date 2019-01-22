const { Observable } = require('tns-core-modules/data/observable')

exports.onLoaded = args => {
	const page = args.object

	const model = new Observable() // { }

	model.set("username", "admin")

	page.bindingContext = model
}