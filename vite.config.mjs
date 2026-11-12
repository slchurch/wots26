import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        watchCenters: resolve(root, 'watch-centers.html'),
      },
    },
  },
};
