import { useState } from 'react';
import Modal from './Modal';
import ScholarshipForm from './ScholarshipForm';

export interface ScholarshipCardProps {
  imgUrl: string;
  title: string;
  description: string;
  amount: string;
  deadline: string;
}

function ScholarshipCard({ imgUrl, title, description, amount, deadline }: ScholarshipCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card-sm bg-neutral-50 shadow-sm rounded-lg text-neutral-950 flex flex-col sm:max-w-80">
        <figure>
          <img
            src={imgUrl}
            alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p className="mb-5">{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-success">${amount}</div>
            <div className="badge badge-warning">{deadline}</div>
          </div>
          <div className="">
            <button 
              className="btn btn-block text-white bg-fuchsia-950 hover:bg-fuchsia-900"
              onClick={() => setIsModalOpen(true)}
            >
              Apply
            </button>
          </div>      
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={`Apply for ${title}`}
      >
        <ScholarshipForm
          imgUrl={imgUrl}
          title={title}
          description={description}
          amount={amount}
          deadline={deadline}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>   
  )
}

export default ScholarshipCard