import "../style.css";

import "@univerjs/preset-docs-core/lib/index.css";
import "@univerjs/preset-docs-drawing/lib/index.css";
import "@univerjs/preset-docs-hyper-link/lib/index.css";
import "@univerjs/preset-docs-thread-comment/lib/index.css";

import { UniverDocsCorePreset } from "@univerjs/preset-docs-core";
import UniverPresetDocsCoreEnUs from "@univerjs/preset-docs-core/locales/en-US";
import { UniverDocsDrawingPreset } from "@univerjs/preset-docs-drawing";
import UniverPresetDocsDrawingEnUs from "@univerjs/preset-docs-drawing/locales/en-US";
import { UniverDocsHyperLinkPreset } from "@univerjs/preset-docs-hyper-link";
import UniverPresetDocsHyperLinkEnUs from "@univerjs/preset-docs-hyper-link/locales/en-US";
import { UniverDocsThreadCommentPreset } from "@univerjs/preset-docs-thread-comment";
import UniverPresetDocsThreadCommentEnUs from "@univerjs/preset-docs-thread-comment/locales/en-US";
import { LocaleType, LogLevel, createUniver, defaultTheme, mergeLocales } from "@univerjs/presets";

const { univer, univerAPI } = createUniver({
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.EN_US]: mergeLocales(
      UniverPresetDocsCoreEnUs,
      UniverPresetDocsDrawingEnUs,
      UniverPresetDocsHyperLinkEnUs,
      UniverPresetDocsThreadCommentEnUs,
    ),
  },
  logLevel: LogLevel.VERBOSE,
  theme: defaultTheme,
  presets: [
    UniverDocsCorePreset({
      container: "app",
    }),
    UniverDocsDrawingPreset(),
    UniverDocsHyperLinkPreset(),
    UniverDocsThreadCommentPreset(),
  ],
  plugins: [],
});

univerAPI.createDocument({ title: "Preset Docs Core" });

window.univer = univer;
window.univerAPI = univerAPI;
