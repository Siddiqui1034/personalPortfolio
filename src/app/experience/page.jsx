"use client"

import Stepper from "@/components/Stepper"

const Experience = () => {

  const steps = [
    {
      label: "React Developer",
      content:  [
        {
          title:"React Developer",
          desc: "Developed and maintained React Web application, following best practices for writing reusable components and worked on state management using Context API and Redux library.",
          date: "2021 - Present",
          company: "P2P System Pvt Ltd"
        }
      ]                
    },
    {
      label: "Support Engineer",
      content:  [
        {
          title:"Support Engineer",
          desc: "Analyse and make recommendations for improvements, and execute necessary maintenance to enhance the user experience.",
          date: " 2019 - 2021",
          company: "Myva Technologies"
        }
      ]                
    },
    {
      label: "Reporting Analyst",
      content:  [
        {
          title:"Reporting Analyst",
          desc: "Creating and maintaining reports, ensuring data accuracy, and visualizing data treds for presentations. ",
          date: "2016 - 2019",
          company: "Compact India Pvt Ltd"
        }
      ]                
    }, 
  ]

  return (
    <div >
      <Stepper steps={steps} />
    </div>
  )
}

export default Experience
