import type { FUniver } from '@univerjs/facade'
import { setupCommandsListenerSwitch, setupEditSwitch, setupRedo, setupSelectText, setupUndo } from './api'

export function setupToolbar(univerAPI: FUniver) {
  const $toolbar = document.getElementById('toolbar')!

  setupCommandsListenerSwitch($toolbar, univerAPI)
  setupEditSwitch($toolbar, univerAPI)

  setupUndo($toolbar, univerAPI)
  setupRedo($toolbar, univerAPI)

  setupSelectText($toolbar, univerAPI)
}
