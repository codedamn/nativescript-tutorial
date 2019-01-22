const { fromObject } = require('tns-core-modules/data/observable')

const model = {
	username: "admin",
	password: "admin"
}

const bindingContext = fromObject(model)

exports.onLoaded = args => {
	const page = args.object

	page.bindingContext = bindingContext
}

exports.onTap = args => {
	alert(`${bindingContext.get('username')} and ${bindingContext.get('password')}`)
}