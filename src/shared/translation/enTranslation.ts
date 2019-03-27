import { TranslationEnum as T } from 'src/shared/translation/TranslationEnum'
import { TranslationKeys } from 'src/shared/translation/TranslationKeys'

// tslint:disable:max-line-length
export const enTranslation: TranslationKeys = {
  [T.FormatDate]: `D MMM YYYY`,
  [T.FormatDateDayMonth]: `D MMM`,
  [T.FormatDateWithDayName]: `ddd D MMM YYYY`,
  [T.ClientButtonCreate]: `Create`,
  [T.ClientButtonNotInterested]: `I'm not interested`,
  [T.ClientBadEmailError]: `E-mail does not have the correct format`,
  [T.ClientButtonOk]: `OK`,
  [T.ClientButtonYes]: `Yes`,
  [T.ClientButtonClose]: `Close`,
  [T.ClientMessageCreateWatcherDone]: `Done. When we find a lower price, we will send you an email.`,
  [T.ClientMessageCreateWatcherWorking]: `I'm creating a record with a new watcher, please wait...`,
  [T.ClientMessageDeleteWatcherWorking]: `I'm deleting a record with the watcher, please wait...`,
  [T.ClientMessageError]: `Ooops, something went wrong.`,
  [T.ClientMessageWatcherDeleteById]: `Do you want to delete watcher?`,
  [T.ClientMessageContinueWatching]: `Do you want to keep tracking the price of this flight?`,
  [T.ClientMessageWatcherAlreadyExists]: `On this email, there is already one watcher, do you want to delete it and create new watcher?`,
  [T.ClientMessageMoreWatchersAlreadyExists]: `You have reached the limit of watchers on this email. If you want to track this flight you have to delete one of the existing watchers. A list of watchers has been sent to your email that you can edit.`,
  [T.ClientMessageMinimalizedWindow]: `Looking for a cheaper flight? Click here.`,
  [T.ClientInputEmailPlaceholder]: `fill in your e-mail...`,
  [T.ClientTitle]: `Track price {?}`,
  [T.ClientDestinations]: `from{_}{?} to{_}{?} and{_}back`,
  [T.ClientDescription]: `We'll track it out for you! Every day you get price trends information.`,
  [T.ClientDatesReturn]: `{?} until {?}`,
  [T.ClientDatesOneway]: `{?}`,
  [T.EmailTitle]: `We found the better price for the flight you were looking for!`,
  [T.EmailLowerPriceSubject]: `We found a better flight price {?} - {?}`,
  [T.EmailDescription]: `Based on your lower price alert from the website {?}, this email was sent immediately after we found a lower price.`,
  [T.EmailContentDescription]: `We found the {?} cost less, which is {?} % less.`,
  [T.EmailPricePrefixText]: `Founded price is`,
  [T.EmailPriceSuffixText]: `The original price was {?}`,
  [T.EmailPrice]: `{?}`,
  [T.EmailPriceLimit]: `Price limit is {?}`,
  [T.EmailButtonShowResultPrefixText]: `Click the button below to view the flight on the web:`,
  [T.EmailButtonShowResult]: `Book`,
  [T.EmailButtonContinueWatchingPrefixText]: `Important: Flight Tracking is terminated when we found a lower price. If you want to keep tracking the price, confirm it at:`,
  [T.EmailButtonContinueWatching]: `Continue tracking`,
  [T.EmailButtonDelete]: `Delete`,
  [T.EmailFooter]: `Provided by application Flight Watchdog.`,
  [T.EmailWatcherListHeader]: `List of the flights watchdogs`,
  [T.EmailWatcherListDescription]: `This email was sent to you based on your request to delete the flight watcher on {?}. When you click delete, you will be redirected to the flight search results and you will be prompted to delete the flight.`,
  [T.EmailMarketingHeader]: `Flight prices trends`,
  [T.EmailMarketingDescription]: `This email is sent daily based on your flight attendant establishment on {?}.`,
  [T.EmailNoReplyName]: `Flight watchdog`,
  [T.GraphLegendPriceLimit]: `Price limit`,
  [T.GraphLegendPriceTrend]: `Price trend`
}
