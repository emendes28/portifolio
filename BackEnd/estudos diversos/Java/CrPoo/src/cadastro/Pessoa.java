/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package cadastro;

/**
 *
 * @author evandro
 */
public class Pessoa {
        
    private String nome;
    private String endereco;
    private String email;
    
    
    public void setNome(String nome){
        this.nome = nome;
    }
    
    public String getNome(){
        return nome;
    }  
    
    public void setEndereco(String endereco){
        this.endereco = endereco;
    }
    
    public String getEndereco(){
        return endereco;
    }  
    
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    
}
