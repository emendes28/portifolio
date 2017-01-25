package sessionbeans;

@Stateless
@Local(Calculadora.class)
public class CalculadoraBean implements Calculadora {
public double soma(double a, double b) {
return a + b;
}
}