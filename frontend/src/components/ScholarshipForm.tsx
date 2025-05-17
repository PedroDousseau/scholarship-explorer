import type { ScholarshipCardProps } from './ScholarshipCard';
import { toast } from 'react-hot-toast';

interface ScholarshipFormProps extends ScholarshipCardProps {
  onSubmit: (data: any) => void;
}

function ScholarshipForm({ title, onSubmit }: ScholarshipFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    onSubmit({ title });
    toast.success('Application submitted successfully!', {
      position: 'top-right',
      duration: 4000,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Personal Information</legend>
        <p className="label">Full Name</p>
        <input type="text" placeholder="Enter your full name" className="input input-bordered w-full" required />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Contact Information</legend>
        <p className="label">Email Address</p>
        <input type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
      </fieldset>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Motivation</legend>
        <p className="label">Why do you deserve this scholarship?</p>
        <textarea className="textarea textarea-bordered w-full h-24" placeholder="Write your motivation..." required></textarea>
      </fieldset>

      <button type="submit" className="btn text-white bg-fuchsia-950 hover:bg-fuchsia-900 w-full">Submit Application</button>
    </form>
  );
}

export default ScholarshipForm;