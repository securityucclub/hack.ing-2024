#include <stdio.h>
#include <string.h>

void secret() {
  char flag[0x40] = "hack.ing{0v3rfl0w_th3_st4ck_b4s3_p01nt3r_r3g1st3r}";
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
