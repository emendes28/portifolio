#include "fila.h"
#include <time.h>

void escolhe_brinde(tp_fila *f,tp_item e,tp_fila *b)
{

    int op = -1;
	
    while (op != 0){
        printf("Escolha seu brinde: \n");
        printf("1 - Ronald McDonald\n");
        printf("2 - Birdie\n");
        printf("3 - Shaky \n");
        scanf("%d",&op);
        if(op > 0 && op <=3){
            inserir(b, e);
            op = 0;
        }else{
            printf("Escolha invalida\n");
        }
    }
        inserir(f, e);
}

void insere_fila_compra(tp_fila *f,tp_item e, int op,tp_fila *b)
{
	
	switch (op){
	    case 1 :
            printf("Saborei o nosso famoso Big Mac\n");
            inserir(f, e);
            break;
        case 2 :
            printf("Saborei o delicioso Mc flurry\n");
            inserir(f, e);
            break;
        case 3 :
            printf("Divirta-se com o Mc lanche feliz e escolha o brinde\n");
            escolhe_brinde(f,e,b);
            break;
	}
}

int main()
{
    
    int op = -1, i = 0;
	tp_fila fila_compra, fila_retirada,fila_brinde;
	tp_item cliente,cliente_desistente; 
	
	inicializa_fila(&fila_brinde);
	inicializa_fila(&fila_compra);
	inicializa_fila(&fila_retirada);
    while (op != 0){
        cliente = rand();
        
        printf(" __________________________________________________________\n");
        printf("                            | |\n");
        printf("                Bem vindo a McDonalds !!\n");
        inserir(&fila_compra, cliente);
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
            retirar(&fila_compra,&cliente_desistente);
            printf("O Cliente %d desistiu!!\n",cliente_desistente);
            
        }
        printf("Digite zero (0) para sair\n");
    }
    
    printf("Fila de caixa  !!\n");
	imprimir(&fila_compra);
	
    printf("Fila dos pedidos !!\n");
	imprimir(&fila_retirada);
	
    printf("Fila de brindes!!\n");
	imprimir(&fila_brinde);
	
	
    return 0;
    
}





