const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const ILOKIVI_URL = 'https://www.ilokivi.fi/ravintola/lounas'

const app = express()

app.get('/lunch/today', async (req, res) => {
    let lunch = ''

    try {
        const { data: htmlString } = await axios(ILOKIVI_URL)
        const $ = cheerio.load(htmlString)

        const day = $('.block-lunch-wrapper .col-lunch .lunch-box .head h3').text()
        const lunchContent = $('.block-lunch-wrapper .col-lunch .lunch-box .content p').html()
        const lunchArray = lunchContent.trim().replace(/\n/, '').split('<br>')
        const lunches = lunchArray.map(lunch => {
            const [dish, allergens] = lunch.replace('</i>', '').split(' <i>')
            return { dish, allergens }
        })

        res.json({
            day,
            lunches
        })
    } catch (error) {
        console.log(error)
        res.json({
            error
        })
    }
})

app.listen(3000, () => {
    console.log()
})
