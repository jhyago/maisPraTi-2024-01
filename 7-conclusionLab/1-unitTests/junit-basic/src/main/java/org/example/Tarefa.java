package org.example;

public class Tarefa {
    private String titulo;
    private boolean concluida;

    public Tarefa(String titulo) {
        this.titulo = titulo;
        this.concluida = false;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public boolean isConcluida() {
        return concluida;
    }

    public void marcarComoConcluida(){
        this.concluida = true;
    }

    public void desmarcarComoConcluida(){
        this.concluida = false;
    }
}
