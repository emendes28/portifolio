/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package cadastro;

import java.util.Date;

/**
 *
 * @author evandro
 */
public class Aluno extends Pessoa{
    
    private Integer numeroMatricula;
    private Date dtCadastro;
    
    public void setNumeroMatricula(Integer numeroMatricula){
        this.numeroMatricula = numeroMatricula;
    }
    
    public Integer getNumeroMatricula(){
        return numeroMatricula;
    }
    
    public Date getDtCadastro() {
        if(dtCadastro != null){
            return (Date) dtCadastro.clone();
        }else{
            return null;
        }
    }

    public void setDtCadastro(Date dtCadastro) {
        if(dtCadastro != null){
            this.dtCadastro = (Date) dtCadastro.clone();
        }
    }
}
