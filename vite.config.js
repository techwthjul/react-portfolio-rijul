import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

<<<<<<< HEAD
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
=======
export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/',
>>>>>>> e7d31b802b472bb3ece2637001df8c64dc473ed1
  // other configurations
});