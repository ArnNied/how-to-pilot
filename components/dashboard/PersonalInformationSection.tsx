import { nanoid } from "nanoid"
import Image from "next/image"
import { useState } from "react"

const PersonalInformationSection = () => {
  const [badges, setBadges] = useState([
    {
      key: nanoid(),
      imageSrc: "/assets/images/dashboard/horse-achievement.svg",
    },
    {
      key: nanoid(),
      imageSrc: "/assets/images/dashboard/wind-achievement.svg",
    },
    {
      key: nanoid(),
      imageSrc: "/assets/images/dashboard/tree-achievement.svg",
    },
    {
      key: nanoid(),
      imageSrc: "/assets/images/dashboard/shield-achievement.svg",
    },
    {
      key: nanoid(),
      imageSrc: "/assets/images/dashboard/hat-achievement.svg",
    },
  ])
  return (
    <div className="flex flex-row px-24 py-8 bg-secondary-base space-x-8">
      <div className="w-fit flex">
        <div className="relative w-40 h-40">
          <Image
            src="/assets/images/dashboard/profile-picture.svg"
            layout="fill"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-around">
        <h3 className="font-semibold text-2xl text-primary-base">Hand Sen</h3>
        <div className="flex flex-row space-x-4">
          <p className="text-primary-base">
            0 <span className="text-secondary-lighter">Points</span>
          </p>
          <p className="text-primary-base">
            0 <span className="text-secondary-lighter">Course Completed</span>
          </p>
          <p className="text-primary-base">
            0{" "}
            <span className="text-secondary-lighter">Challenge Completed</span>
          </p>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <div className="flex flex-row space-x-2">
            {badges.map(({ key, imageSrc }) => (
              <div key={key} className="p-1.5 bg-white rounded-full">
                <div className="relative w-5 h-5">
                  <Image src={imageSrc} layout="fill" />
                </div>
              </div>
            ))}
          </div>
          <p className="text-primary-base">
            0{" "}
            <span className="text-secondary-lighter">Achievement Unlocked</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default PersonalInformationSection
