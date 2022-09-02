import Link from "next/link"

type TButtonWithRingShadowProps = {
  text: string
  sizing?: string
  padding?: string
  link?: string
  textColor?: string
  buttonColor: string
  shadowColor: string
  shadowBorderColor: string
}

const ButtonWithRingShadow = ({
  text,
  sizing,
  padding,
  link,
  textColor,
  buttonColor,
  shadowColor,
  shadowBorderColor,
}: TButtonWithRingShadowProps) => {
  return (
    <div className={"flex relative group " + (sizing || "w-fit")}>
      <span
        className={
          "absolute w-full h-full border border-opacity-50 group-hover:border-opacity-50 rounded translate-x-1 translate-y-1 " +
          (shadowColor || "bg-primary-base group-hover:bg-black") +
          " " +
          (shadowBorderColor || "border-black group-hover:border-black")
        }
      ></span>
      <Link href={link || "#"}>
        <a
          className={
            "w-full flex items-center justify-center  font-semibold text-sm text-white hover:text-black border border-black rounded z-20 " +
            (padding || "px-16 py-3") +
            " " +
            (buttonColor ||
              "bg-secondary-base group-hover:bg-tertiary-orange") +
            " " +
            (textColor || "text-black")
          }
        >
          {text}
        </a>
      </Link>
    </div>
  )
}

export default ButtonWithRingShadow
