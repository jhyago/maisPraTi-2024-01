-- Tabela de Recursos (Funcionários)
CREATE TABLE Recurso (
    id_recurso INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    numero_registro VARCHAR(50) NOT NULL UNIQUE,
    salario DECIMAL(10, 2) NOT NULL,
    tipo_recurso ENUM('Gerente', 'Analista de Negócios', 'DBA', 'Programador') NOT NULL,
    endereco_residencial VARCHAR(255) NOT NULL
);

-- Histórico de Salários
CREATE TABLE HistoricoSalario (
    id_historico INT PRIMARY KEY AUTO_INCREMENT,
    id_recurso INT,
    data_aumento DATE NOT NULL,
    valor_aumento DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_recurso) REFERENCES Recurso(id_recurso) ON DELETE CASCADE
);

-- Telefones de Contato
CREATE TABLE TelefoneContato (
    id_telefone INT PRIMARY KEY AUTO_INCREMENT,
    id_recurso INT,
    telefone VARCHAR(20) NOT NULL,
    tipo_telefone ENUM('Residencial', 'Comercial', 'Celular', 'Ramal Interno') NOT NULL,
    FOREIGN KEY (id_recurso) REFERENCES Recurso(id_recurso) ON DELETE CASCADE
);

-- Ferramentas de Programação
CREATE TABLE FerramentaProgramacao (
    id_ferramenta INT PRIMARY KEY AUTO_INCREMENT,
    nome_ferramenta VARCHAR(100) NOT NULL,
    versao VARCHAR(20) NOT NULL
);

-- Relacionamento entre Programador e Ferramenta de Programação (Muitos para Muitos)
CREATE TABLE ProgramadorFerramenta (
    id_recurso INT,
    id_ferramenta INT,
    PRIMARY KEY (id_recurso, id_ferramenta),
    FOREIGN KEY (id_recurso) REFERENCES Recurso(id_recurso) ON DELETE CASCADE,
    FOREIGN KEY (id_ferramenta) REFERENCES FerramentaProgramacao(id_ferramenta) ON DELETE CASCADE
);

-- Equipes
CREATE TABLE Equipe (
    id_equipe INT PRIMARY KEY AUTO_INCREMENT,
    nome_equipe VARCHAR(100) NOT NULL,
    numero_recursos INT NOT NULL
);

-- Relacionamento entre Recursos (Funcionários) e Equipes (Muitos para Um)
CREATE TABLE AlocacaoEquipe (
    id_equipe INT,
    id_recurso INT,
    PRIMARY KEY (id_equipe, id_recurso),
    FOREIGN KEY (id_equipe) REFERENCES Equipe(id_equipe) ON DELETE CASCADE,
    FOREIGN KEY (id_recurso) REFERENCES Recurso(id_recurso) ON DELETE CASCADE
);

-- Projetos
CREATE TABLE Projeto (
    id_projeto INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    nome_projeto VARCHAR(100) NOT NULL,
    data_inicio DATE NOT NULL,
    data_prevista_termino DATE,
    data_real_termino DATE,
    status ENUM('Em andamento', 'Finalizado', 'Aguardando prioridade') NOT NULL,
    horas_previstas DECIMAL(5,2) NOT NULL,
    horas_reais DECIMAL(5,2),
    id_equipe INT,
    id_gerente INT,
    FOREIGN KEY (id_equipe) REFERENCES Equipe(id_equipe) ON DELETE SET NULL,
    FOREIGN KEY (id_gerente) REFERENCES Recurso(id_recurso) ON DELETE SET NULL
);

-- Atividades do Projeto
CREATE TABLE Atividade (
    id_atividade INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    nome_atividade VARCHAR(100) NOT NULL,
    id_projeto INT,
    FOREIGN KEY (id_projeto) REFERENCES Projeto(id_projeto) ON DELETE CASCADE
);

-- Tarefas das Atividades
CREATE TABLE Tarefa (
    id_tarefa INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    descricao VARCHAR(255) NOT NULL,
    id_atividade INT,
    FOREIGN KEY (id_atividade) REFERENCES Atividade(id_atividade) ON DELETE CASCADE
);