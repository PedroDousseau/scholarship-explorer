import { useState } from 'react';
import Modal from './Modal';
import ScholarshipForm from './ScholarshipForm';

export interface ScholarshipCardProps {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  amount: number;
  deadline: string;
}

function ScholarshipCard({ id, imgUrl, title, description, amount, deadline }: ScholarshipCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

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
            <div className="badge badge-success">{formatCurrency(amount)}</div>
            <div className="badge badge-warning">{new Date(deadline).toLocaleDateString()}</div>
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
          id={id}
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