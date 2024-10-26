import org.example.GerenciadorDeTarefas; // Importa a classe GerenciadorDeTarefas para ser testada.
import org.example.Tarefa; // Importa a classe Tarefa que será utilizada nos testes.
import org.junit.jupiter.api.BeforeEach; // Importa a anotação @BeforeEach para configurar o ambiente de teste antes de cada teste.
import org.junit.jupiter.api.Test; // Importa a anotação @Test para definir métodos de teste.

import static org.junit.jupiter.api.Assertions.*; // Importa métodos estáticos de asserções para validar os resultados dos testes.

public class GerenciadorDeTarefasTest { // Declara a classe de teste para o GerenciadorDeTarefas.
    private GerenciadorDeTarefas gerenciadorDeTarefas; // Cria uma instância de GerenciadorDeTarefas para uso nos testes.

    @BeforeEach
    public void setup() { // Método que será executado antes de cada teste para configurar o ambiente.
        gerenciadorDeTarefas = new GerenciadorDeTarefas(); // Inicializa a instância de GerenciadorDeTarefas.
    }

    @Test
    public void testAdicionarTarefa() { // Teste para verificar se uma tarefa é adicionada corretamente.
        Tarefa tarefa = new Tarefa("Estudar Java"); // Cria uma nova tarefa com o título "Estudar Java".
        gerenciadorDeTarefas.adicionarTarefa(tarefa); // Adiciona a tarefa ao gerenciador.

        assertNotNull(gerenciadorDeTarefas.buscarTarefa("Estudar Java")); // Verifica se a tarefa foi adicionada buscando pelo título.
    }

    @Test
    public void testRemoverTarefa() { // Teste para verificar se uma tarefa é removida corretamente.
        Tarefa tarefa = new Tarefa("Estudar Javascript"); // Cria uma tarefa com o título "Estudar Javascript".
        gerenciadorDeTarefas.adicionarTarefa(tarefa); // Adiciona a tarefa ao gerenciador.
        gerenciadorDeTarefas.removerTarefa(tarefa); // Remove a tarefa do gerenciador.

        assertNull(gerenciadorDeTarefas.buscarTarefa("Estudar Javascript")); // Verifica se a tarefa foi removida.
    }

    @Test
    public void testBuscarTarefaExistente() { // Teste para verificar se a busca por uma tarefa existente funciona corretamente.
        Tarefa tarefa = new Tarefa("Estudar Python"); // Cria uma tarefa com o título "Estudar Python".
        gerenciadorDeTarefas.adicionarTarefa(tarefa); // Adiciona a tarefa ao gerenciador.

        Tarefa resultado = gerenciadorDeTarefas.buscarTarefa("Estudar Python"); // Busca a tarefa pelo título.

        assertNotNull(resultado); // Verifica se a tarefa foi encontrada.
        assertEquals("Estudar Python", resultado.getTitulo()); // Verifica se o título da tarefa encontrada é o esperado.
    }
}