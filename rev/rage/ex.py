import angr
import claripy


def main():
    path_to_binary = "./rage"
    project = angr.Project(path_to_binary)

    buf = [claripy.BVS(f"buf_{i}", 8) for i in range(0x10)]
    flag = claripy.Concat(*buf)
    base_st = project.factory.entry_state(args=["./test"], stdin=flag)

    sim = project.factory.simgr(base_st)

    find_addr = 0x000000000040125e
    avoid_addr = 0x000000000040127e
    sim.explore(find=find_addr, avoid=avoid_addr)

    if sim.found:
        sol_st = sim.found[0]
        sol = "".join([chr(sol_st.se.eval(buf[i])) for i in range(0x10)])
        print(sol)
    else:
        print("Couldn't find solution.")


if __name__ == "__main__":
    main()
