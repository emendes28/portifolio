#include<stdio.h>
#include<stdlib.h>

/*Diretiva de compila��o substitue toda ocorrencia MAX 
e substitui por 100 : N�O � VARIAVEL NEM CONSTANTE 
N�O ARMAZENA NA MEMORIA*/
#define MAX 100 

/* Alias para tp_item ou seja define 
quem em todo lugar que usar tp_item � um int */
typedef int tp_item; 
typedef  struct {
	int topo;
	tp_item item[MAX];
}tp_pilha;
/*
* Defini��o da fun��o "iniciar pilha"
* para iniciar atribui o topo 
* a menos um ou seja 
* param *p ponteiro do tp_pilha 
*/
void inicializa_pilha(tp_pilha *p)  
{
	p->topo = -1;    
}

/* Defini��o da fun��o "pilha vazia" 
* verifica se a pilha est� vazia 
* retorna 1 se sim e 0 se n�o
* param *p ponteiro do tp_pilha 
* return int 1 se estiver vazia 	  	
*		  	0 se n�o
*/

int pilha_vazia(tp_pilha *p)  
{
	if(p->topo == -1){
		return 1;
	}else{
		return 0;		
	}
}
/*Adiciona um item ao vetor ap�s 
* verificar se n�o est� cheio 
* e adiciona no topo
* param *p ponteiro do tp_pilha 
* param e vari�vel tp_item
* return int 0 se n�o tem como adicionar
*		  	1 se consegiu adicionar com sucesso
*/
int push(tp_pilha *p, tp_item e)  
{ 
	if(p->topo >= MAX-1){
		return 0;
	}else{		
		p->topo++;
		p->item[p->topo] = e;
		return 1;
	}
}
/**
* Retira o ultimo item da pilha 
* e atribui na variavel cujo 
* o ende�o de memoria foi passado
* param *p ponteiro do tp_pilha 
* param *e ponteiro do tp_item
* return int 0 se estiver vazia 
*		  		logo n�o tem como retirar 
*		  	1 se consegiu retirar com sucesso
*		  	e atribuir o ponteiro passado
*/
int pop(tp_pilha *p, tp_item *e) 
{
	if(pilha_vazia(p)==1){
		return 0;
	}else{
		*e=p->item[p->topo];
		p->topo--;
		return 1;
	}
}

/**
* Execu��o principal do programa 
* onde tudo � chamado
*/
int main()
{	
	tp_item e;
	tp_pilha pilha;
	inicializa_pilha(&pilha);
    printf("Pilha TOPO %d\n",pilha.topo);
	push(&pilha, 10);	
	push(&pilha, 20);
    printf("Pilha TOPO %d\n",pilha.topo);
    pop(&pilha, &e);
    printf("Pilha TOPO %d\n",pilha.topo);
    printf("Item retirado %d\n",e);
    
    getch();
}
