# ilokivi-scraper

Scrapes lunch information from [Ilokivi](https://www.ilokivi.fi/ravintola/lounas)

HTTP GET Request to `https://ilokivi-scraper-kjyaorxxtf.now.sh/lunch/today` will result a response like follows:

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
        }
    ]
}
```

If you want the results in the same format as [Semma](https://www.semma.fi/) ([example](https://www.semma.fi/modules/json/json/Index?costNumber=1408&language=fi)), make the request with `?semmaFormat=true`
