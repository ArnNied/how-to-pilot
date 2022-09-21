import Image from "next/image"

type TCustomImageProp = {
  src: string
  sizing: string
}

const CustomImage = ({ src, sizing }: TCustomImageProp) => {
  return (
    <div className={"relative " + sizing}>
      <Image src={src} layout="fill" />
    </div>
  )
}

export default CustomImage
