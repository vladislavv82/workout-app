import express from 'express'
import authRoutes from './app/auth/auth.routes.js' //js ставим если мы импортируем модуль

import 'colors' //цвета для терминала

import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config() //подключаем .env

import { prisma } from './app/prisma.js' //подключаем призму

const app = express()

async function main() {
	if (process.env.NODE_ENV == 'development') {
		app.use(morgan('dev')) //морган для логирования
	}

	app.use(express.json()) //для того что бы файлы грузились и отдавались в формате json
	app.use('/api/auth', authRoutes)

	app.listen(
		console.log(
			`Server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
				.blue.bold
		)
	)
}

main()

	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
