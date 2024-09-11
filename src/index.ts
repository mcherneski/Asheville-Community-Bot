import { Telegraf, session } from 'telegraf'
import * as chrono from 'chrono-node'

/// @dev Not sure if we need the context or any scenes. Maybe for posting an event?
// import { AvlContext } from './context'
// import { stage } from './scenes/stage'

require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN as string)

bot.start((ctx) => {
   console.log('started:', ctx)
   return ctx.reply('Welcome!')
})

bot.on('message', (ctx) => {
   console.log(`CTX Data: `)
   console.log(ctx)

   console.log('ctx message is: ')
   console.log(ctx.message)

   return ctx.reply('Hello!')
   // const parsedDate = ctx.message.text ? chrono.parseDate(ctx.message.text) : null


})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))