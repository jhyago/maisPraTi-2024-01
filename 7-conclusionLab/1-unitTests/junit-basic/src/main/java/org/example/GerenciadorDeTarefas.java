package org.example; // Define o pacote onde a classe está localizada, ajudando a organizar o projeto.

import java.util.ArrayList; // Importa a classe ArrayList para criar uma lista dinâmica de tarefas.
import java.util.List; // Importa a interface List, que será usada como tipo para armazenar as tarefas.

public class GerenciadorDeTarefas { // Declara a classe GerenciadorDeTarefas, que gerencia uma lista de tarefas.

    private List<Tarefa> tarefas = new ArrayList<>(); // Cria uma lista de Tarefas, onde cada tarefa será armazenada.

    // Método para adicionar uma nova tarefa à lista de tarefas.
    public void adicionarTarefa(Tarefa tarefa){
        tarefas.add(tarefa); // Adiciona a tarefa recebida como parâmetro à lista de tarefas.
    }

    // Método para remover uma tarefa específica da lista de tarefas.
    public void removerTarefa(Tarefa tarefa){
        tarefas.remove(tarefa); // Remove a tarefa recebida como parâmetro da lista de tarefas.
    }

    // Método para buscar uma tarefa pelo título, ignorando a diferença entre maiúsculas e minúsculas.
    public Tarefa buscarTarefa(String titulo){
        for(Tarefa tarefa : tarefas){ // Percorre cada tarefa na lista de tarefas.
            if(tarefa.getTitulo().equalsIgnoreCase(titulo)){ // Verifica se o título da tarefa é igual ao título procurado.
                return tarefa; // Retorna a tarefa encontrada.
            }
        }
        return null; // Retorna null se nenhuma tarefa com o título especificado for encontrada.
    }

    // Método para listar todas as tarefas que estão marcadas como concluídas.
    public List<Tarefa> listarTarefasConcluidas() {
        List<Tarefa> concluidas = new ArrayList<>(); // Cria uma nova lista para armazenar as tarefas concluídas.
        for(Tarefa tarefa: tarefas){ // Percorre cada tarefa na lista de tarefas.
            if(tarefa.isConcluida()){ // Verifica se a tarefa está concluída.
                concluidas.add(tarefa); // Adiciona a tarefa à lista de tarefas concluídas.
            }
        }
        return concluidas; // Retorna a lista de tarefas concluídas.
    }
}