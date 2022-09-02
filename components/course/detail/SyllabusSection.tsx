import { nanoid } from "nanoid"
import Link from "next/link"
import { useState } from "react"

const SyllabusSection = () => {
  const [syllabus, setSyllabus] = useState([
    {
      key: nanoid(),
      title: "Introduction",
      children: [
        {
          key: nanoid(),
          title: "Introduction To Javascript",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Comments",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Variable",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Data Types",
          link: "#",
        },
      ],
    },
    {
      key: nanoid(),
      title: "Operator And If-Else Statement",
      children: [
        {
          key: nanoid(),
          title: "If-Else Statement",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Logical Operator (||, &&, !)",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Quiz 1",
          link: "#",
        },
      ],
    },
    {
      key: nanoid(),
      title: "Functionals",
      children: [
        {
          key: nanoid(),
          title: "Introduction To Functions",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Function Arguments",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Return Statement",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Practice 1",
          link: "#",
        },
      ],
    },
    {
      key: nanoid(),
      title: "Array",
      children: [
        {
          key: nanoid(),
          title: "Introduction To Array",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Array Methods",
          link: "#",
        },
      ],
    },
    {
      key: nanoid(),
      title: "Objects",
      children: [
        {
          key: nanoid(),
          title: "Introduction To Objects",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Value vs Reference",
          link: "#",
        },
      ],
    },
    {
      key: nanoid(),
      title: "Loops",
      children: [
        {
          key: nanoid(),
          title: "Introduction To Loops",
          link: "#",
        },
        {
          key: nanoid(),
          title: "For Loops",
          link: "#",
        },
        {
          key: nanoid(),
          title: "While Loops",
          link: "#",
        },
        {
          key: nanoid(),
          title: "Practice 2",
          link: "#",
        },
      ],
    },
    {
      key: nanoid(),
      title: "Project",
      children: [
        {
          key: nanoid(),
          title: "Project For Completion",
          link: "#",
        },
      ],
    },
  ])

  function handleExpandContent(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.nextElementSibling?.classList.toggle("!max-h-[1000px]")
  }

  return (
    <div className="flex px-24 py-24">
      <div className="w-full max-w-screen-lg flex flex-col px-24 py-16 bg-white space-y-8">
        <h3 className="flex font-bold text-2xl">Syllabus</h3>
        <div className="flex flex-col">
          {syllabus.map(({ key, title, children }, index) => (
            <div
              key={key}
              className="flex flex-col first:border-t border-black overflow-hidden"
            >
              <button
                onClick={(e) => handleExpandContent(e)}
                className="flex flex-row p-8 border-r border-b border-l border-black"
              >
                {/* TODO: PROGRESS CIRCLE FUNCTIONALITY */}
                <div className="w-1/12 flex font-semibold text-lg">
                  {index + 1}
                </div>
                <h4 className="w-full flex font-semibold text-lg">{title}</h4>
                <div className="w-min flex font-semibold text-lg">V</div>
              </button>
              <div
                id={key}
                className="flex flex-col max-h-0 transition-all ease-out duration-300"
              >
                {children.map(({ key, title, link }, index) => (
                  <Link key={key} href={link}>
                    <a className="flex flex-row px-20 py-8 border-r border-b border-l border-black space-x-8">
                      <span className="flex">•</span>
                      <p className="text-secondary-lighter">{title}</p>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SyllabusSection
