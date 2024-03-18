#include <stdio.h>
#include <stdlib.h>
#include <string.h>
char buf[0x10];
char passwd[0x10];

void hash(char *str) {
    unsigned int d = 5387;
    int c;

    str[0] = (str[0] * d) % 0x100;
    for (int i = 1; i < 0xf; i++) {
        str[i] = (((str[i] * d) ^ str[i - 1]) % 0x100);
    }
    return;
}

int main(void) {
    puts("Enter your password: ");

    fgets(buf, 0x10, stdin);

    memcpy(passwd, buf, 0x10);
    hash(passwd);

    if (!strncmp(passwd, "\x07\xe1\xf4\x08\x70\x41\x54\x68\xd2\xbf\x59\x4c\x21\x31\x7d\x00", 0xf)) {
        printf("Your flag: hack.ing{%s}\n", buf);
    }
    else {
        puts("Wrong password.\n");
    }

    return 0;
}
