/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author esimendes
 */
public class Produto {
    private String nome;
    private int valor;

    public Produto(String nome, int valor) {
        this.nome = nome;
        this.valor = valor;
    }

    public String getNome() {
        return nome;
    }

    public int getValor() {
        return valor;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setValor(int valor) {
        this.valor = valor;
    }

    public boolean caro(){
        return valor > 200;
    }
    
    @Override
    public String toString() {
        return "Produto [nome=".concat(nome).concat(",valor=").concat(valor+"]");
    }
    
    
    
}
