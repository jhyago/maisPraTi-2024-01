import java.util.Scanner;

// ---------------------------------------------
// 1. Gerenciador de Tarefas com Lista Simplesmente Encadeada
// ---------------------------------------------
class Task {
    String description;
    boolean isCompleted;
    Task next;

    public Task(String description) {
        this.description = description;
        this.isCompleted = false;
        this.next = null;
    }

    public void markAsCompleted() {
        this.isCompleted = true;
    }
}

class TaskManager {
    private Task head;

    public void addTask(String description) {
        Task newTask = new Task(description);
        if (head == null) {
            head = newTask;
        } else {
            Task current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newTask;
        }
        System.out.println("Tarefa '" + description + "' adicionada.");
    }

    public void removeTask(String description) {
        if (head == null) {
            System.out.println("Nenhuma tarefa encontrada.");
            return;
        }

        if (head.description.equals(description)) {
            head = head.next;
            System.out.println("Tarefa '" + description + "' removida.");
            return;
        }

        Task current = head;
        while (current.next != null && !current.next.description.equals(description)) {
            current = current.next;
        }

        if (current.next != null) {
            current.next = current.next.next;
            System.out.println("Tarefa '" + description + "' removida.");
        } else {
            System.out.println("Tarefa não encontrada.");
        }
    }

    public void markTaskAsCompleted(String description) {
        Task current = head;
        while (current != null) {
            if (current.description.equals(description)) {
                current.markAsCompleted();
                System.out.println("Tarefa '" + description + "' marcada como concluída.");
                return;
            }
            current = current.next;
        }
        System.out.println("Tarefa não encontrada.");
    }

    public void listTasks() {
        Task current = head;
        if (current == null) {
            System.out.println("Nenhuma tarefa disponível.");
            return;
        }

        System.out.println("Lista de tarefas:");
        while (current != null) {
            System.out.println("Tarefa: " + current.description + " | Concluída: " + current.isCompleted);
            current = current.next;
        }
    }
}

// ---------------------------------------------
// 2. Histórico de Navegação com Lista Simplesmente Encadeada
// ---------------------------------------------
class URLNode {
    String url;
    URLNode next;

    public URLNode(String url) {
        this.url = url;
        this.next = null;
    }
}

class BrowserHistory {
    private URLNode head;
    private int maxSize;
    private int currentSize;

    public BrowserHistory(int maxSize) {
        this.maxSize = maxSize;
        this.currentSize = 0;
        this.head = null;
    }

    public void visit(String url) {
        URLNode newNode = new URLNode(url);
        if (currentSize == maxSize) {
            removeOldest();
        }
        if (head == null) {
            head = newNode;
        } else {
            URLNode current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        currentSize++;
        System.out.println("Visitou: " + url);
    }

    private void removeOldest() {
        if (head != null) {
            head = head.next;
            currentSize--;
        }
    }

    public void listHistory() {
        URLNode current = head;
        if (current == null) {
            System.out.println("Nenhum histórico de navegação.");
            return;
        }

        System.out.println("Histórico de navegação:");
        while (current != null) {
            System.out.println(current.url);
            current = current.next;
        }
    }
}

// ---------------------------------------------
// 3. Sistema de Controle de Reversão (Undo) com Lista Simplesmente Encadeada
// ---------------------------------------------
class ActionNode {
    String action;
    ActionNode next;

    public ActionNode(String action) {
        this.action = action;
        this.next = null;
    }
}

class UndoManager {
    private ActionNode head;

    public void addAction(String action) {
        ActionNode newNode = new ActionNode(action);
        if (head == null) {
            head = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
        System.out.println("Ação '" + action + "' realizada.");
    }

    public void undo() {
        if (head == null) {
            System.out.println("Nenhuma ação a desfazer.");
        } else {
            System.out.println("Ação '" + head.action + "' desfeita.");
            head = head.next;
        }
    }

    public void listActions() {
        ActionNode current = head;
        if (current == null) {
            System.out.println("Nenhuma ação disponível.");
            return;
        }

        System.out.println("Histórico de ações:");
        while (current != null) {
            System.out.println(current.action);
            current = current.next;
        }
    }
}

// ---------------------------------------------
// Lista Duplamente Encadeada
// ---------------------------------------------
class Node {
    String data;
    Node prev;
    Node next;

    public Node(String data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// 4. Editor de texto com operações de Undo e Redo com Lista Duplamente Encadeada
class TextEditor {
    private Node head;
    private Node current;

    public TextEditor() {
        this.head = null;
        this.current = null;
    }

    public void addAction(String action) {
        Node newNode = new Node(action);
        if (head == null) {
            head = newNode;
            current = head;
        } else {
            current.next = newNode;
            newNode.prev = current;
            current = newNode;
        }
        System.out.println("Ação '" + action + "' adicionada.");
    }

    public void undo() {
        if (current != null) {
            System.out.println("Desfazendo: " + current.data);
            current = current.prev;
        } else {
            System.out.println("Nada a desfazer.");
        }
    }

    public void redo() {
        if (current != null && current.next != null) {
            current = current.next;
            System.out.println("Refazendo: " + current.data);
        } else {
            System.out.println("Nada a refazer.");
        }
    }

    public void listActions() {
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }
    }
}

// ---------------------------------------------
// 5. Jogo de Cartas com Lista Duplamente Encadeada
// ---------------------------------------------
class CardGame {
    private Node head;
    private Node tail;

    public CardGame() {
        head = null;
        tail = null;
    }

    public void addCard(String card) {
        Node newCard = new Node(card);
        if (head == null) {
            head = tail = newCard;
        } else {
            tail.next = newCard;
            newCard.prev = tail;
            tail = newCard;
        }
        System.out.println("Carta " + card + " adicionada.");
    }

    public void removeCard(String card) {
        Node current = head;
        while (current != null && !current.data.equals(card)) {
            current = current.next;
        }

        if (current != null) {
            if (current.prev != null) {
                current.prev.next = current.next;
            } else {
                head = current.next;
            }

            if (current.next != null) {
                current.next.prev = current.prev;
            } else {
                tail = current.prev;
            }
            System.out.println("Carta " + card + " removida.");
        } else {
            System.out.println("Carta não encontrada.");
        }
    }

    public void listCards() {
        Node current = head;
        while (current != null) {
            System.out.println("Carta: " + current.data);
            current = current.next;
        }
    }
}

// ---------------------------------------------
// Fila
// ---------------------------------------------
class QueueNode {
    String name;
    QueueNode next;

    public QueueNode(String name) {
        this.name = name;
        this.next = null;
    }
}

// 6. Simulador de Fila de Atendimento
class BankQueue {
    private QueueNode front, rear;

    public BankQueue() {
        front = rear = null;
    }

    public void addClient(String name) {
        QueueNode newClient = new QueueNode(name);
        if (rear == null) {
            front = rear = newClient;
        } else {
            rear.next = newClient;
            rear = newClient;
        }
        System.out.println("Cliente " + name + " adicionado à fila.");
    }

    public void serveClient() {
        if (front == null) {
            System.out.println("Nenhum cliente na fila.");
        } else {
            System.out.println("Servindo cliente " + front.name);
            front = front.next;
            if (front == null) {
                rear = null;
            }
        }
    }

    public void listClients() {
        QueueNode current = front;
        while (current != null) {
            System.out.println("Cliente: " + current.name);
            current = current.next;
        }
    }
}

// ---------------------------------------------
// 7. Gerenciamento de Impressões
// ---------------------------------------------
class PrintJob {
    String document;
    PrintJob next;

    public PrintJob(String document) {
        this.document = document;
        this.next = null;
    }
}

class PrintQueue {
    private PrintJob front, rear;

    public PrintQueue() {
        front = rear = null;
    }

    public void addJob(String document) {
        PrintJob newJob = new PrintJob(document);
        if (rear == null) {
            front = rear = newJob;
        } else {
            rear.next = newJob;
            rear = newJob;
        }
        System.out.println("Job '" + document + "' adicionado à fila de impressão.");
    }

    public void processJob() {
        if (front == null) {
            System.out.println("Nenhum trabalho de impressão na fila.");
        } else {
            System.out.println("Imprimindo '" + front.document + "'");
            front = front.next;
            if (front == null) {
                rear = null;
            }
        }
    }

    public void listJobs() {
        PrintJob current = front;
        while (current != null) {
            System.out.println("Documento na fila: " + current.document);
            current = current.next;
        }
    }
}

// ---------------------------------------------
// Testando todas as implementações
// ---------------------------------------------
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Teste Gerenciador de Tarefas
        TaskManager taskManager = new TaskManager();
        taskManager.addTask("Estudar Java");
        taskManager.addTask("Fazer exercícios");
        taskManager.listTasks();
        taskManager.markTaskAsCompleted("Estudar Java");
        taskManager.removeTask("Fazer exercícios");
        taskManager.listTasks();

        // Teste Histórico de Navegação
        BrowserHistory browserHistory = new BrowserHistory(3);
        browserHistory.visit("google.com");
        browserHistory.visit("github.com");
        browserHistory.listHistory();
        browserHistory.visit("stackoverflow.com");
        browserHistory.visit("wikipedia.org"); // Substitui a URL mais antiga
        browserHistory.listHistory();

        // Teste Sistema de Controle de Reversão (Undo)
        UndoManager undoManager = new UndoManager();
        undoManager.addAction("Escreveu parágrafo");
        undoManager.addAction("Deletou linha");
        undoManager.listActions();
        undoManager.undo();
        undoManager.listActions();

        // Teste Editor de Texto com Undo e Redo
        TextEditor textEditor = new TextEditor();
        textEditor.addAction("Escreveu parágrafo");
        textEditor.addAction("Deletou linha");
        textEditor.undo();
        textEditor.redo();
        textEditor.listActions();

        // Teste Jogo de Cartas
        CardGame cardGame = new CardGame();
        cardGame.addCard("Ás de Espadas");
        cardGame.addCard("Rei de Copas");
        cardGame.listCards();
        cardGame.removeCard("Ás de Espadas");
        cardGame.listCards();

        // Teste Fila de Atendimento
        BankQueue bankQueue = new BankQueue();
        bankQueue.addClient("João");
        bankQueue.addClient("Maria");
        bankQueue.serveClient();
        bankQueue.listClients();

        // Teste Gerenciamento de Impressões
        PrintQueue printQueue = new PrintQueue();
        printQueue.addJob("Relatório 1");
        printQueue.addJob("Relatório 2");
        printQueue.processJob();
        printQueue.listJobs();
    }
}