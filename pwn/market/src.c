#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

const char *banner = "\
 ____    ____                __             _    \n\
|_   \\  /   _|              [  |  _        / |_  \n\
  |   \\/   |   ,--.   _ .--. | | / ] .---.`| |-' \n\
  | |\\  /| |  `'_\\ : [ `/'`\\]| '' < / /__\\| |   \n\
 _| |_\\/_| |_ // | |, | |    | |`\\ \\| \\__.,| |,  \n\
|_____||_____|\\'-;__/[___]  [__|  \\_]'.__.'\\__/";

long balance = 250, shares = 50;

void readline(char *buf, int size) {
    if (read(0, buf, size) == 0) _exit(0);
}

long read_long(void) {
    char buf[0x20];
    memset(buf, 0, 0x20);
    readline(buf, 0x1f);
    return strtoul(buf, 0, 10);
}

void sell(void) {
    if (shares > 0) {
        shares--;
        balance += 5;
        puts("Sold 1 share for $5.");
    }
    else {
        puts("You don't have enough shares.");
    }
    return;
}

void buy(void) {
    shares++;
    balance -= 5;
    puts("Bought 1 share for $5.");
    return;
}

void retire(void) {
    if ((unsigned long)balance > 10000000) {
        FILE *fptr = fopen("flag.txt", "r");
        char flag[43];
        fgets(flag, 43, fptr);
        puts(flag);
        fclose(fptr);
    }
    exit(0);
}

void setup(void) {
    setvbuf(stdin, 0, _IONBF, 0);
    setvbuf(stdout, 0, _IONBF, 0);
    setvbuf(stderr, 0, _IONBF, 0);
}

int main() {
    long choice;
    
    setup();
    puts(banner);
    while (1){
        
        choice = 0;
        printf("Your balance: %ld\nYour shares: %ld\n", balance, shares);
        puts("1. Sell 1 share\n2. Buy 1 share\n3. Retire\nAction: ");
        choice = read_long();
        switch (choice){
            case 1:
                sell();
                break;
            case 2:
                buy();
                break;
            case 3:
                retire();
                break;
            default:
                puts("Invalid action!");
                break;
        }
    }
    return 0;
}