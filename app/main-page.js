const { fromObjectRecursive } = require('tns-core-modules/data/observable')

exports.onTap = args => {
	const button = args.object
	const page = button.page

	page.frame.navigate('page2')
}