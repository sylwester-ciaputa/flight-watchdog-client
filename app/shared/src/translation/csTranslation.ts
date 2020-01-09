import { TranslationEnum as T } from '@shared/translation/TranslationEnum'
import { TranslationKeys } from '@shared/translation/TranslationKeys'

// tslint:disable:max-line-length
export const csTranslation: TranslationKeys = {
  [T.FormatDate]: `D. M. YYYY`,
  [T.FormatDateDayMonth]: `D.M.`,
  [T.FormatDateWithDayName]: `dddd D. M. YYYY`,
  [T.ClientButtonCreate]: `Hlídat cenu`,
  [T.ClientButtonNotInterested]: `Nemám zájem`,
  [T.ClientBadEmailError]: `E-mail nemá správný formát`,
  [T.ClientButtonOk]: `OK`,
  [T.ClientButtonYes]: `Ano`,
  [T.ClientButtonClose]: `Zavřít`,
  [T.ClientMessageCreateWatcherDone]: `Skvěle, hotovo. Až najdeme nižší cenu, pošleme Vám e-mail.`,
  [T.ClientMessageCreateWatcherWorking]: `Vytvářím záznam s novým hlídačem, za chvilku to bude...`,
  [T.ClientMessageDeleteWatcherWorking]: `Mažu záznam s hlídačem, za chvilku to bude...`,
  [T.ClientMessageError]: `Ajajaj, něco jsem pokazil, příště se polepším.`,
  [T.ClientMessageContinueWatching]: `Chcete dál sledovat cenu tohoto letu?`,
  [T.ClientMessageWatcherDeleteById]: `Opravdu chcete hlídač smazat?`,
  [T.ClientMessageWatcherAlreadyExists]: `Na tento e-mail již jeden hlídač existuje. Chcete jej smazat a hlídat raději tento let?`,
  [T.ClientMessageMoreWatchersAlreadyExists]: `Na tento e-mail jste dosáhli limitu hlídačů. Pokud chcete sledovat tento let musíte smazat jeden z již existujících hlídačů. Na Váš e-mail vám byl odeslán seznam hlídačů, který můžete upravit.`,
  [T.ClientMessageMinimalizedWindow]: `Hledáte levnější letenku? Klikněte zde.`,
  [T.ClientInputEmailPlaceholder]: `vyplňte svůj e-mail...`,
  [T.ClientTitle]: `Hlídám cenu za{_}vás!`,
  [T.ClientDestinationsReturn]: `a{_}zpět`,
  [T.ClientDestinationsOneway]: `pouze{_}tam`,
  [T.ClientMerchantConditions]: `Odesláním potvrzuji, že souhlasím se zpracováním mých osobních údajů a že jsem se seznámil/a se Zásadami ochrany osobních údajů společnosti STUDENT AGENCY TRAVEL.`,
  [T.ClientDescription]: `Budeme ji hlídat za Vás! Každý den pak dostanete informaci o{_}jejím vývoji.`,
  [T.ClientDatesReturn]: `{?} až {?}`,
  [T.ClientDatesOneway]: `{?}`,
  [T.EmailTitle]: `Nalezli jsme lepší cenu letu, který jste hledali!`,
  [T.EmailLowerPriceSubject]: `Nalezli jsme lepší cenu letu {?} - {?}`,
  [T.EmailDescription]: `Na základě Vašeho vytvoření upozornění na nižší cenu na webu {?}, byl tento E-mail odeslán ihned po zjištění nižší ceny.`,
  [T.EmailContentDescription]: `Nalezli jsme cenu nižší o {?}, což je o {?} % méně.`,
  [T.EmailPricePrefixText]: `Nalezená cena je`,
  [T.EmailPriceSuffixText]: `Původní cena byla {?}`,
  [T.EmailPrice]: `{?}`,
  [T.EmailPriceLimit]: `Limit ceny {?}`,
  [T.EmailButtonShowResultPrefixText]: `Pro zobrazení letu na webu klikněte na tlačítko níže:`,
  [T.EmailButtonShowResult]: `Rezervovat`,
  [T.EmailButtonContinueWatchingPrefixText]: `Důležité: Sledování letu je ukončeno při nalezení nižší ceny. Pokud chcete cenu hlídat dál, potvrďte znovu hlídání letu:`,
  [T.EmailButtonContinueWatching]: `Hlídat dál`,
  [T.EmailButtonDelete]: `Smazat`,
  [T.EmailFooter]: `Hlídání cen letů zajišťuje aplikace Flight Watchdog.`,
  [T.EmailWatcherListHeader]: `Seznam hlídačů letů`,
  [T.EmailWatcherListDescription]: `Tento e-mail byl odeslán na základě Vašeho požadavku na smazání hlídače letu na webu {?}. Po kliknutí na tlačítko Smazat budete přesměrováni na výsledky vyhledávání daného letu a budete vyzváni k potrvzení smazání.`,
  [T.EmailMarketingHeader]: `Vývoj cen Vašeho letu`,
  [T.EmailMarketingDescription]: `Tento e-mail je odesílán každý den na základě Vašeho založení hlídače letu na webu {?}.`,
  [T.EmailNoReplyName]: `Hlídač letenek`,
  [T.EmailAdditionalResultsHeader]: `Podobné nabídky (lidé právě kupují)`,
  [T.EmailAdditionalResultsShow]: `Zobrazit`,
  [T.GraphLegendPriceLimit]: `Hlídaná cena`,
  [T.GraphLegendPriceTrend]: `Vývoj ceny`,
  [T.PageTokenNotValid]: `Platnost odkazu již vypršela.`,
  [T.PageWatcherDeletedSuccess]: `Hlídání letu bylo ukončeno.`,
  [T.PageContinueToWeb]: `Kliknutím zde pokračujte na web {?}`
}
