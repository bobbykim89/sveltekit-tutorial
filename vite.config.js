import { sveltekit } from '@sveltejs/kit/vite'
import * as path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('./src') }],
  },
}

export default config
