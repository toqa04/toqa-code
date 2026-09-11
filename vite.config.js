import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// GitHub Pages serves project sites from /<repo-name>/. The workflow supplies
// VITE_BASE_PATH automatically; the repository name fallback also makes
// direct GitHub Actions builds work without extra configuration.
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBase = repositoryName ? `/${repositoryName}/` : "/";

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || githubPagesBase,
});
