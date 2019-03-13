import * as React from 'react'
import { Button } from 'src/reactComponents/Button'
import { OpenedWindow } from 'src/reactComponents/OpenedWindow'
import * as styles from 'src/styles'
import { Text } from 'src/translation/Text'
import { TranslationEnum } from 'src/translation/TranslationEnum'
import { FlightParams } from 'src/types/FlightParams'
import { ValidPrice } from 'src/validObjects/ValidPrice'

interface Props {
  readonly flightParams: FlightParams
  readonly price: ValidPrice
  onDeleteAndCreateWatcher(): void
  onClose(event: React.MouseEvent<HTMLElement>): void
}
export class RemoveWatcherPage extends React.Component<Props> {
  public render() {
    const { flightParams, price, onClose, onDeleteAndCreateWatcher } = this.props

    return (
      <OpenedWindow
        handleClose={onClose}
        flightParams={flightParams}
        price={price}
        id="flight-watchdog-window-is-open-delete-and-create"
      >
        <p style={styles.simpleText}>
          <Text name={TranslationEnum.ClientMessageWatcherAlreadyExists} />
        </p>
        <Button onClick={onDeleteAndCreateWatcher} id="flight-watchdog-window-clicked-ok">
          <Text name={TranslationEnum.ClientButtonYes} />
        </Button>
        <Button onClick={onClose} style={{ marginLeft: '5px' }} id="flight-watchdog-window-clicked-cancel">
          <Text name={TranslationEnum.ClientButtonClose} />
        </Button>
      </OpenedWindow>
    )
  }
}
