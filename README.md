# ilokivi-scraper

Scrapes lunch information from [Ilokivi](https://www.ilokivi.fi/ravintola/lounas)

HTTP Request to `https://ilokivi-scraper-kjyaorxxtf.now.sh/lunch/today` will result a response like follows:

```json
{
    "day": "Tiistai 19.2.",
    "lunches": [
        {
            "dish": "Kasvismakaronilaatikko",
            "allergens": "*, M"
        },
        {
            "dish": "Kasvismakaronilaatikko vegaaninen",
            "allergens": "*, M, Veg."
        },
        {
            "dish": "Liha-makaronilaatikko"
        },
        {
            "dish": "Sitruunaista kalaleikett&#xE4; ja jogurttikastiketta",
            "allergens": "*, VL"
        },
        {
            "dish": "Nakkikastike",
            "allergens": "M"
        },
        {
            "dish": ""
        }
    ]
}
```
