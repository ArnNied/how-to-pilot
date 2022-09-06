import Image from "next/image"

import Coin from "../common/Coin"

type TCatalogueProps = {
  title: string
}

const Catalogue = ({ title }: TCatalogueProps) => {
  return (
    <div className="flex flex-col px-72 pb-12 space-y-8">
      <div className="flex flex-row justify-between items-center">
        <h4 className="w-3/12 flex">{title}</h4>
        <div className="w-9/12 h-px flex border border-black"></div>
      </div>
      <div className="grid grid-cols-4 gap-x-8">
        {[...Array(4)].map((_, i) => (
          <div className="flex flex-col px-4 py-8 bg-white hover:bg-primary-base rounded space-y-4 box-shadow-on-hover-with-ring-br">
            <div className="flex justify-center">
              <div className="relative w-32 h-32">
                <Image
                  src="/assets/images/store/profile-picture.svg"
                  layout="fill"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h5 className="font-semibold text-lg text-secondary-light text-center">
                Avatar #1
              </h5>
              <p className="text-secondary-lighter text-center">
                {" "}
                Avatar Picture
              </p>
            </div>
            <div className="flex justify-center">
              <Coin amount={100} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Catalogue
