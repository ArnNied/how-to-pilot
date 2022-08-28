import { AppProps } from "next/app"
import Image from "next/image"
import Link from "next/link"
import TextTruncate from "react-text-truncate"
import ArrowSVG from "~/assets/icons/common/arrow-right.svg"

type TProps = {
  key: string
  imageSrc: string
  title: string
  description: string
  link: string
  titleNextToImage: boolean
  imageSize: string
  titleSize: string
  truncateAfter?: number
}

const CommonCard = ({
  imageSrc,
  title,
  description,
  link,
  titleNextToImage,
  imageSize,
  titleSize,
  truncateAfter,
}: TProps) => {
  return (
    <div className="flex flex-col p-8 bg-white hover:bg-primary-base rounded-lg box-shadow-on-hover-with-ring-br">
      <div className="h-full flex flex-col">
        <div className="flex flex-col">
          <div
            className={
              "flex " +
              (titleNextToImage ? "flex-row space-x-4" : "flex-col space-y-4")
            }
          >
            <div className={"flex " + (titleNextToImage ? "w-1/4" : "")}>
              <div className={"relative " + imageSize}>
                <Image src={imageSrc} layout="fill" alt={title} />
              </div>
            </div>

            <h3
              className={
                "flex items-center font-bold text-secondary-light " +
                `${titleSize} ` +
                (titleNextToImage ? "w-3/4" : "")
              }
            >
              {title}
            </h3>
          </div>

          <div className="flex mt-4 mb-4">
            <TextTruncate
              line={truncateAfter || 99}
              element="p"
              truncateText="…"
              text={description}
              containerClassName="text-secondary-lighter text-sm"
            />
          </div>
        </div>
        <Link href={link}>
          <a className="flex flex-row justify-between items-center mt-auto text-base text-tertiary-blue hover:text-tertiary-orange group">
            Learn More
            <span className="ml-4 w-fit h-full flex items-center">
              <ArrowSVG className="fill-tertiary-blue group-hover:fill-tertiary-orange" />
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default CommonCard
