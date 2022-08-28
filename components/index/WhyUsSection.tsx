import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Arrow from "~/assets/icons/common/arrow-right.svg"

import { convertToId } from "../utils"

const CONTENT = [
  {
    title: "Gamification",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    link: "#",
  },
  {
    title: "Project-based learning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    link: "#",
  },
  {
    title: "Learning Path",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    link: "#",
  },
  {
    title: "Coaching with expert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    link: "#",
  },
]

const WhyUsSection = () => {
  function handleToggleText(clickedElementIndex: number) {
    const clickedEl = document.getElementById(
      convertToId(CONTENT[clickedElementIndex].title)
    )

    // First parent is the container for X (clicked)
    // Second parent is the container for siblings of element containing X
    const siblings = clickedEl?.parentElement?.parentElement?.children
    if (siblings) {
      for (let i = 0; i < siblings?.length; i++) {
        const child = siblings.item(i)

        if (i === clickedElementIndex) {
          child?.children?.item(1)?.classList.toggle("!max-h-64")
          child?.children?.item(1)?.classList.toggle("pb-4")
        } else {
          child?.children?.item(1)?.classList.remove("!max-h-64", "pb-4")
        }
      }
    }
  }

  return (
    <div className="flex flex-row px-32 py-16 space-x-12">
      <div className="w-7/12 flex items-center">
        <div className="relative w-full h-96">
          <Image
            src="/assets/images/index/why-us/why-us-image.svg"
            layout="fill"
          />
        </div>
      </div>
      <div className="w-5/12 flex flex-col space-y-4">
        <h2 className="text-sm text-black text-opacity-50 text-end">Why Us</h2>
        <h3 className="font-bold text-3xl text-end">
          We make best feature for your support
        </h3>
        <div className="flex flex-col divide-y-2 divide-secondary-lighter divide-opacity-50">
          {CONTENT.map(({ title, description, link }, index) => (
            <div key={title} className="flex flex-col">
              <button
                onClick={() => handleToggleText(index)}
                className="flex flex-row items-center py-4 space-x-4"
              >
                <div className="w-1/12 h-fit font-bold text-black text-opacity-50 text-start">
                  0{index + 1}
                </div>
                <div className="w-11/12 flex flex-row justify-between">
                  <h4 className="flex font-semibold text-lg">{title}</h4>
                  <div className="flex">V</div>
                </div>
              </button>
              <div
                id={convertToId(title)}
                className="flex flex-row space-x-4 max-h-0 overflow-hidden transition-all ease-out duration-300"
              >
                <div className="w-1/12"></div>
                <div className="w-11/12 flex flex-col space-y-2">
                  <p className="text-secondary-lighter text-sm">
                    {description}
                  </p>
                  <Link href={link}>
                    <a className="w-fit flex flex-row items-center text-sm text-tertiary-blue hover:text-tertiary-orange group">
                      Learn More
                      <span className="ml-4 w-fit h-full flex items-center">
                        <Arrow className="fill-tertiary-blue group-hover:fill-tertiary-orange" />
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyUsSection
