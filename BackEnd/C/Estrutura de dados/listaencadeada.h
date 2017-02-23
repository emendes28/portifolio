#include<stdio.h>
#include<stdlib.h>

typedef int tp_item;
typedef struct tp_no{
	tp_item info;
	struct tp_no *prox;
}tp_lista;


tp_lista * inicializa_lista();
tp_lista *aloca();
int lista_vazia(tp_lista *l);
int inserir_no_final(tp_lista **l,tp_item e);
void imprimir_listaEncadiada(tp_lista *l);
int remover_elementoListaEncadiada(tp_lista **l,tp_item e);
int busca_elementoNo(tp_lista *l, tp_item e);

//void ordenar(tp_lista **l);
void menu(tp_lista *l);
//void destroy(tp_lista *l);
//fazer remover, imprimir, buscar, destruir
//int main(){
//	tp_lista *l;	
//	l = inicializa_lista();
//	menu(l);
//	destroy(l);
//	return 0;
//}


tp_lista * inicializa_lista(){
	return NULL;
}
int lista_vazia(tp_lista *l){
	if(l==NULL){
		return 1;
	}
	return 0;
}
tp_lista *aloca(){
	tp_lista *l;
	l = (tp_lista *) malloc (sizeof(tp_lista));
}
int inserir_no_final(tp_lista **l, tp_item e){
	tp_lista *novo_no,*atu,*ant;
	novo_no = aloca();
	if(novo_no==NULL){
		return 0;
	}
	novo_no->info = e;
	novo_no->prox = NULL;
	atu=*l;
	ant=NULL;
	while(atu != NULL){
		ant=atu;
		atu=atu->prox;		
	}
	if(ant != NULL){
		ant->prox=novo_no;		
	}else{
		*l= novo_no;
	}
	return 1;
	
}

void imprimir_listaEncadiada(tp_lista *l){
	printf("Impressão da lista encadeada l :\n");
	do{
		l=l->prox;
		printf("Elemento %d\n",l->info);
	}while(l->prox != NULL);

}


int remover_elementoListaEncadiada(tp_lista **l,tp_item e){
	tp_lista *ant = inicializa_lista(), * atu,*endereco_no;
	if(*l == NULL){
		return 0;
	}
	atu = *l;
	do{
		if(atu->info != e){
			ant  = atu;
			atu=atu->prox;
		}else{
			if(ant==NULL){
				printf("Retirado %d\n",atu->info);
				free (*l);
				*l=atu->prox;
			}else{
				printf("Retirado %d\n",atu->info);

				endereco_no = atu;

				free (atu);			
				atu=ant;
				atu->prox=endereco_no->prox;
			}
		}
	}while(atu != NULL);

	return 1;
}

int busca_elementoNo(tp_lista *l, tp_item e){
	while(l->prox != NULL || l->info == e){
		return 1;	   
	        l=l->prox;
	}
	return 0;
}	

tp_lista *busca_NoAvancada(tp_lista *l, tp_item e){
	tp_lista *lista;
	lista = l->prox;
	while(lista != NULL && l->info != e){
		lista = lista->prox;}
	return lista;

}	

/*void destroy(tp_lista *l){
       tp_lista * seg;	
	while(l->prox != NULL){		
	   seg=l->prox;	   
	   free (seg);
	}
	free(l);	 
}*/

void ordenar(tp_lista **l){
	tp_lista *aux = *l;
	while(aux->prox != NULL){
		if(aux-> info < aux->prox->info){
		   aux = aux->prox;
		}
	   *l = aux;
	}		
}

void menu(tp_lista *l){
    int op,cod = -1;
    do{
       printf("Digite um numero correspondente a ação que deseja realizar\n");
       printf("1 - Adicionar um nó no final a lista\n");
       printf("2 - Remover um nó da lista\n");
       printf("3 - Buscar um nó da lista\n");
       printf("4 - Imprimir lista\n");
       printf("0 - Para sair !\n");
       scanf("%d",&op);

	   if (op== 1){	
		    do{
			  printf("Digite o codigo que deseja adicionar a lista\n");
			  scanf("%d",&cod);
			  printf("0 - Quando terminar !\n\n");
			  (inserir_no_final(&l,cod))?printf("Item adicionado com sucesso! \n\n"):printf("O item nao foi adicionado! \n\n");
		    }while(cod != 0);
	   }if (op== 2){	
		    do{
			  printf("Digite o codigo que deseja retirar da lista\n\n");
			  scanf("%d",&cod);
			  printf("0 - Quando terminar !\n\n");
		          (remover_elementoListaEncadiada(&l,cod))?printf("Item removido com sucesso! \n\n"):printf("Não existe o item para ser removido\n\n");
		    }while(cod != 0);
	   }if (op== 3){	
		    do{
			  printf("Digite o codigo que deseja buscar na lista\n\n");
			  scanf("%d",&cod);
			  printf("0 - Quando terminar !\n\n");
			  printf("O elemento ");
			  (busca_elementoNo(l,cod)==1)?printf("Existe"):printf("Não existe");
		  	  printf(" na lista encadeada \n");
		    }while(cod != 0);
	   }if (op== 4){
		   imprimir_listaEncadiada(l);
		   //ordernar(&l);
		   imprimir_listaEncadiada(l);
	   }
    }while(op != 0);

}
