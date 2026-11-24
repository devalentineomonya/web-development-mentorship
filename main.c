#include<stdio.h>
void main(){
    char userName = "V";
        userName = 1;
    printf(userName);
}

/*
INTENTIONALLY BROKEN - demo of a statically typed, compiled language.
The comment is placed below the code so the error line numbers stay the same.

gcc main.c -o main  fails BEFORE the program runs (compile time):
  main.c:3:21: error: initialization of 'char' from 'char *' makes integer from pointer without a cast
      "V" (double quotes) is a string (char *). A single char uses single quotes: 'V'
  main.c:5:12: error: passing argument 1 of 'printf' makes pointer from integer without a cast
      printf needs a format string first: printf("%c\n", userName);

Note: userName = 1; is NOT an error. In C a char is a small integer type,
so storing a number in it is allowed.

Working version:
  #include <stdio.h>
  int main(void) {
      char userName = 'V';
      printf("%c\n", userName);
      return 0;
  }
*/