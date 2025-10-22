#!/usr/bin/env node
const { execSync } = require("child_process");

try {
  const user = execSync("whoami").toString().trim();
  if (user === "root") {
    console.error("\x1b[31m%s\x1b[0m", "❌ ERRO: Não use 'sudo npm install'!");
    console.error("Execute apenas 'npm install' como usuário normal.\n");
    process.exit(1);
  }
} catch (e) {
  // Ignora erros não críticos
}
