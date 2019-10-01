import { APIGatewayProxyResult, Callback, Context, Handler } from 'aws-lambda'
var qr = require('qr-image')

export async function qrcode(event: any, context: Context): Promise<APIGatewayProxyResult> {

	let {content} = event.queryStringParameters
	var image = qr.imageSync(content, { type: 'png' })

	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/png',
			'Accept': 'application/octet-stream',
			'Content-Disposition': 'inline; filename="qrcode.png"'
		},
		isBase64Encoded: true,
		body: image
	}
}
