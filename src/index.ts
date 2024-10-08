import { Telegraf, session } from 'telegraf'
import * as chrono from 'chrono-node'

/// @dev Not sure if we need the context or any scenes. Maybe for posting an event?
// import { AvlContext } from './context'
// import { stage } from './scenes/stage'

require('dotenv').config()

const ParseEasternTimezone = {
   timezoneOffsetDuringDst: -240,
   timezoneOffsetStandard: -300,
   dstStart: (year: number) => chrono.getLastWeekdayOfMonth(year, chrono.Month.FEBRUARY, chrono.Weekday.SUNDAY, 2),
  dstEnd: (year: number) => chrono.getLastWeekdayOfMonth(year, chrono.Month.SEPTEMBER, chrono.Weekday.SUNDAY, 3)
}


const bot = new Telegraf(process.env.BOT_TOKEN as string)

bot.start((ctx) => {
   console.log('started:', ctx)
   return ctx.reply('Welcome!')
})

bot.on('message', (ctx) => {
   console.log(`CTX Data: `)
   console.log(ctx)

   let inputText
   let inputImage

   if (ctx.text) {
      inputText = ctx.text

      const parsedDate = inputText ? chrono.parseDate(inputText, {
         timeZones: {ET: ParseEasternTimezone }
      }) : null
      console.log(parsedDate)
      return ctx.reply(`Parsed date is ${parsedDate}`)
   }


   return ctx.reply('Hello! This bot is in development. Info has been logged to the server.')
   // const parsedDate = ctx.message.text ? chrono.parseDate(ctx.message.text) : null

})


bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))