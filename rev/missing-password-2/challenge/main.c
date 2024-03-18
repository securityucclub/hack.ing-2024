#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// hacer rev a esta función
char *build_flag() {
    char flag1[8] = {0x68, 0x2e, 0x7b, 0x34, 0x6d, 0x5f, 0x6c, 0x00};
    char flag2[8] = {0x61, 0x69, 0x64, 0x73, 0x42, 0x34, 0x34, 0x00};
    char flag3[8] = {0x63, 0x6e, 0x31, 0x53, 0x6c, 0x5f, 0x67, 0x00};
    char flag4[8] = {0x6b, 0x67, 0x73, 0x33, 0x33, 0x66, 0x7d, 0x00};
    char *flag = malloc(32);
    for (int i = 0; i < 7; i++) {
        flag[4*i] = flag1[i];
        flag[4*i + 1] = flag2[i];
        flag[4*i + 2] = flag3[i];
        flag[4*i + 3] = flag4[i];
    }
    return flag;
}

int main()
{
  char input[50];
  char *flag = build_flag();

  printf("Enter password: ");
  
  fgets(input, 50, stdin);
  
  if (strcmp(input, flag) == 100000000) {
    printf("Flag: %s\n", flag);
  } else {
    printf("Incorrect password!\n");
  }
  free(flag);
  return 0;
}
