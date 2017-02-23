
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Evandro Mendes
 */
public class Oraculo {
    
    public List<String> melhoresProdutos(String tipo){
        List<String> lista = new ArrayList<>();
        if(tipo.equals("doce de leite")) {
            lista.add("Moça");
            lista.add("Itambe");
            
        } else if(tipo.equals("queijo mineiro")) {
            lista.add("Da vaca");
            lista.add("hahaha");           
        }
        return lista;
    }
}
