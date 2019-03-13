import * as React from 'react'
import { renderToString } from 'react-dom/server'
import * as styles from 'src/styles'
import { Text } from 'src/translation/Text'
import { TranslationEnum } from 'src/translation/TranslationEnum'

interface Props {
  readonly value?: string
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

export class EmailInput extends React.Component<Props> {
  public render() {
    const placeholder: string = renderToString(<Text name={TranslationEnum.ClientInputEmailPlaceholder} />)

    return (
      <input placeholder={placeholder} style={styles.input} value={this.props.value} onChange={this.props.onChange} />
    )
  }
}
