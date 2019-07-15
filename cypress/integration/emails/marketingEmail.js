import { normalizeText} from '../../support/helper'

describe('Marketing Email', function() {
    it('Default', function() {
        cy.visit('/marketingEmail')
        cy.get('tr').eq(0).should((tr) => {
            expect(normalizeText(tr.text()), 'header').to.equal(`\
Vývoj cen hlídačů letů\
Tento e-mail je odesílán každý den na základě Vašeho založení hlídače letu na webu https://example.cz.\
`)
        })
        cy.get('tr').eq(1).should((tr) => {
            expect(normalizeText(tr.text()), 'content').to.equal(`\
z Londýn (LON) do Praha (PRG) a zpět\
neděle 16. 12. 2018 až úterý 25. 12. 2018\
19.9.20.9.21.9.22.9.23.9.4500500055006000650060004500581263215000\
Hlídaná cena\
Vývoj cenyLimit ceny 6000 CZK\
Rezervovat\
Smazat\
Podobné nabídky (lidé právě kupují)\
3 500 CZK - neděle 16. 12. 2018 až úterý 25. 12. 2018 -> Zobrazit\
3 500 CZK - neděle 16. 12. 2018 až úterý 25. 12. 2018 -> Zobrazit\
3 500 CZK - neděle 16. 12. 2018 až úterý 25. 12. 2018 -> Zobrazit\
z Londýn (LON) do Praha (PRG) a zpět\
neděle 16. 12. 2018 až úterý 25. 12. 2018\
19.9.20.9.21.9.22.9.23.9.4500500055006000650060004500581263215000\
Hlídaná cena\
Vývoj ceny\
Limit ceny 6000 CZK\
Rezervovat\
Smazat\
Podobné nabídky (lidé právě kupují)\
3 500 CZK - neděle 16. 12. 2018 až úterý 25. 12. 2018 -> Zobrazit\
3 500 CZK - neděle 16. 12. 2018 až úterý 25. 12. 2018 -> Zobrazit\
3 500 CZK - neděle 16. 12. 2018 až úterý 25. 12. 2018 -> Zobrazit\
Hlídání cen letů zajišťuje aplikace Flight Watchdog.\
`)
        })
        cy.get('a').eq(3).then((element) => {
            expect(element.attr('href')).to.equal('https://example.cz/booking/api/search/v3?id_dealer=10&client_encoding=utf-8&lang=cs&id=airticket&ui_formtype=round_trip&arrival_destination_1_short=LON&arrival_destination_1=LON&departure_destination_1_short=PRG&departure_destination_1=PRG&departure_date_1=2018-12-16&departure_date_2=2018-12-25&passengers_adt=1&flightWatchdogAdditionalResult=')
        })
        cy.screenshot()
    })
})
