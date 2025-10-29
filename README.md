# 📝 OnceNote

Check the working project on the following link:
https://oncenote-front.web.app/ 

OnceNote é uma aplicação fullstack desenvolvida com **Next.js** no frontend e **Node.js (Express)** no backend, projetada para criar, armazenar e visualizar notas de forma simples e eficiente.  
O backend é hospedado no **Google Cloud Run**, enquanto o frontend é distribuído pelo **Firebase Hosting**.

---

## 🚀 Visão Geral

A aplicação permite que o usuário:

- ✏️ Crie notas de texto;
- 📄 Consulte notas individuais através de um identificador único (ID);
- ☁️ Se beneficie de uma arquitetura escalável e moderna;
- 🌎 Acesse a interface em múltiplos idiomas (Português e Inglês);
- 💾 Veja o funcionamento completo de uma stack integrada: **Frontend + Backend + Cloud + Deploy Automático**.

---

## 🧩 Arquitetura do Projeto

oncenote/
├── backend/ # API REST desenvolvida em Node.js (Express)
│ ├── routes/
│ ├── controllers/
│ ├── services/
│ ├── package.json
│ └── Dockerfile
│
├── frontend/ # Aplicação Next.js (React)
│ ├── pages/
│ ├── components/
│ ├── styles/
│ ├── public/
│ ├── next.config.js
│ ├── package.json
│ └── out/ # Saída estática para Firebase Hosting
│
├── firebase.json # Configuração do deploy do frontend
├── .firebaserc
└── README.md



---

## ⚙️ Tecnologias Utilizadas

| Camada | Tecnologia | Descrição |
|:--------|:------------|:------------|
| **Frontend** | [Next.js 15](https://nextjs.org/) | Framework React para renderização estática e híbrida |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | CSS utilitário moderno e responsivo |
| **Backend** | [Node.js + Express](https://expressjs.com/) | API RESTful escalável e simples |
| **Deploy Backend** | [Google Cloud Run](https://cloud.google.com/run) | Execução serverless de containers |
| **Deploy Frontend** | [Firebase Hosting](https://firebase.google.com/docs/hosting) | Hospedagem rápida e segura |
| **Idioma Dinâmico** | i18next | Tradução e alternância entre idiomas (PT/EN) |

---

## 🧠 Como Funciona

1. O usuário acessa o **OnceNote** no navegador;
2. A página inicial (`/`) exibe o formulário para criação de uma nova nota;
3. Ao enviar, o frontend faz uma requisição `POST` para o backend no Cloud Run;
4. O backend retorna um **ID único** da nota criada;
5. O usuário pode acessar a nota individual pelo endpoint `/note/[id]`;
6. O sistema renderiza o conteúdo armazenado.

---

## 🛠️ Instruções de Uso Local

### Pré-requisitos
- Node.js 18+
- Firebase CLI (`npm install -g firebase-tools`)
- Conta no Google Cloud configurada com o projeto

### Passos

```bash
# Clone o repositório
git clone https://github.com/leonardoor90/oncenote.git
cd oncenote

# Instale as dependências
cd frontend
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Execute em modo desenvolvimento
npm run dev

Para o backend:

    cd ../backend
    npm install
    npm start

🌐 Versões Suportadas
Componente	Versão
Node.js	18.x
Next.js	15.x
Tailwind	3.x
Firebase CLI	13.x

🌍 Idiomas

A interface suporta dois idiomas:

🇧🇷 Português

🇺🇸 Inglês

O botão de alternância fica visível no canto superior direito da aplicação.

🧑‍💻 Autor

Leonardo Ramos
Analista de Governança, Riscos e Conformidade | Especialista em Segurança da Informação e Privacidade de Dados.
Certificado em ISO 27001, ISO 27701, CIS Controls e GDPR/LGPD.