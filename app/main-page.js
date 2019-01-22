const { fromObjectRecursive } = require('tns-core-modules/data/observable')

const model = {
	user: {
		username: "admin",
		password: "admin"
	}
}

const bindingContext = fromObjectRecursive(model)

exports.onLoaded = args => {
	const page = args.object

	page.bindingContext = bindingContext
}

exports.onTap = args => {
	alert(`${bindingContext.get('user').username} and ${bindingContext.get('user').password}`)
}