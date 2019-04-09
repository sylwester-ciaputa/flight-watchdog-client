import { ValidEmail, ValidLanguage, ValidPrice } from '@ceesystems/valid-objects-ts'
import { AppConfig } from '@client/types/AppConfig'
import { parseGolUrl } from '@client/utils/parseGolUrl'
import { SupportedLanguageEnum } from '@shared/translation/SupportedLanguageEnum'

export const createAppConfigFromGolFe = (doc: Document, url: string): AppConfig | undefined => {
  const appConfigPartFromUrl = parseGolUrl(url)

  if (!appConfigPartFromUrl) {
    // tslint:disable-next-line
    console.log('Flight watchdog error', 'Bad url.')

    return
  }

  const lowestPriceHtmlElement = <HTMLSpanElement | null>doc.getElementsByClassName('AO3_TotalFareValue').item(0)
  const lowestPrice =
    lowestPriceHtmlElement && lowestPriceHtmlElement.textContent ? lowestPriceHtmlElement.textContent : ''

  if (!lowestPrice) {
    // tslint:disable-next-line
    console.log('Flight watchdog error', 'Price not found.')

    return
  }

  const langElement = document.getElementsByTagName('html').item(0)
  const lang = new ValidLanguage(langElement && langElement.getAttribute('lang'), Object.values(SupportedLanguageEnum))

  return {
    ...appConfigPartFromUrl,
    customerEmail: getCustomerEmail(doc),
    lowestPrice: new ValidPrice(lowestPrice),
    lang
  }
}

const getCustomerEmail = (doc: Document): ValidEmail | undefined => {
  try {
    const userEmailHtmlElement = <HTMLInputElement | null>doc.getElementById('fiUsername')

    return userEmailHtmlElement && userEmailHtmlElement.value
      ? new ValidEmail(userEmailHtmlElement.value, ['+'])
      : undefined
  } catch (err) {
    return
  }
}
