/// <reference types="astro/client" />

type Theme = "light" | "dark";

interface Window {
  /** Aplica un tema, lo persiste en localStorage y emite el evento `themechange`. */
  __setTheme: (theme: Theme) => void;
  /** Devuelve el tema activo según la clase `dark` del documento. */
  __getTheme: () => Theme;
}
