public class Principal {
	
	public static void main(String[] args) {
		//Inserindo
		Usuario u = new Usuario();
		u.setLogin("mago");
		u.setNome("Maria Goretti");
		u.setEmail("mago@gmail.com");
		UsuarioDAO.inserirUsuario(u);
		//Listando
		UsuarioDAO.todosUsuarios().forEach(System.out::println);
	}

}
