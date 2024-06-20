import '@univerjs/design/lib/index.css'
import '@univerjs/ui/lib/index.css'

import { LocaleType, LogLevel, Univer, UniverInstanceType } from '@univerjs/core'
import { defaultTheme } from '@univerjs/design'
import { UniverDocsPlugin } from '@univerjs/docs'
import { UniverDocsUIPlugin } from '@univerjs/docs-ui'
import { UniverFormulaEnginePlugin } from '@univerjs/engine-formula'
import { UniverRenderEnginePlugin, ptToPixel } from '@univerjs/engine-render'
import { UniverUIPlugin } from '@univerjs/ui'
import { FUniver } from '@univerjs/facade'
import { locales } from './locale'
import { convertPureStringToUDM } from './libs/convertPureStringToUDM'

export function setupUniver() {
  const univer = new Univer({
    theme: defaultTheme,
    locale: LocaleType.ZH_CN,
    logLevel: LogLevel.VERBOSE,
    locales,
  })

  // core plugins
  univer.registerPlugin(UniverRenderEnginePlugin)
  univer.registerPlugin(UniverFormulaEnginePlugin)
  univer.registerPlugin(UniverUIPlugin, {
    container: 'univer',
    header: true,
  })
  univer.registerPlugin(UniverDocsPlugin)
  univer.registerPlugin(UniverDocsUIPlugin, {
    container: 'univerdoc',
    layout: {
      docContainerConfig: {
        innerLeft: false,
      },
    },
  })

  univer.createUnit(UniverInstanceType.UNIVER_DOC, {
    body: convertPureStringToUDM(''),
    documentStyle: {
      pageSize: {
        width: ptToPixel(595),
        height: ptToPixel(842),
      },
      marginTop: ptToPixel(50),
      marginBottom: ptToPixel(50),
      marginRight: ptToPixel(40),
      marginLeft: ptToPixel(40),
      renderConfig: {
        vertexAngle: 0,
        centerAngle: 0,
      },
    },
  })

  const univerAPI = FUniver.newAPI(univer)

  univerAPI.getActiveDocument()?.appendText('Hello World!')

  return univerAPI
}
