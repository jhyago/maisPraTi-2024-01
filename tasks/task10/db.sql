-- Estrutura das Tabelas:

--     ALUNO: contém informações dos alunos (aluno_id, nome, curso, nivel, idade).
--     TURMA: contém informações das turmas (turma_id, nometurma, sala, horario).
--     MATRÍCULA: relaciona alunos com turmas, incluindo notas e faltas (matricula_id, aluno_id, turma_id, nota_1, nota_2, nota_3, nota_final, nr_faltas).

-- 1. Quais os nomes de todos os alunos?

-- Para listar todos os nomes dos alunos, basta selecionar o campo nome da tabela ALUNO.

SELECT nome
FROM ALUNO;

-- 2. Quais os números das matrículas dos alunos?

-- Para listar todos os números de matrícula dos alunos, basta selecionar o campo matricula_id da tabela MATRÍCULA.


SELECT matricula_id
FROM MATRICULA;

-- 3. Quais os números das matrículas dos alunos que não estão matriculados em uma turma?

-- Aqui, queremos as matrículas em que o campo turma_id seja NULL, ou seja, alunos que ainda não foram alocados a uma turma.

SELECT matricula_id
FROM MATRICULA
WHERE turma_id IS NULL;

-- 4. Quais os números dos alunos matriculados em uma turma de número '30'?

-- Para obter os números dos alunos matriculados na turma 30, precisamos verificar onde o turma_id é igual a 30.

SELECT aluno_id
FROM MATRICULA
WHERE turma_id = 30;

-- 5. Qual o horário da turma do aluno 'PATOLINO'?

-- Aqui precisamos fazer um JOIN entre as tabelas ALUNO, MATRÍCULA e TURMA para obter o horário da turma em que o aluno PATOLINO está matriculado.

SELECT T.horario
FROM ALUNO A
JOIN MATRICULA M ON A.aluno_id = M.aluno_id
JOIN TURMA T ON M.turma_id = T.turma_id
WHERE A.nome = 'PATOLINO';

