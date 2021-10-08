var canvas = document.getElementById("canvas")
if (canvas.getContext) {
	function init(image) {
		canvas.width = image.naturalWidth
		canvas.height = image.naturalHeight
		ctx.drawImage(image, 0, 0)
	}

	const grayscaleMedian = function () {
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
		var data = imageData.data

		const height = canvas.height
		const width = canvas.width

		var tr = new Array(width).fill().map(() => Array(height))
		var tg = new Array(width).fill().map(() => Array(height))
		var tb = new Array(width).fill().map(() => Array(height))
		var ta = new Array(width).fill().map(() => Array(height))

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = data[x * 4 + y * (width * 4) + 0]
				tg[x][y] = data[x * 4 + y * (width * 4) + 1]
				tb[x][y] = data[x * 4 + y * (width * 4) + 2]
				ta[x][y] = data[x * 4 + y * (width * 4) + 3]
			}
		}
		////
		/// code here

		for (var x = 0; x < width; x = x + 1) {
			for (var y = 0; y < height; y = y + 1) {
				var grey = (tr[x][y] + tg[x][y] + tb[x][y]) / 3
				tr[x][y] = grey
				tg[x][y] = grey
				tb[x][y] = grey
			}
		}

		/////

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				data[x * 4 + y * (width * 4) + 0] = tr[x][y]
				data[x * 4 + y * (width * 4) + 1] = tg[x][y]
				data[x * 4 + y * (width * 4) + 2] = tb[x][y]
				data[x * 4 + y * (width * 4) + 3] = ta[x][y]
			}
		}
		writeImageToCanvas(imageData)
	}
	////

	const onlyred = function () {
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
		var data = imageData.data

		const height = canvas.height
		const width = canvas.width

		var tr = new Array(width).fill().map(() => Array(height))
		var tg = new Array(width).fill().map(() => Array(height))
		var tb = new Array(width).fill().map(() => Array(height))
		var ta = new Array(width).fill().map(() => Array(height))

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = data[x * 4 + y * (width * 4) + 0]
				tg[x][y] = data[x * 4 + y * (width * 4) + 1]
				tb[x][y] = data[x * 4 + y * (width * 4) + 2]
				ta[x][y] = data[x * 4 + y * (width * 4) + 3]
			}
		}
		////
		/// code here

		for (var x = 0; x < width; x = x + 1) {
			for (var y = 0; y < height; y = y + 1) {
				var grey = (tr[x][y] + tg[x][y] + tb[x][y]) / 3
				tr[x][y] = grey + 128
				tg[x][y] = grey
				tb[x][y] = grey
			}
		}

		/////

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				data[x * 4 + y * (width * 4) + 0] = tr[x][y]
				data[x * 4 + y * (width * 4) + 1] = tg[x][y]
				data[x * 4 + y * (width * 4) + 2] = tb[x][y]
				data[x * 4 + y * (width * 4) + 3] = ta[x][y]
			}
		}
		writeImageToCanvas(imageData)
	}

	const blacknwhite = function () {
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
		var data = imageData.data

		const height = canvas.height
		const width = canvas.width

		var tr = new Array(width).fill().map(() => Array(height))
		var tg = new Array(width).fill().map(() => Array(height))
		var tb = new Array(width).fill().map(() => Array(height))
		var ta = new Array(width).fill().map(() => Array(height))

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = data[x * 4 + y * (width * 4) + 0]
				tg[x][y] = data[x * 4 + y * (width * 4) + 1]
				tb[x][y] = data[x * 4 + y * (width * 4) + 2]
				ta[x][y] = data[x * 4 + y * (width * 4) + 3]
			}
		}
		////
		/// code here
		for (var x = 0; x < width; x = x + 1) {
			for (var y = 0; y < height; y = y + 1) {
				if (tr[x][y] + tg[x][y] + tb[x][y] > 765 / 2) {
					tr[x][y] = 255
					tg[x][y] = 255
					tb[x][y] = 255
				} else {
					tr[x][y] = 0
					tg[x][y] = 0
					tb[x][y] = 0
				}
			}
		}

		/////

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				data[x * 4 + y * (width * 4) + 0] = tr[x][y]
				data[x * 4 + y * (width * 4) + 1] = tg[x][y]
				data[x * 4 + y * (width * 4) + 2] = tb[x][y]
				data[x * 4 + y * (width * 4) + 3] = ta[x][y]
			}
		}
		writeImageToCanvas(imageData)
	}

	const rouge = function () {
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
		var data = imageData.data

		const height = canvas.height
		const width = canvas.width

		var tr = new Array(width).fill().map(() => Array(height))
		var tg = new Array(width).fill().map(() => Array(height))
		var tb = new Array(width).fill().map(() => Array(height))
		var ta = new Array(width).fill().map(() => Array(height))

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = data[x * 4 + y * (width * 4) + 0]
				tg[x][y] = data[x * 4 + y * (width * 4) + 1]
				tb[x][y] = data[x * 4 + y * (width * 4) + 2]
				ta[x][y] = data[x * 4 + y * (width * 4) + 3]
			}
		}
		////
		/// code here

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = tr[x][y] + 30
				tg[x][y] = tg[x][y] + 10
				tb[x][y] = tb[x][y] + 10
			}
		}

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				data[x * 4 + y * (width * 4) + 0] = tr[x][y]
				data[x * 4 + y * (width * 4) + 1] = tg[x][y]
				data[x * 4 + y * (width * 4) + 2] = tb[x][y]
				data[x * 4 + y * (width * 4) + 3] = ta[x][y]
			}
		}
		writeImageToCanvas(imageData)
	}

	////
	const negatif = function () {
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
		var data = imageData.data

		const height = canvas.height
		const width = canvas.width

		var tr = new Array(width).fill().map(() => Array(height))
		var tg = new Array(width).fill().map(() => Array(height))
		var tb = new Array(width).fill().map(() => Array(height))
		var ta = new Array(width).fill().map(() => Array(height))

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = data[x * 4 + y * (width * 4) + 0]
				tg[x][y] = data[x * 4 + y * (width * 4) + 1]
				tb[x][y] = data[x * 4 + y * (width * 4) + 2]
				ta[x][y] = data[x * 4 + y * (width * 4) + 3]
			}
		}
		////
		/// code here

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = 255 - tr[x][y]
				tg[x][y] = 255 - tg[x][y]
				tb[x][y] = 255 - tb[x][y]
			}
		}

		/////

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				data[x * 4 + y * (width * 4) + 0] = tr[x][y]
				data[x * 4 + y * (width * 4) + 1] = tg[x][y]
				data[x * 4 + y * (width * 4) + 2] = tb[x][y]
				data[x * 4 + y * (width * 4) + 3] = ta[x][y]
			}
		}
		writeImageToCanvas(imageData)
	}

	const lumiere = function () {
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
		var data = imageData.data

		const height = canvas.height
		const width = canvas.width

		var tr = new Array(width).fill().map(() => Array(height))
		var tg = new Array(width).fill().map(() => Array(height))
		var tb = new Array(width).fill().map(() => Array(height))
		var ta = new Array(width).fill().map(() => Array(height))

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = data[x * 4 + y * (width * 4) + 0]
				tg[x][y] = data[x * 4 + y * (width * 4) + 1]
				tb[x][y] = data[x * 4 + y * (width * 4) + 2]
				ta[x][y] = data[x * 4 + y * (width * 4) + 3]
			}
		}
		////
		/// code here

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = tr[x][y] + 20
				tg[x][y] = tg[x][y] + 20
				tb[x][y] = tb[x][y] + 20
			}
		}

		/////

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				data[x * 4 + y * (width * 4) + 0] = tr[x][y]
				data[x * 4 + y * (width * 4) + 1] = tg[x][y]
				data[x * 4 + y * (width * 4) + 2] = tb[x][y]
				data[x * 4 + y * (width * 4) + 3] = ta[x][y]
			}
		}
		writeImageToCanvas(imageData)
	}

	const luminosite = function () {
		var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
		var data = imageData.data

		const height = canvas.height
		const width = canvas.width

		var tr = new Array(width).fill().map(() => Array(height))
		var tg = new Array(width).fill().map(() => Array(height))
		var tb = new Array(width).fill().map(() => Array(height))
		var ta = new Array(width).fill().map(() => Array(height))

		// copie des valeurs
		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = data[x * 4 + y * (width * 4) + 0]
				tg[x][y] = data[x * 4 + y * (width * 4) + 1]
				tb[x][y] = data[x * 4 + y * (width * 4) + 2]
				ta[x][y] = data[x * 4 + y * (width * 4) + 3]
			}
		}
		////
		/// code here

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				tr[x][y] = tr[x][y] - 20
				tg[x][y] = tg[x][y] - 20
				tb[x][y] = tb[x][y] - 20
			}
		}

		/////

		for (var y = 0; y < height; y++) {
			for (var x = 0; x < width; x++) {
				data[x * 4 + y * (width * 4) + 0] = tr[x][y]
				data[x * 4 + y * (width * 4) + 1] = tg[x][y]
				data[x * 4 + y * (width * 4) + 2] = tb[x][y]
				data[x * 4 + y * (width * 4) + 3] = ta[x][y]
			}
		}
		writeImageToCanvas(imageData)
	}

	function writeImageToCanvas(imageData) {
		ctx.putImageData(imageData, 0, 0)
	}

	var ctx = canvas.getContext("2d")
	var img = new Image()
	img.src = "./brooke-cagle--uHVRvDr7pg-unsplash.jpg"
	img.onload = function () {
		init(this)
	}
	document.getElementById("grayscale").addEventListener("click", grayscaleMedian)
	document.getElementById("blacknwhite").addEventListener("click", blacknwhite)
	document.getElementById("onlyred").addEventListener("click", onlyred)
	document.getElementById("luminosite").addEventListener("click", luminosite)
	document.getElementById("lumiere").addEventListener("click", lumiere)
	document.getElementById("rouge").addEventListener("click", rouge)
	document.getElementById("negatif").addEventListener("click", negatif)
	document.querySelectorAll(".resetBtn").forEach(function (btn) {
		btn.addEventListener("click", function () {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			ctx.drawImage(img, 0, 0)
		})
	})
}
