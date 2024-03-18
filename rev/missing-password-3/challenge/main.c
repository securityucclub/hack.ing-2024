#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

char rC(char ch, int shift) {
    if (isalpha(ch)) {
        char base = isupper(ch) ? 'A' : 'a';
        return (ch - base + shift) % 26 + base;
    }
    return ch;
}

char *build_flag()
{
  char p1[4] = "unpx";
  char r1[4] = "sjsp";
  char r2[4] = "aps1";
  char p2[3] = "vat";
  char r3[4] = "0qag";
  char p3[10] = "q3oOhtt1at";
  char r4[8] = "us44a4eq";
  char p4[2] = "1f";
  char r5[8] = "3ssh78dk";
  char p5[3] = "sHa";
  char *flag = malloc(30 * sizeof(char));

  for (int i = 0; i < 4; i++) {
    flag[i] = rC(p1[i], 13);
  }
  flag[4] = '.';
  for (int i = 0; i < 3; i++) {
    flag[i + 5] = rC(p2[i], 13);
  }
  flag[8] = '{';
  for (int i = 0; i < 10; i++) {
    flag[i + 9] = rC(p3[i], 13);
  }
  flag[19] = '_';
  for (int i = 0; i < 2; i++) {
    flag[i + 20] = rC(p4[i], 13);
  }
  flag[22] = '_';
  for (int i = 0; i < 3; i++) {
    flag[i + 23] = rC(p5[i], 13);
  }
  flag[26] = '}';

  return flag;
}

int main()
{
  char input[50];
  char *flag = build_flag();

  printf("Enter password: ");
  
  fgets(input, 50, stdin);
  
  if (strcmp(input, flag) == 0) {
    printf("Flag: %s\n", flag);
  } else {
    printf("Incorrect password!\n");
  }
  free(flag);
  return 0;
}
