import { Telegraf, Markup} from 'telegraf'

const token = '6468309568:AAGZHoTM-eT_OvnCVA-BVYgBGQ7WZA0L4Qo'
const webAppUrl = 'https://google.com/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Добро пожаловать! Нажмите на кнопку ниже, чтобы запустить приложение',
        Markup.keyboard([Markup.button.webApp('Отправить сообщение', webAppUrl)])
    )
})

bot.launch()