#include <stdio.h>

int main(){
	
FILE *arquivo;
	char cidade[100];
	
	printf("digite o nome de uma cidade:");
	scanf("%s", cidade);
	
 arquivo  = fopen ("cidade.txt", "w");
 fprintf(arquivo, "%s", cidade);
 
 
 
   arquivo = fopen ("cidade.txt", "r");   
  
    fgets(cidade, 100, arquivo);
    printf("cidade lida: \n %s", cidade);
	
	fclose(cidade);
	
	
	return 0;

	
}