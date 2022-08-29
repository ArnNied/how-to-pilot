import Link from "next/link"

type TButtonWithRingShadowProps = {
  text: string
  sizing?: string
  padding?: string
  link?: string
}

const ButtonWithRingShadow = ({
  text,
  sizing,
  padding,
  link,
}: TButtonWithRingShadowProps) => {
  return (
    <div className={"flex relative group " + (sizing || "w-fit")}>
      <span className="absolute w-full h-full bg-primary-base group-hover:bg-black border border-gray-500 rounded -z-10 translate-x-1 translate-y-1"></span>
      <Link href={link || "#"}>
        <a
          className={
            "w-full flex items-center justify-center bg-secondary-base hover:bg-tertiary-orange font-semibold text-sm text-white hover:text-black border border-black rounded " +
            (padding || "px-16 py-3")
          }
        >
          {text}
        </a>
      </Link>
    </div>
  )
}

export default ButtonWithRingShadow
