#include "listaencadeada.h"


int questao1(tp_lista **lista, int numero);
int questao2(tp_lista *lista);

int main() {
    tp_lista *lista;
    int numero;    
    lista = inicializa_lista();
lista = aloca();
do{
    printf("Informe um numero ou 0 para sair: \n");
    scanf("%d",&numero);
    if(numero != 0){
    questao1(&lista, numero);}
}while(numero != 0);
   imprimir_listaEncadiada(lista);
 
    printf("Tamanho da lista %d\n",questao2(lista));

    return 0;
}

//inserir em ordem numerica
int questao1(tp_lista **l, int numero){
   	tp_lista *atu=*l;
	while(atu != NULL){
		if(numero < atu->info){
		   inserir_no_final(&atu, atu->info);
		   atu->info= numero;
		   atu->prox = NULL;
		}else{
		   inserir_no_final(&atu, numero);
		}
	  atu= atu->prox;
	}
	if(atu == NULL){
	   inserir_no_final(l, numero);
	}
	return 1;
}
//calcular n de nós
int questao2(tp_lista *lista) {
   int num = 0;
   while(lista->prox != NULL){
	num++;
	lista = lista->prox;
    }
   return num;
}
