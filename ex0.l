%{
#include <stdio.h>
int digitcount = 0;
%}
%%

999      {printf("%s is appeared\n",yytext);}
([0-9]) +       {digitcount++;}
\n    ;
%%

int main(){
	yylex();
	printf("digitcount : %d\n",digitcount);
	return 0;
}

int yywrap(){
	return 1;
}

