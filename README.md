<h1 align="center">
<img src="https://imgs.search.brave.com/QcVwRD4lMS4Y9B6fQF2WF0f577aJkYUmvse1L2YPing/rs:fit:150:150:1/g:ce/aHR0cHM6Ly93d3cu/bWNsZW9kZ2FtaW5n/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wNS9yZWRk/aXRfbG9nby0xNTB4/MTUwLnBuZw">
</h1>

# Reddit Test

O design ficou baseado no layout exemplo, mas eu busquei aplicar em alguns pontos o modelo de cards com bordas arredondadas e distribuir um pouco melhor os textos do layout. Consegui fazer todos os requisitos principais e dos pontos extras apenas ficou faltando os testes unitários. 

### Principiáis tecnologias usadas

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [MobX](https://mobx.js.org/react-integration.html)
- [Axios](https://axios-http.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)


### Estruturação do projeto

Os seguintes aspectos foram usados para criar a estrutura de pastas:

```
↳ src/
  ↳ Components/         # Componentes usados nos modelos de páginas
  ↳ Models/             # Gerenciamento dos módulos
  ↳ Score/              # Armazenamento de Dados com MobX
  ↳ Screens/            # Telas do App
  ↳ Services/           # Serviço API Calls
  ↳ Router.tsx          # Configuração das Rotas
```

### Clonagem do Projeto

```bash
git clone https://github.com/joaomiiiguel/Reddit.git
cd reddit
yarn install
npx react-native start
```

### Thanks

Desde já, agradeço a experiência e a oportunidade proporcionada e em breve espero somar ao time.
