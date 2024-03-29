import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'styles/index.css'),
  title: 'Workshop',
  description: 'Rspack-based Static Site Generator',
  themeConfig: {},
});
