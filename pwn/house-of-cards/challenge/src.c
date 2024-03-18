#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <malloc.h>
#include <time.h>
#define MAX_CARD 4
#define MAX_CHUNKS 54
char *chunks[MAX_CHUNKS];
long sizes[MAX_CHUNKS];

char *banner = "\
.------..------..------..------..------..------..------..------.     .------..------..------..------.\n\
|H.--. ||A.--. ||C.--. ||K.--. ||..--. ||I.--. ||N.--. ||G.--. |.-.  |2.--. ||0.--. ||2.--. ||4.--. |\n\
| :/\\: || (\\/) || :/\\: || :/\\: || :(): || (\\/) || :(): || :/\\: ((5)) | (\\/) || :/\\: || (\\/) || :/\\: |\n\
| (__) || :\\/: || :\\/: || :\\/: || ()() || :\\/: || ()() || :\\/: |'-.-.| :\\/: || :\\/: || :\\/: || :\\/: |\n\
| '--'H|| '--'A|| '--'C|| '--'K|| '--'.|| '--'I|| '--'N|| '--'G| ((1)) '--'2|| '--'0|| '--'2|| '--'4|\n\
`------'`------'`------'`------'`------'`------'`------'`------'  '-'`------'`------'`------'`------'";

void readline(char *buf, int size) {
    if (read(0, buf, size) == 0) _exit(0);
}

unsigned long read_int(void) {
    char buf[0x20];
    memset(buf, 0, 0x20);
    readline(buf, 0x1f);
    return strtoul(buf, 0, 10);
}

int mod(int a, int n) {
    return (a % n >= 0) ? (a % n) : n + a;
}

void create() {
    /* Index */
    puts("Card index: ");
    unsigned long ind;
    ind = read_int();
    if (ind >= MAX_CHUNKS) return;

    /* Ace (1) -> */
    unsigned int card;
    unsigned long size;
    card = mod(rand(), MAX_CARD) + 1;
    size = card * 0x10 + 0xf8;

    /* Allocate */
    void *returned;  
    returned = malloc(size);
    if (returned == NULL) return;
    
    chunks[ind] = returned;
    sizes[ind] = size;
    printf("Card drawn: %d\n", card);
}

void delete() {
    /* Index */
    unsigned long ind;
    puts("Key index: ");
    ind = read_int();
    if (ind >= MAX_CHUNKS || sizes[ind] == 0) return;

    /* Free */
    free(chunks[ind]);
    puts("Discarded card successfully.");
}

void edit() {
    /* Index */
    unsigned long ind;
    puts("Card index: ");
    ind = read_int();
    if (ind >= MAX_CHUNKS || sizes[ind] == 0) return;

    /* Read */
    puts("Tampering data: ");
    read(0, chunks[ind], sizes[ind] + 1); // whoops
}

void show() {
    /* Index */
    unsigned long ind;
    puts("Card index: ");
    ind = read_int();
    if (ind >= MAX_CHUNKS || sizes[ind] == 0) return;

    /* Write */
    write(1, chunks[ind], sizes[ind]);
}

void setup(void) {
    setvbuf(stdin, 0, _IONBF, 0);
    setvbuf(stdout, 0, _IONBF, 0);
    setvbuf(stderr, 0, _IONBF, 0);

    srand(time(NULL));
}

int main() {
    unsigned long choice;
    
    setup();
    puts(banner);
    while (1){
        choice = 0;
        puts("1. Draw card\n2. Discard card\n3. Tamper with card\n4. Peek card\nAction: ");
        choice = read_int();
        switch (choice){
            case 1:
                create();
                break;
            case 2:
                delete();
                break;
            case 3:
                edit();
                break;
            case 4:
                show();
                break;
            default:
                puts("Invalid action!");
                break;
        }
    }
    return 0;
}