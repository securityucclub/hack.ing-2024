#include <stdio.h>
#include <string.h>

#define BUFFER_LEN 0x20

char flag[BUFFER_LEN] = "hack.ing{p4ssw0rd_0v3rfl0w3d}";

int main() {
  char input[BUFFER_LEN];
  char password[BUFFER_LEN] = "a3sX9osK3cd2PfkfcW3s";

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
