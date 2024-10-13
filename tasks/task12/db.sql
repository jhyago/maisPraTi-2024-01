-- =====================================================
-- DDL: Criação das tabelas
-- =====================================================

-- Tabela de Professores
CREATE TABLE Professor (
    professor_id INT PRIMARY KEY AUTO_INCREMENT,
    cpf VARCHAR(11) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE,
    titulacao VARCHAR(100)
);

-- Tabela de Telefones dos Professores (Um professor pode ter vários telefones)
CREATE TABLE TelefoneProfessor (
    telefone_id INT PRIMARY KEY AUTO_INCREMENT,
    professor_id INT,
    telefone VARCHAR(20) NOT NULL,
    FOREIGN KEY (professor_id) REFERENCES Professor(professor_id) ON DELETE CASCADE
);

-- Tabela de Alunos
CREATE TABLE Aluno (
    aluno_id INT PRIMARY KEY AUTO_INCREMENT,
    codigo_matricula VARCHAR(50) NOT NULL UNIQUE,
    data_matricula DATE NOT NULL,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(255),
    telefone VARCHAR(20),
    data_nascimento DATE,
    altura DECIMAL(5,2),
    peso DECIMAL(5,2)
);

-- Tabela de Turmas
CREATE TABLE Turma (
    turma_id INT PRIMARY KEY AUTO_INCREMENT,
    quantidade_alunos INT NOT NULL,
    horario TIME NOT NULL,
    duracao TIME NOT NULL,
    data_inicio DATE NOT NULL,
    data_fim DATE,
    curso VARCHAR(100) NOT NULL,
    professor_id INT,
    monitor_id INT UNIQUE,  -- Cada aluno pode ser monitor de no máximo uma turma
    FOREIGN KEY (professor_id) REFERENCES Professor(professor_id) ON DELETE SET NULL,
    FOREIGN KEY (monitor_id) REFERENCES Aluno(aluno_id) ON DELETE SET NULL
);

-- Tabela de Matrículas (Um aluno pode se matricular em várias turmas)
CREATE TABLE Matricula (
    matricula_id INT PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT,
    turma_id INT,
    ausencias INT DEFAULT 0,
    FOREIGN KEY (aluno_id) REFERENCES Aluno(aluno_id) ON DELETE CASCADE,
    FOREIGN KEY (turma_id) REFERENCES Turma(turma_id) ON DELETE CASCADE
);

-- =====================================================
-- DML: Consultas SQL
-- =====================================================

-- 1) Listar os dados dos alunos
SELECT * 
FROM Aluno;

-- 2) Listar os dados dos alunos e as turmas que eles estão matriculados
SELECT A.nome AS nome_aluno, A.codigo_matricula, T.curso, T.horario, T.data_inicio, T.data_fim
FROM Aluno A
JOIN Matricula M ON A.aluno_id = M.aluno_id
JOIN Turma T ON M.turma_id = T.turma_id;

-- 3) Listar os alunos que não possuem faltas
SELECT A.nome AS nome_aluno, A.codigo_matricula
FROM Aluno A
JOIN Matricula M ON A.aluno_id = M.aluno_id
WHERE M.ausencias = 0;

-- 4) Listar os professores e a quantidade de turmas que cada um leciona
SELECT P.nome AS nome_professor, COUNT(T.turma_id) AS quantidade_turmas
FROM Professor P
JOIN Turma T ON P.professor_id = T.professor_id
GROUP BY P.professor_id;

-- 5) Listar nome dos professores, um dos números de telefone, e os dados das turmas lecionadas com os alunos matriculados, ordenados
SELECT P.nome AS nome_professor, TP.telefone, 
       T.turma_id, T.data_inicio, T.data_fim, T.horario, T.curso, 
       A.nome AS nome_aluno
FROM Professor P
JOIN TelefoneProfessor TP ON P.professor_id = TP.professor_id
JOIN Turma T ON P.professor_id = T.professor_id
JOIN Matricula M ON T.turma_id = M.turma_id
JOIN Aluno A ON M.aluno_id = A.aluno_id
GROUP BY P.professor_id, T.turma_id, A.aluno_id
ORDER BY P.nome, T.turma_id, A.nome;