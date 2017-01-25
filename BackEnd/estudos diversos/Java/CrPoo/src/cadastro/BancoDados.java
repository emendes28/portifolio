/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package cadastro;

import java.util.ArrayList;
import java.util.List;

/**Classe fake banco de dados
 *
 * @author evandro
 */
public class BancoDados {
 
    private static List<Aluno> alunos = new ArrayList<>();
 
    public List<Aluno> buscar() {
        return alunos;
    }
    
    public List<Aluno> buscar(Aluno aluno) {
         List<Aluno> resultadoAlunos = new ArrayList<>();
  
         for(Aluno a:alunos){
             if((aluno.getNumeroMatricula() != null || aluno.getNome() != null )&& 
                (a.getNumeroMatricula() == aluno.getNumeroMatricula() || 
                     a.getNome().contains(aluno.getNome()))){
                resultadoAlunos.add(alunos.get(alunos.indexOf(a)));
             }
         }
        return resultadoAlunos;
    }
    
    public void addAluno(Aluno aluno){
        alunos.add(aluno);        
    }

}
