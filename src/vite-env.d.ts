/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly VITE_GAME_ID: string
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}