import { ValidUrl } from '@ceesystems/valid-objects-ts'
import { AgencyParams } from '@emails/types/AgencyParams'
import { FlightParams } from '@emails/types/FlightParams'
import { WatcherLinks } from '@emails/types/WatcherLinks'
import { WatcherParams } from '@emails/types/WatcherParams'
import { AppLogicError } from '@shared/errors/AppLogicError'

export const createResultUrl = (
  flight: FlightParams,
  agencyParams: AgencyParams,
  addParams: { readonly [key: string]: string }
): ValidUrl => {
  const { dealerId, frontendUrl } = agencyParams
  const dealerIdUrlPart = dealerId ? '&dealer_id=' + dealerId.toString() : ''

  const addParamsPart = Object.entries(addParams).map(item => {
    return `&${item[0]}=${item[1]}`
  })

  return new ValidUrl(frontendUrl.toString() + createResultLink(flight) + dealerIdUrlPart + addParamsPart)
}

const createResultLink = (flight: FlightParams): string => {
  if (flight.flightType === 'return') {
    if (!flight.arrival) {
      throw new AppLogicError('Missing arrival for return flight')
    }

    return `/booking/api/search/v3?\
id_dealer=10\
&client_encoding=utf-8\
&lang=cs\
&id=airticket\
&ui_formtype=round_trip\
&arrival_destination_1_short=${encodeURIComponent(flight.destination.toString())}\
&arrival_destination_1=${encodeURIComponent(flight.destination.toString())}\
&departure_destination_1_short=${encodeURIComponent(flight.origin.toString())}\
&departure_destination_1=${encodeURIComponent(flight.origin.toString())}\
&departure_date_1=${flight.departure.formatToSystem()}\
&departure_date_2=${flight.arrival.formatToSystem()}\
&passengers_adt=1\
`
  }

  if (flight.flightType === 'oneway') {
    return `/booking/api/search/v3?\
id_dealer=10\
&client_encoding=utf-8\
&lang=cs\
&id=airticket\
&ui_formtype=oneway\
&arrival_destination_1_short=${encodeURIComponent(flight.destination.toString())}\
&arrival_destination_1=${encodeURIComponent(flight.destination.toString())}\
&departure_destination_1_short=${encodeURIComponent(flight.origin.toString())}\
&departure_destination_1=${encodeURIComponent(flight.origin.toString())}\
&departure_date_1=${flight.departure.formatToSystem()}\
&passengers_adt=1\
`
  }

  throw new AppLogicError('Bad flight type')
}

export const createWatcherLinks = (watcher: WatcherParams, agencyParams: AgencyParams): WatcherLinks => {
  const { dealerId, frontendUrl } = agencyParams
  const dealerIdUrlPart = dealerId ? '&dealer_id=' + dealerId.toString() : ''
  const resultLinkString = frontendUrl.toString() + createResultLink(watcher) + dealerIdUrlPart

  const resultLink = new ValidUrl(resultLinkString + '&flightWatchdogResult=')

  const continueLink = new ValidUrl(
    resultLinkString + '&flightWatchdogContinue=' + encodeURIComponent(watcher.email.toString())
  )

  const deleteLink = new ValidUrl(
    resultLinkString +
      '&flightWatchdogDelete=' +
      encodeURIComponent(watcher.id.toString()) +
      '&email=' +
      encodeURIComponent(watcher.email.toString())
  )

  return {
    continueLink,
    deleteLink,
    frontendUrl,
    resultLink
  }
}
