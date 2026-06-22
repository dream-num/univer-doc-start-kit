import process from "node:process";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";

import packageJson from "./package.json";

const root = fileURLToPath(new URL(".", import.meta.url));
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    server: {
      cors: true,
      proxy: {
        "/universer-api": {
          target: env.UNIVER_ENDPOINT,
          changeOrigin: true,
          ws: true,
        },
      },
      allowedHosts: ["local.univer.plus"],
    },
    define: {
      "process.env.UNIVER_CLIENT_LICENSE": `"${env.UNIVER_CLIENT_LICENSE || "%%UNIVER_CLIENT_LICENSE_PLACEHOLDER%%"}"`,
      "process.env.UNIVER_VERSION": `"${packageJson.dependencies["@univerjs/presets"]}"`,
    },
    build: {
      rollupOptions: {
        input: {
          index: resolve(root, "index.html"),
          presetDocsCore: resolve(root, "preset-docs-core/index.html"),
          presetDocsAdvanced: resolve(root, "preset-docs-advanced/index.html"),
          presetDocsCollaboration: resolve(root, "preset-docs-collaboration/index.html"),
          umdPresetDocsCore: resolve(root, "umd/preset-docs-core/index.html"),
          umdPresetDocsAdvanced: resolve(root, "umd/preset-docs-advanced/index.html"),
          umdPresetDocsCollaboration: resolve(root, "umd/preset-docs-collaboration/index.html"),
        },
      },
    },
  });
};
