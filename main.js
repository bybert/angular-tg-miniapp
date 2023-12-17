import { Telegraf, Markup } from 'telegraf'
import { message }from 'telegraf/filters'

const token = '6468309568:AAGZHoTM-eT_OvnCVA-BVYgBGQ7WZA0L4Qo'
const webAppUrl = 'https://angular-tg-app-b6b75.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
    Markup.keyboard([
      Markup.button.webApp('Отправить сообщение', `${webAppUrl}/feedback`),
    ])
  )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})
bot.launch()
