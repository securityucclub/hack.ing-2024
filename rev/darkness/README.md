# Nombre: `darkness`
### Dificultad: `Extreme (🃏🃏🃏🃏🃏)`
### Categoría: `rev`
### Autor: [c4e](https://c4ebt.github.io/)
### Flag: `hacking{wh3n_y0u_g4z3_int0_th3_d4rkn3ss_th3_d4rkn3ss_g4z3s_b4ck_1nt0_y0u}`

### Descripción:

### Hint 1:
`themida`

### Solución:
- Identificar packing con Detect it Easy o otro packer identifier.
- Unpackear usando unlicense
- Crear solver para la funcion de decrypt usando el decomp y los bytes mov'idos

```c
#include <stdio.h>
#include <stdint.h>

int main(void) {
    int16_t v2, v3;
    char Buffer[80];
    char enc[] = {0x0B6, 0x0C, 0x17, 0x0D, 0x7A, 0x0D, 0x0E5, 0x0D, 0x4E, 0x0E, 0x0BC, 0x0E, 0x23, 0x0F, 0x9E, 0x0F, 0x15, 0x10, 0x7D, 0x10, 0x0B0, 0x10, 0x1E, 0x11, 0x7D, 0x11, 0x0F6, 0x11, 0x26, 0x12, 0x9B, 0x12, 0x0FA, 0x12, 0x61, 0x13, 0x95, 0x13, 0x0F, 0x14, 0x42, 0x14, 0x0A1, 0x14, 0x0A, 0x15, 0x78, 0x15, 0x0EC, 0x15, 0x1C, 0x16, 0x7B, 0x16, 0x0EF, 0x16, 0x57, 0x17, 0x8A, 0x17, 0x0E9, 0x17, 0x4D, 0x18, 0x81, 0x18, 0x0F3, 0x18, 0x5E, 0x19, 0x0CC, 0x19, 0x0FF, 0x19, 0x72, 0x1A, 0x0E5, 0x1A, 0x44, 0x1B, 0x0B8, 0x1B, 0x20, 0x1C, 0x53, 0x1C, 0x0B2, 0x1C, 0x16, 0x1D, 0x4A, 0x1D, 0x0BC, 0x1D, 0x27, 0x1E, 0x95, 0x1E, 0x0C8, 0x1E, 0x3B, 0x1F, 0x0AE, 0x1F, 0x0D, 0x20, 0x74, 0x20, 0x0A8, 0x20, 0x22, 0x21, 0x55, 0x21, 0x0C8, 0x21, 0x27, 0x22, 0x89, 0x22, 0x0BD, 0x22, 0x20, 0x23, 0x8B, 0x23, 0x0EA, 0x23, 0x1B, 0x24, 0x89, 0x24, 0x0FD, 0x24, 0x2D, 0x25, 0x8C, 0x25, 0x5, 26, 0x35, 0x26, 0x0AA, 0x26, 0x27, 0x27, 0x27, 0x27};
    v3 = 0;
    for (int i = 0; i < 74; i++) {
        v2 = *(int16_t *)(enc + i*2) - 3150 - v3;
        v3 = *(int16_t *)(enc + i*2) - 3150;
        Buffer[i] = v2;
    }
    puts(Buffer);
    return 0;
}
```
