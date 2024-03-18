#include <stdio.h>
#include <string.h>

void secret() {
  char flag[0x40] = "<REDACTED>";
  printf("%s", flag);
  fflush(stdout);
}


void enterpassword() {
    char input[0x40];
    
    printf("Enter your password: ");
    fflush(stdout);
    scanf("%s", input);
    printf("\nIncorrect password");
}

int main() {
  enterpassword();
  return 0;
}
