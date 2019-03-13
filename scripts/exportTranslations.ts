import * as xlsx from 'xlsx'
import { csTranslation } from '../src/translation/csTranslation'
import { enTranslation } from '../src/translation/enTranslation'
import { TranslationEnum } from '../src/translation/TranslationEnum'

const fileName = 'translations.xlsx'

// tslint:disable-next-line
console.log('Export started.')

const workbook = xlsx.utils.book_new()
const worksheet = xlsx.utils.aoa_to_sheet([['key', 'cs', 'en']])

Object.keys(TranslationEnum).filter(
  (item: string): void => {
    // tslint:disable:object-literal-sort-keys
    xlsx.utils.sheet_add_json(
      worksheet,
      [
        {
          key: item,
          cs: csTranslation[item],
          en: enTranslation[item]
        }
      ],
      { skipHeader: true, origin: -1 }
    )
  }
)

xlsx.utils.book_append_sheet(workbook, worksheet, 'Preklady')
xlsx.writeFile(workbook, fileName)

// tslint:disable-next-line
console.log('Export done to file ' + fileName + '.')
