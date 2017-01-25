    package org.primefaces.examples.view;  
      
import java.io.IOException;
import java.io.Serializable;  
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import servlets.MeuServlet;
      
    public class PPRBean implements Serializable {  
      
        private String firstname;  
        private MeuServlet serv;  
        
        public MeuServlet getServe(){
            try {
                serv.init();
            } catch (ServletException ex) {
                Logger.getLogger(PPRBean.class.getName()).log(Level.SEVERE, null, ex);
            }
            try {
                serv.service(null, null);
            } catch (ServletException ex) {
                Logger.getLogger(PPRBean.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IOException ex) {
                Logger.getLogger(PPRBean.class.getName()).log(Level.SEVERE, null, ex);
            }
            finally {
            return serv;
            }
        }
        public String getFirstname() {  
            return firstname;  
        }  
      
        public void setFirstname(String firstname) {  
            this.firstname = firstname;  
        }  
    }  