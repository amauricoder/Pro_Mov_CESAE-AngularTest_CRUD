# Requisitos do projeto
## Os dados da tripulação fornecidos pelo professor estão alocados em assets/dados.ts.

- Lista do Pessoal (Tabela Principal)
    - Objetivo: Mostrar de forma clara e organizada todo o pessoal a bordo da nave Aurora
    - Campos a exibir na tabela:
        - ID: Um identificador único para cada membro (podes usar um número simples, gerado automaticamente)
        - Nome: O nome completo do membro
        - Espécie: Indicar se é "Humano 🧑", "Grey 👽", "Reptiliano 🦎" e "Nórdico 👱‍♂️"
        - Função: O cargo que desempenha na nave (ex: Capitão, Piloto, Engenheiro, Médico, etc.)
        - Estado: O estado atual do membro (ex: Ativo, Em Missão, De Férias, Em Descanso, etc.)
        - Ações: Botões para ver detalhes, editar e eliminar o membro
    - Funcionalidades:
        - Cada estado diferente, devera ter uma cor de fundo e cor de texto a tua escolha

---

- Página de Detalhes do Membro
    - Objetivo: Apresentar todas as informações de um membro específico
    - Campos a exibir: Todos os campos da tabela, e ainda:
        - Data de Nascimento/Criação: (Para humanos ou humanoides, respetivamente)
        - Setor/Departamento: A área da nave onde trabalha (ex: Ponte de Comando, Engenharia, Enfermaria)
        - Contactos de Emergência: (Um campo de texto simples para registar)
        - Notas/Observações: Um campo de texto livre para informações adicionais
        - Imagem/Avatar: Embora não seja obrigatório carregar ficheiros, podem usar um URL de uma imagem de um "placeholder" ou um ícone
    - Funcionalidades:
        - Botão para voltar à lista principal
        - Botão para editar o membro diretamente desta página

---

- Criar Novo Membro
    - Objetivo: Adicionar um novo elemento à tripulação da Aurora
    - Formulário de Criação:
        - Campos para preencher: Nome, Espécie (com opção "Humano" ou "Humanoide"), Função, Estado, Data de Nascimento/Criação, Setor/Departamento, Contactos de Emergência, Notas/Observações
        - Validação de formulário: Pelo menos o Nome e a Espécie devem ser campos obrigatórios
    - Funcionalidades:
        - Botão "Guardar" para adicionar o novo membro à lista
        - Botão "Cancelar" para regressar à lista principal sem guardar
        - Mensagem de sucesso após a criação

---

- Editar Membro Existente
    - Objetivo: Alterar as informações de um membro já registado
    - Formulário de Edição: Será muito semelhante ao formulário de criação, mas já preenchido com os dados atuais do membro
    - Funcionalidades:
        - Botão "Atualizar" para guardar as alterações
        - Botão "Cancelar" para descartar as alterações e regressar à lista/detalhes
        - Mensagem de sucesso após a atualização

---

- Eliminar Membro
    - Objetivo: Remover um membro da tripulação
    - Funcionalidades:
        - Um botão "Eliminar" na lista principal (na coluna de ações) e/ou na página de detalhes
        - Uma confirmação antes da eliminação (uma pequena janela de "Tem a certeza que quer eliminar?")
        - Mensagem de sucesso após a eliminação

---

- Tecnologias e Conceitos de Angular a Explorar:
    - Componentes: Vários componentes para cada parte da aplicação (lista, detalhes, formulário)
    - Rotas (Routing): Navegação entre a lista, detalhes e formulários de criação/edição
    - Serviços (Services): Para gerir os dados do pessoal e as operações de adicionar, editar e eliminar (mesmo que seja em memória, ajuda a organizar o código)
    - Formulários Reativos (Reactive Forms): Para a criação e edição de membros, com validações
    - Blocos de Controlo de Fluxo (@if, @for): Para exibir/esconder elementos e iterar sobre listas
    - Event Binding e Property Binding: Para a comunicação entre componentes e interações do utilizador

---

# SpaceList

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
