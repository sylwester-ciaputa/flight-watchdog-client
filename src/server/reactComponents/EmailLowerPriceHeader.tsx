import * as React from 'react'
import { WatcherFullInfo } from 'src/server/types/WatcherFullInfo'
import { HeaderDates } from 'src/shared/reactComponents/HeaderDates'
import { LocationNameList } from 'src/shared/reactComponents/LocationNameList'
import * as styles from 'src/shared/reactComponents/styles'
import { Text } from 'src/shared/translation/Text'
import { TranslationEnum } from 'src/shared/translation/TranslationEnum'

interface Props {
  readonly watcherFullInfo: WatcherFullInfo
}

export class EmailLowerPriceHeader extends React.Component<Props> {
  public render() {
    const { watcherFullInfo } = this.props
    const { watcher, watcherLinks, originLocationList, destinationLocationList } = watcherFullInfo
    const { frontendUrl } = watcherLinks
    const destinationTextKey = watcher.flightType.isReturn()
      ? TranslationEnum.ClientDestinationsReturn
      : TranslationEnum.ClientDestinationsOneway

    return (
      <div style={styles.header}>
        <div style={styles.headerText}>
          <Text name={TranslationEnum.EmailTitle} />
        </div>
        <div style={styles.headerTextDescription}>
          <Text name={TranslationEnum.EmailDescription}>
            <a href={frontendUrl.toString()}>{frontendUrl.toString()}</a>
          </Text>
        </div>

        <div style={styles.headerDestinations}>
          <Text name={destinationTextKey}>
            <span style={styles.primaryColor}>
              <LocationNameList locationList={originLocationList} />
            </span>
            <span style={styles.primaryColor}>
              <LocationNameList locationList={destinationLocationList} />
            </span>
          </Text>
        </div>
        <div style={styles.headerDates}>
          <HeaderDates departure={watcher.departure} arrival={watcher.arrival} />
        </div>
      </div>
    )
  }
}
