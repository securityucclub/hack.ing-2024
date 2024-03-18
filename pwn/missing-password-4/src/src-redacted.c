#include <stdio.h>
#include <string.h>

#define BUFFER_LEN 0x20

char flag[BUFFER_LEN] = "<REDACTED>";

int main() {
  char input[BUFFER_LEN];
  char password[BUFFER_LEN] = "<REDACTED>";

  printf("Enter your password: ");
  fflush(stdout);

  scanf("%s", input);

  if (strcmp(input, password) == 0) {
    printf("Correct password. \n");
    printf("The flag is: %s\n", flag);
  } else {
    printf("Incorrect password.\n");
  }

  return 0;
}
