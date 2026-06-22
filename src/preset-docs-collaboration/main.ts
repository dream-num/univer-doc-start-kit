import { UniverDocsAdvancedPreset } from "@univerjs/preset-docs-advanced";
import UniverPresetDocsAdvancedEnUs from "@univerjs/preset-docs-advanced/locales/en-US";
import { UniverDocsCollaborationPreset } from "@univerjs/preset-docs-collaboration";
import UniverPresetDocsCollaborationEnUs from "@univerjs/preset-docs-collaboration/locales/en-US";
import { UniverDocsCorePreset } from "@univerjs/preset-docs-core";
import UniverPresetDocsCoreEnUs from "@univerjs/preset-docs-core/locales/en-US";
import { UniverDocsDrawingPreset } from "@univerjs/preset-docs-drawing";
import UniverPresetDocsDrawingEnUs from "@univerjs/preset-docs-drawing/locales/en-US";
import { UniverDocsHyperLinkPreset } from "@univerjs/preset-docs-hyper-link";
import UniverPresetDocsHyperLinkEnUs from "@univerjs/preset-docs-hyper-link/locales/en-US";
import { UniverDocsThreadCommentPreset } from "@univerjs/preset-docs-thread-comment";
import UniverPresetDocsThreadCommentEnUs from "@univerjs/preset-docs-thread-comment/locales/en-US";
import {
  LocaleType,
  LogLevel,
  UniverInstanceType,
  createUniver,
  defaultTheme,
  mergeLocales,
} from "@univerjs/presets";
import "../style.css";
import "@univerjs/preset-docs-core/lib/index.css";
import "@univerjs/preset-docs-drawing/lib/index.css";
import "@univerjs/preset-docs-hyper-link/lib/index.css";
import "@univerjs/preset-docs-thread-comment/lib/index.css";
import "@univerjs/preset-docs-advanced/lib/index.css";
import "@univerjs/preset-docs-collaboration/lib/index.css";

const { univer, univerAPI } = createUniver({
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.EN_US]: mergeLocales(
      UniverPresetDocsCoreEnUs,
      UniverPresetDocsDrawingEnUs,
      UniverPresetDocsHyperLinkEnUs,
      UniverPresetDocsThreadCommentEnUs,
      UniverPresetDocsAdvancedEnUs,
      UniverPresetDocsCollaborationEnUs,
    ),
  },
  logLevel: LogLevel.VERBOSE,
  theme: defaultTheme,
  collaboration: true,
  presets: [
    UniverDocsCorePreset({
      container: "app",
    }),
    UniverDocsDrawingPreset({
      collaboration: true,
    }),
    UniverDocsHyperLinkPreset(),
    UniverDocsThreadCommentPreset(),
    UniverDocsAdvancedPreset({
      // eslint-disable-next-line node/prefer-global/process
      license: process.env.UNIVER_CLIENT_LICENSE,
    }),
    UniverDocsCollaborationPreset(),
  ],
  plugins: [],
});

window.univer = univer;
window.univerAPI = univerAPI;

// check if the unit is already created
const url = new URL(window.location.href);
const unit = url.searchParams.get("unit");
if (unit) {
  // waiting for the unit to be loaded
} else {
  fetch(`/universer-api/snapshot/${UniverInstanceType.UNIVER_DOC}/unit/-/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: UniverInstanceType.UNIVER_DOC,
      name: "New Sheet By Univer",
      creator: "user",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to create new sheet");
      }

      return response.json();
    })
    .then((data) => {
      if (!data.unitID) {
        throw new Error("create unit failed");
      }

      url.searchParams.set("unit", data.unitID);
      url.searchParams.set("type", String(UniverInstanceType.UNIVER_DOC));
      window.location.href = url.toString();
    })
    .catch((error) => {
      console.error(error);
    });
}
