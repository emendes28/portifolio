/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import java.util.Arrays;
import java.util.List;

/**
 *
 * @author esimendes
 */
public class Principal {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
       Carrinho c = new Carrinho(Arrays.asList(new Produto("Tenis", 300),
                                           new Produto("Camisa", 80),
                                           new Produto("Cinto", 50)));
       c.darDesconto(20, Produto::caro);
       c.darDesconto(20, p->p.getValor() <100);
       c.getLista().forEach(System.out::println);
    }

    
}
