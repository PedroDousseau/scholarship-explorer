import ScholarshipCard from "./ScholarshipCard"

function ScholarshipList() {
  const SCHOLARSHIPS_DATA_MOCK = [
    {
      imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "$750 NextGen Achievers Scholarship – No Essay",
      description: "Starting college is the first step toward becoming a leader of tomorrow. With the NextGen Achievers Scholarship, you have a chance to earn $750 to support your education—no essays, no hassle. WiseGEEK is proud to invest in the next generation of changemakers.",
      amount: "750",
      deadline: "2025-05-12"
    },
    {
      imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "$500 BrightFutures STEM Scholarship – No Essay",
      description: "Women are shaping the future of science and technology. The BrightFutures STEM Scholarship gives you a chance to earn $500 toward your studies—no essays required. WiseGEEK is dedicated to supporting diversity and inclusion in STEM fields.",
      amount: "500",
      deadline: "2025-05-12"
    },
    {
      imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "$1,000 Aspire Higher First-Gen Scholarship – No Essay",
      description: "Being the first in your family to attend college is a huge achievement. The Aspire Higher First-Gen Scholarship offers you a chance to earn $1,000 toward your education—no essays, no stress. WiseGEEK believes in supporting first-generation students.",
      amount: "1,000",
      deadline: "2025-05-12"
    },
    {
      imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "$500 EmpowerU Mental Health Scholarship – No Essay",
      description: "Mental wellness matters, especially during college. With the EmpowerU Mental Health Scholarship, you can earn $500 to help cover school expenses—no essays involved. WiseGEEK supports student well-being and access to education.",
      amount: "500",
      deadline: "2025-05-12"
    },
    {
      imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      title: "$750 Catalyst for Change Community Service Scholarship – No Essay",
      description: "If you’ve made a difference in your community, WiseGEEK wants to recognize your impact. The Catalyst for Change Community Service Scholarship gives you a chance to earn $750—no essays needed. We believe in rewarding those who give back.",
      amount: "750",
      deadline: "2025-05-12"
    }
  ];
  

  return (
    <div className="flex flex-row flex-wrap gap-8 w-full justify-center">
      {SCHOLARSHIPS_DATA_MOCK.map((scholarship) => (
        <ScholarshipCard
          title={scholarship.title}
          amount={scholarship.amount}
          deadline={scholarship.deadline}
          description={scholarship.description}
          imgUrl={scholarship.imgUrl}
          key={scholarship.title}
        />
      ))}
    </div>
  )
}

export default ScholarshipList