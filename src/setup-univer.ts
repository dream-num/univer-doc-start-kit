import '@univerjs/presets/lib/styles/preset-docs-core.css'
import '@univerjs/presets/lib/styles/preset-docs-thread-comment.css'
import '@univerjs/presets/lib/styles/preset-docs-drawing.css'
import '@univerjs/presets/lib/styles/preset-docs-hyper-link.css'

import { LocaleType, LogLevel, createUniver, defaultTheme, merge } from '@univerjs/presets'

import { UniverDocsCorePreset } from '@univerjs/presets/preset-docs-core'
import docsCoreEnUs from '@univerjs/presets/preset-docs-core/locales/en-US'

import { UniverDocsDrawingPreset } from '@univerjs/presets/preset-docs-drawing'
import docsDrawingEnUs from '@univerjs/presets/preset-docs-drawing/locales/en-US'

import { UniverDocsHyperLinkPreset } from '@univerjs/presets/preset-docs-hyper-link'
import docsHyperLinkEnUs from '@univerjs/presets/preset-docs-hyper-link/locales/en-US'

import { UniverDocsThreadCommentPreset } from '@univerjs/presets/preset-docs-thread-comment'
import docsThreadCommentEnUs from '@univerjs/presets/preset-docs-thread-comment/locales/en-US'

export function setupUniver() {
  const { univerAPI } = createUniver({
    locale: LocaleType.EN_US,
    locales: {
      [LocaleType.EN_US]: merge(
        {},
        docsCoreEnUs,
        docsDrawingEnUs,
        docsHyperLinkEnUs,
        docsThreadCommentEnUs,
      ),
    },
    logLevel: LogLevel.VERBOSE,
    theme: defaultTheme,
    presets: [
      UniverDocsCorePreset({
        container: 'univer',
        header: true,
        footer: true,
      }),
      UniverDocsDrawingPreset(),
      UniverDocsHyperLinkPreset(),
      UniverDocsThreadCommentPreset(),
    ],
    plugins: [],
  })

  univerAPI.createUniverDoc({})
  univerAPI.getActiveDocument()?.appendText('Hello World!')

  return univerAPI
}
