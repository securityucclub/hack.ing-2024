import { classNames } from "~/helpers/classNames";

export function FintualBtn({
  primary = false,
  fullwidth = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  primary?: boolean;
  fullwidth?: boolean;
}) {
  return (
    <a
      className={classNames(
        className,
        "flex h-[44px] flex-row items-center justify-center gap-4  rounded-[32px] border border-solid px-[52px] py-7 text-sm",
        fullwidth ? "w-full" : "w-fit",
        primary
          ? "border-transparent bg-[#005ad6] text-white"
          : "border-[#282828]",
      )}
      {...props}
    />
  );
}
