import { useMutation } from '@tanstack/react-query';
import type { ScholarshipCardProps } from './ScholarshipCard';
import { toast } from 'react-hot-toast';

interface ScholarshipFormProps extends ScholarshipCardProps {
  onSubmit: (data: any) => void;
}

interface Application {
  scholarshipId: number;
  studentName: string;
  studentEmail: string;
  message: string;
  utm: string;
}

const createApplication = async(data: Application) => {
  const response = await fetch('http://localhost:3000/api/applications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to submit application')
  }
  return response.json()  
}

function ScholarshipForm({ title, id, onSubmit }: ScholarshipFormProps) {
  const { mutate: applyForScholarship, isPending } = useMutation({
    mutationFn: createApplication,
    onSuccess: () => {
      toast.success('Application submitted successfully!', {
        position: 'top-right',
        duration: 4000,
      });
      onSubmit({ title });
    },
    onError: () => {
      toast.error('Failed to submit application. Please try again.', {
        position: 'top-right',
        duration: 4000,
      });
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    applyForScholarship({
      scholarshipId: id,
      studentName: formData.get('name') as string,
      studentEmail: formData.get('email') as string,
      message: formData.get('message') as string,
      utm: 'direct', // TODO: Get this from URL params
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Personal Information</legend>
        <p className="label">Full Name</p>
        <input 
          name="name"
          type="text" 
          placeholder="Enter your full name" 
          className="input input-bordered w-full" 
          required 
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Contact Information</legend>
        <p className="label">Email Address</p>
        <input 
          name="email"
          type="email" 
          placeholder="Enter your email" 
          className="input input-bordered w-full" 
          required 
        />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Motivation</legend>
        <p className="label">Why do you deserve this scholarship?</p>
        <textarea 
          name="message"
          className="textarea textarea-bordered w-full h-24" 
          placeholder="Write your motivation..." 
          required
        ></textarea>
      </fieldset>

      <button 
        type="submit" 
        className="btn btn-block text-white bg-fuchsia-950 hover:bg-fuchsia-900"
        disabled={isPending}
      >
        {isPending ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  )
}

export default ScholarshipForm