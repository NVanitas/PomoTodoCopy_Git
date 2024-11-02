# PomoTodo
# Kanban Board

Este é um projeto simples de um Kanban Board criado em ASP.NET Core MVC, que permite gerenciar tarefas em três estados: **Do**, **In Progress**, e **Done**. Cada coluna exibe as tarefas com um layout visual baseado no status.

## Funcionalidades
- **Temporizador Pomodoro**: Vizualizar o tempo,ciclo e o descanço de uma atividade.
- **Adicionar Tarefas**: Criação de novas tarefas com título e descrição.
- **Editar Tarefas**: Edição de informações de tarefas existentes.
- **Detalhes das Tarefas**: Visualização detalhada de cada tarefa.
- **Excluir Tarefas**: Remoção de tarefas indesejadas.
- **Classificação por Status**: Tarefas organizadas em três colunas:
  - **Do**: Tarefas a serem feitas.
  - **In Progress**: Tarefas em andamento.
  - **Done**: Tarefas concluídas.

## Estrutura de Pastas 
- `/wwwroot`: Contém a pasta css,js e as libraries
- `/Models`: Contém a classe `Todo` que define o modelo de dados da tarefa.
- `/Views/Todo`: Contém as Views para exibição, edição, criação e deleção das tarefas.
- `/Controllers`: Controla a lógica de CRUD para as tarefas.

## Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/NVanitas/PomoTodoCopy_Git.git

