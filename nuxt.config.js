export default defineNuxtConfig({
  plugins: [
    { src: "~/plugins/jquery", mode: "client" },
    { src: "~/plugins/bootstrap", mode: "client" },
  ],
  sourcemap: { client: false, server: false },
//  devtools: { enabled: false },
//  vite: {
//    build: {
//      rollupOptions: {
//        output: {
//          chunkFileNames: "_nuxt/[name].js", //js
//          assetFileNames: "_nuxt/[name][extname]", //css
//          entryFileNames: "_nuxt/[name].js", //entry
//        },
//      },
//    },
//  },
});
