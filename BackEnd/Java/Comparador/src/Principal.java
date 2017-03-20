
public class Principal {

	public static void main(String[] args) throws Exception {
		Pessoa p1 = new Pessoa("Evandro","Mendes", 25,"Analista de Sistema");
		Pessoa p2 = new Pessoa("Evandro","Men", 26, "Analista Programador");
		
		Comparador.comparar(p1, p2).forEach(System.out::println);;
		
		
	}
}
