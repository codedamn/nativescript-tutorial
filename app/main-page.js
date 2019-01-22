exports.onLoaded = args => {
	const page = args.object

	page.bindingContext = {
		username: "admin"
	}

	let i = 0

	setInterval(() => {
		page.bindingContext = {
			username: `admin${i++}`
		}
	}, 1000)
}