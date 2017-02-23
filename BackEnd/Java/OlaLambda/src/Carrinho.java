
import java.util.List;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author esimendes
 */
public class Carrinho {
    
    private List<Produto> lista;

    public Carrinho(List<Produto> lista) {
        this.lista = lista;
    }
    
    public void darDesconto(int porcentagem, Condicao<Produto> cond){
        lista.forEach(p -> {
            if(cond.incluir(p)){
                p.setValor(p.getValor() * (100-porcentagem)/100);
            }
        });      
    }

    public List<Produto> getLista() {
        return lista;
    }
    
    
}
