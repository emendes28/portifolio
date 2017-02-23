#include "fila.h"
void escolhe_brinde(fila_clientes *f,tp_cliente e,fila_clientes *b)
{

    int op = -1;
	
    while (op != 0){
        printf("Escolha seu brinde: \n");
        printf("1 - Ronald McDonald\n");
        printf("2 - Birdie\n");
        printf("3 - Shaky \n");
        scanf("%d",&op);
        if(op > 0 && op <=3){
            inserir_cliente(b, e);
            op = 0;
        }else{
            printf("Escolha invalida\n");
        }
    }
        inserir_cliente(f, e);
}

void insere_fila_compra(fila_clientes *f,tp_cliente e, int op,fila_clientes *b)
{
	
	switch (op){
	    case 1 :
            printf("Excelente Escolha Senhor(a) %c Saborei o nosso famoso Big Mac\n",e);
            inserir_cliente(f, e);
            break;
        case 2 :
            printf("Excelente Escolha Senhor(a) %c Saborei o delicioso Mc flurry\n",e);
            inserir_cliente(f, e);
            break;
        case 3 :
            printf("Excelente Escolha Senhor(a) %c Divirta-se com o Mc lanche feliz e escolha o brinde\n",e);
            escolhe_brinde(f,e,b);
            break;
	}
}

int main()
{
    
    int op = -1, i = 0;
	fila_clientes fila_compra, fila_retirada,fila_brinde;
	tp_cliente cliente,cliente_desistente; 
	
	inicializa_fila_cliente(&fila_brinde);
	inicializa_fila_cliente(&fila_compra);
	inicializa_fila_cliente(&fila_retirada);
    while (op != 0){
        //cliente = rand();
        
        printf(" __________________________________________________________\n");
        printf("                            | |\n");
        printf("                Bem vindo a McDonalds !!\n");
        printf("Qual seu nome completo?: \n");
        scanf("%c",&cliente);
        inserir_cliente(&fila_compra, cliente);
        printf("Escolha seu pedido: \n");
        printf("1 - Big Mac\n");
        printf("2 - Mac flurry\n");
        printf("3 - Mac lanche feliz\n");
        printf("                            | |\n");
        printf(" __________________________________________________________\n");
        
        scanf("%d",&op);
        if(op > 0){
            insere_fila_compra(&fila_retirada, cliente, op,&fila_brinde );
        }else{
            retirar_cliente(&fila_compra,&cliente_desistente);
            printf("O Cliente %d desistiu!!\n",cliente_desistente);
            
        }
        printf("Digite zero (0) para sair\n");
    }
    
    printf("Fila de caixa  !!\n");
	imprimir_cliente(&fila_compra);
	
    printf("Fila dos pedidos !!\n");
	imprimir_cliente(&fila_retirada);
	
    printf("Fila de brindes!!\n");
	imprimir_cliente(&fila_brinde);
	
	
    return 0;
    
}





