import NextCors from 'nextjs-cors'

// CORS mid
export function CORSMiddleware(callback) {
	return async function (req, res) {
		await NextCors(req, res, {
			methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
			origin: '*',
			optionsSuccessStatus: 200,
		})
		callback(req, res)
	}
}
