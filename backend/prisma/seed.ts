import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const scholarshipData = [
  {
    title: "$750 NextGen Achievers Scholarship – No Essay",
    description: "Starting college is the first step toward becoming a leader of tomorrow. With the NextGen Achievers Scholarship, you have a chance to earn $750 to support your education—no essays, no hassle. WiseGEEK is proud to invest in the next generation of changemakers.",
    amount: 750,
    deadline: new Date("2025-06-15"),
    imgUrl: "http://localhost:5173/public/7.jpg"
  },
  {
    title: "$500 BrightFutures STEM Scholarship – No Essay",
    description: "Women are shaping the future of science and technology. The BrightFutures STEM Scholarship gives you a chance to earn $500 toward your studies—no essays required. WiseGEEK is dedicated to supporting diversity and inclusion in STEM fields.",
    amount: 500,
    deadline: new Date("2025-07-01"),
    imgUrl: "http://localhost:5173/public/40626.jpg"
  },
  {
    title: "$1,000 Aspire Higher First-Gen Scholarship – No Essay",
    description: "Being the first in your family to attend college is a huge achievement. The Aspire Higher First-Gen Scholarship offers you a chance to earn $1,000 toward your education—no essays, no stress. WiseGEEK believes in supporting first-generation students.",
    amount: 1000,
    deadline: new Date("2025-06-30"),
    imgUrl: "http://localhost:5173/public/7459344.jpg"
  },
  {
    title: "$500 EmpowerU Mental Health Scholarship – No Essay",
    description: "Mental wellness matters, especially during college. With the EmpowerU Mental Health Scholarship, you can earn $500 to help cover school expenses—no essays involved. WiseGEEK supports student well-being and access to education.",
    amount: 500,
    deadline: new Date("2025-07-15"),
    imgUrl: "http://localhost:5173/public/28719705_7491788.jpg"
  },
  {
    title: "$750 Catalyst for Change Community Service Scholarship – No Essay",
    description: "If you've made a difference in your community, WiseGEEK wants to recognize your impact. The Catalyst for Change Community Service Scholarship gives you a chance to earn $750—no essays needed. We believe in rewarding those who give back.",
    amount: 750,
    deadline: new Date("2025-08-01"),
    imgUrl: "http://localhost:5173/public/33399663_8011901.jpg"
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const s of scholarshipData) {
    const scholarship = await prisma.scholarship.create({
      data: s,
    })
    console.log(`Created scholarship with id: ${scholarship.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
