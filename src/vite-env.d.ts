/// <reference types="vite/client" />

import type { FUniver, Univer } from "@univerjs/presets";

declare global {
  interface Window {
    univer: Univer;
    univerAPI: FUniver;
  }
}
