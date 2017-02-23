/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import pilha.PilhaCheiaException;
import java.util.stream.IntStream;
import pilha.PilhaVaziaException;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.Before;
import pilha.Pilha;

/**
 *
 * @author esimendes
 */
public class TestePilha {
    
    private Pilha p;
    
    @Before
    public void inicializaPilha(){
        p = new Pilha(10);
    }
    
    @Test 
    public void pilhaVazia(){
        assertTrue(p.estaVazia());
        assertEquals(0, p.tamanho());
    }
        
    @Test 
    public void empilhaUmElemento(){
        p.empilha("primeiro");
        assertFalse(p.estaVazia());
        assertEquals(1, p.tamanho());
        assertEquals("primeiro", p.topo());
    }
        
    @Test 
    public void empilhaEDesempilha(){
        p.empilha("primeiro");
        p.empilha("segundo");
        assertEquals(2, p.tamanho());
        assertEquals("segundo", p.topo());
        Object desempilhado = p.desempilha();
        assertEquals(1, p.tamanho());
        assertEquals("primeiro", p.topo());
        assertEquals("segundo", desempilhado);
        
    }
    
    @Test(expected=PilhaVaziaException.class)
    public void removeDaPilhaVazia(){
        p.desempilha();
    }
    
    @Test(expected=PilhaCheiaException.class)
    public void adicionaNaPilhaCheia(){
         for(int i= 0; i <10; i++){
            p.empilha("elemento" +i);
                 }
         p.empilha("boom");
    }
    
    /*@Test 
    public void empilhaDoisElemento(){
        Pilha p = new Pilha();
        p.empilha("primeiro");
        p.empilha("segundo");
        assertEquals(2, p.tamanho());
        assertEquals("segundo", p.topo());
    }*/
}
