# KARMA Skateshop

Frontend do projeto de TCC do grupo — e-commerce de streetwear e skate.

> O que vai, volta. Mais que uma marca, um lembrete.

## Tecnologias

- React 18
- Vite
- React Router DOM
- CSS puro

## Como rodar

```bash
npm install
npm run dev
```

O projeto abre em `http://localhost:5173`.

Os produtos são carregados de uma API pública (DummyJSON), usada só para
preencher o catálogo enquanto o backend do TCC não está pronto.

## Estrutura de pastas

```
src/
  assets/       imagens e logo
  components/   componentes reaproveitados nas telas
  hooks/        hooks com a lógica de produtos, carrinho e login
  pages/        uma pasta por tela do sistema
  services/     comunicação com a API
  styles/       arquivos de CSS
  App.jsx       somente as rotas
```

## Rotas

| Rota            | Tela                 |
| --------------- | -------------------- |
| `/`             | Login                |
| `/cadastro`     | Cadastro             |
| `/home`         | Tela inicial         |
| `/catalogo`     | Catálogo de produtos |
| `/produto/:id`  | Detalhe do produto   |
| `/carrinho`     | Carrinho             |

## Divisão das telas

| Integrante | Tela               | Arquivo                   |
| ---------- | ------------------ | ------------------------- |
| Ryan       | Login              | `src/pages/Login.jsx`     |
| Elias      | Tela inicial       | `src/pages/Home.jsx`      |
| Kaike      | Catálogo           | `src/pages/Catalogo.jsx`  |
| Lucas      | Detalhe do produto | `src/pages/Produto.jsx`   |
| Pablo      | Carrinho           | `src/pages/Carrinho.jsx`  |
| Vitor      | Cadastro           | `src/pages/Cadastro.jsx`  |
