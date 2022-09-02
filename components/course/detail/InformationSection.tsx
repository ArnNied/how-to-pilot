import Image from "next/image"

import ButtonWithRingShadow from "../../common/ButtonWithRingShadow"

const InformationSection = () => {
  return (
    <div className="flex flex-col px-24 pt-24">
      <div className="max-w-screen-sm flex flex-col space-y-6">
        <div className="flex flex-row space-x-4">
          <div className="relative w-16 h-16">
            <Image
              src="/assets/images/courses/javascript-course.svg"
              layout="fill"
            />
          </div>
          <h2 className="flex items-center font-bold text-4xl">
            Javascript Beginner Class
          </h2>
        </div>
        <div className="flex flex-row space-x-2">
          {[...Array(5)].map((_, index) => (
            <div className="flex flex-row items-center px-3 py-2 bg-white rounded shadow-lg space-x-2">
              <div className="relative w-6 h-6">
                <Image src="/assets/images/common/coin.svg" layout="fill" />
              </div>
              <p className="font-semibold text-xs">100 Coins</p>
            </div>
          ))}
        </div>
        <div className="flex">
          <p>
            JavaScript allows you to add interactivity to your pages. Common
            examples that you may have seen on the websites are sliders, click
            interactions, popups and so on.
          </p>
        </div>
        <ButtonWithRingShadow
          text="Enroll Now"
          buttonColor="bg-black group-hover:bg-tertiary-orange"
          shadowColor="bg-primary-base group-hover:bg-black"
          shadowBorderColor="border-black group-hover:border-black"
          textColor="text-white group-hover:text-black"
        />
      </div>
    </div>
  )
}

export default InformationSection
