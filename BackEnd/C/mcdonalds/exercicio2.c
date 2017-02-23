#include "fila.h"

void questao_algoritmo(tp_fila *f);
void questao_maior_menor_e_media (tp_fila *f);
void questao_terceira (tp_fila *f);

/**
* Execução principal do programa 
* onde tudo é chamado
*/

int main (){
	tp_fila f;
	tp_item e;
	inicializa_fila(&f);
	//resposta questão 1	
	//questao_algoritmo(&f);
	//resposta questão 2
		/*inserir(&f, 1);
		inserir(&f, 2);
		inserir(&f, 3);
	questao_maior_menor_e_media(&f);*/
	//resposta questão 3
	questao_terceira(&f);
    	return 0;
}


void questao_algoritmo (tp_fila *f)
{
	int num = 0,x;
	tp_fila fila1, fila2;	
	inicializa_fila(&fila2);		
	inicializa_fila(&fila1);
	while (num != 99) {
		printf("Digite um numero ");
		scanf("%d",&num);
		inserir(f, num); }
	while(!fila_vazia(f)){
		retirar(f, &x);
		int r = x%3;
		if(r != 0){
		   x= x*2;
                   inserir(&fila1, x); }
		else{
		   x= x*3;
                   inserir(&fila2, x); }
	}

	printf("Fila 1\n");
	imprimir(&fila1);

	printf("Fila 2\n");
	imprimir(&fila2);
}


void questao_maior_menor_e_media (tp_fila *f)
{
	int maior,menor,media = 0;
	while (proximo(f->ini) < f->fim) {
		int indice = proximo(f->ini)+1;
		if(f->item[ proximo(f->ini)] > f->item[indice] ){
			maior = f->item[proximo(f->ini)];		
		}else{
			menor = f->item[proximo(f->ini)];
		}
 		media = media + f->item[proximo(f->ini)];
	} 
	media = media / f->fim;
	printf("Maior %d\n", maior);
	printf("Menor %d\n", menor);
	printf("Media %d\n", media);
	printf("Fila : \n");
	imprimir(f);
}


void questao_terceira (tp_fila *f)
{
	int num,count=0;
	tp_item r;
	do{
		printf("\n Digite um numero ");
		scanf("%d",&num);
		count ++;	
		if(num%2 ==0){
	  	 if(inserir(f, num)==0){			
			retirar(f, &r);
			inserir(f, num);
		  }
		} else{
			if(retirar(f, &r)==0){
					printf("Fila Vazia\n");
			}
		}	
	}while (count != 7);

	imprimir(f);
}
