#include<stdio.h>
#include<stdlib.h>
#define MAX 100
#define MAX_CLIENTE 1000

typedef char[50] tp_cliente;

typedef int tp_item;

typedef struct {
	tp_item item[MAX];
	int ini,fim;
}tp_fila;

typedef struct {
	tp_cliente item[MAX_CLIENTE];
	int ini,fim;
}fila_clientes;


tp_fila fila;

void inicializa_fila(tp_fila *f){
	f->ini=f->fim=MAX-1;}
	
int fila_vazia(tp_fila *f)	{
	int oi = 0;
	if(f->ini==f->fim){
		oi = 1;}
return oi;}
		
int proximo(int pos){
	if(pos == MAX-1){		
		return 0;}
return ++pos;}

int inserir(tp_fila *f, tp_item e){
	if(proximo(f->fim)== f->ini){
		return 0;}
	f->fim = proximo(f->fim);
	f->item[f->fim] = e;
return 1;}

int retirar(tp_fila *f, tp_item *e){
	if(fila_vazia(f)){
		return 0;
	}
	f->ini = proximo(f->ini);
*e = f->item[f->ini];
return 1;}

void imprimir(tp_fila *f){	
	tp_item e;
	while(!fila_vazia(f)){	
		printf("Item  %d\n",f->item[proximo(f->ini)]);
		retirar(f,&e);	
	}
}

void imprimir_cliente(fila_clientes *f){	
	tp_item e;
	while(!fila_vazia(f)){	
		printf("Senhor(a)  %d\n",f->item[proximo(f->ini)]);
		retirar(f,&e);	
	}
}


void inicializa_fila_cliente(fila_clientes *f){
	f->ini=f->fim=MAX-1;}
	
int fila_vazia_cliente(fila_clientes *f)	{
	int oi = 0;
	if(f->ini==f->fim){
		oi = 1;}
return oi;}

int inserir_cliente(fila_clientes *f, tp_cliente e){
	if(proximo(f->fim)== f->ini){
		return 0;}
	f->fim = proximo(f->fim);
	f->item[f->fim] = e;
return 1;}

int retirar_cliente(fila_clientes *f, tp_cliente *e){
	if(fila_vazia(f)){
		return 0;
	}
	f->ini = proximo(f->ini);
*e = f->item[f->ini];
return 1;}
