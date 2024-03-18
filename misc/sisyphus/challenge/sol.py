import numpy as np
import scipy.special as ss
# import math

flag = b"hack.ing{ThERE's_M0Re_7O_$E3_IN_AN_!ma6e}"
flagLen = len(flag)

# From l=0..6, from m=-l..l until reaching flagLen


xValues = [0.89, -0.97, 0.34, -0.17, -0.36, -0.8, -0.33,
           -0.98, 0.51, 0.19, 0.74, 0.15, -0.83, 0.77, -0.72,
           -0.3, 0.96, -0.79, -0.07, 0.06, -0.03, -0.1, -0.52, 0.28,
           -0.56, -0.4, 0.7, 0.66, -0.9, 0.54, 0.56, 0.09, 0.8,
           -0.66, 0.03, -0.96, 0.53, -0.12, -0.57, -0.67, -0.22]

yValues = [-0.1, -0.6, 0.33, -0.28, -0.31, 0.4, -0.34, -0.72, 0.07,
           0.3, -0.41, 0.25, 0.34, -0.42, 0.39, -0.35, 0.48, 0.41,
           -0.13, 0.11, -0.06, -0.18, -0.04, 0.35, 0.05, -0.27, -0.37,
           -0.29, 0.04, -0.0, -0.05, 0.16, -0.4, 0.29, 0.06, -0.48, 0.02,
           -0.21, 0.08, 0.31, -0.32]

offset = 0x26ea0

hexYValues = [int(i*100) for i in yValues]

# print(hexYValues)


# file = open("Sisyphus.jpg", "r+b")

# for i,x in enumerate(xValues):
#     y = ss.eval_legendre(5, x)
#     y = round(y, 2)
#     yInt = round(y*100)
#     file.seek(offset + yInt)
#     # print(f"at y={yInt} we have flag[{i}]={flag[i]} which is {bytes([flag[i]])}")
#     # print(flag[i])
#     # print(bytes([flag[i]]))
#     file.write(bytes([flag[i]]))

# file.close()


test = []

with open("Sisyphus.jpg", "rb") as file:
    for i, x in enumerate(xValues):
        y = ss.eval_legendre(5, x)
        y = round(y, 2)
        yInt = round(y*100)

        # print(f"y value is {y} and times 100 is {round(y*100)}")

        test.append(yInt)
        file.seek(offset + yInt)
        byte = file.read(1)
        char = chr(byte[0])
        print(char, end="")
        

coefficients = [63/8, 0, 70/8, 0, 15/8, 0]


# Notes
# Start at: 5F
# Lege ndre5   offsetx24600len41

# Start at: D6
# findxvalues

# start at: 275A0
# xvalues.2f=...;