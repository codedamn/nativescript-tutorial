

exports.myFunction = args => {
	const page = args.object
	page.bindingContext = {
		message: "Hello World from JavaScript!!!"
	}

	setTimeout(() => {
		page.bindingContext = {
			message: "Something else now"
		}
	}, 2000)
}