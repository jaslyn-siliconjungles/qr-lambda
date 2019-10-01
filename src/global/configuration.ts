require('dotenv').config()

class Configuration {

	readonly NODE_ENV: string = Configuration.dotenv('NODE_ENV')


	private static aws_resource(resource: string): string {
		return `${Configuration.dotenv('SERVICE')}-${Configuration.dotenv('NODE_ENV')}-${Configuration.dotenv(resource)}`
	}

	private static dotenv(env: string): string {
		const envvar = process.env[env]
		if (envvar == null || envvar === '') {
			console.error(`[Config.${env}] Not set in .env`)
			throw new Error(`[Config.${env}] Not set in .env`)
		}
		return envvar
	}
}

const Config = new Configuration()
console.debug(Config)

export default Config
