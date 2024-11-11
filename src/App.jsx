import { Calendar, CircleArrowRight, Clock8, IndianRupee, MapPin } from 'lucide-react';
import './App.css';
import logo from './assets/company-logo.png';

function App() {
  // Array of job postings
  const jobPostings = [
    {
      title: "Field Sales",
      company: "Imperial Business Solutions",
      location: "Hyderabad",
      duration: "3 Months",
      salary: "10,000 /month",
      posted: "4 days ago",
      type: "Internship with job offer",
      activelyHiring: true
    },
    {
      title: "Marketing Intern",
      company: "ABC Marketing",
      location: "Mumbai",
      duration: "2 Months",
      salary: "8,000 /month",
      posted: "7 days ago",
      type: "Internship",
      activelyHiring: false
    },
    {
      title: "Software Development",
      company: "Tech Solutions Inc.",
      location: "Bangalore",
      duration: "6 Months",
      salary: "15,000 /month",
      posted: "2 days ago",
      type: "Internship with job offer",
      activelyHiring: true
    },
    {
      title: "Software Engineer Intern",
      company: "Tech Solutions Inc.",
      location: "Bangalore",
      duration: "6 Months",
      salary: "20,000 /month",
      posted: "2 days ago",
      type: "Internship with job offer",
      activelyHiring: true
    },
    {
      title: "Data Analyst Intern",
      company: "Data Insights Co.",
      location: "Mumbai",
      duration: "3 Months",
      salary: "15,000 /month",
      posted: "5 days ago",
      type: "Internship",
      activelyHiring: false
    },
    {
      title: "Full Stack Developer Intern",
      company: "Web Innovators",
      location: "Hyderabad",
      duration: "4 Months",
      salary: "18,000 /month",
      posted: "3 days ago",
      type: "Internship with job offer",
      activelyHiring: true
    },
    {
      title: "Machine Learning Engineer Intern",
      company: "AI Pioneers",
      location: "Chennai",
      duration: "5 Months",
      salary: "25,000 /month",
      posted: "7 days ago",
      type: "Internship",
      activelyHiring: true
    },
    {
      title: "Cybersecurity Analyst Intern",
      company: "SecureNet",
      location: "Delhi",
      duration: "3 Months",
      salary: "12,000 /month",
      posted: "1 day ago",
      type: "Internship with job offer",
      activelyHiring: false
    },
  ];

  return (
    <div className="flex justify-center p-6 flex-col gap-6">
      {jobPostings.map((job, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 w-[45%] min-w-[450px] transform transition duration-300 hover:scale-105">
          <div className='flex items-center justify-between'>
            <div>
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 font-medium">{job.company}</p>
            </div>
            <img src={logo} alt="company_logo" className='w-[90px]' />
          </div>
          {job.activelyHiring && (
            <span className="text-blue-600 text-sm font-semibold">Actively hiring</span>
          )}
          <div className="flex items-center mt-4 space-x-4">
            <div className="flex items-center text-gray-500">
              <MapPin />
              <p className="ml-1">{job.location}</p>
            </div>
            <div className="flex items-center text-gray-500">
              <Calendar />
              <p className="ml-1">{job.duration}</p>
            </div>
            <div className="flex items-center text-gray-500">
              <IndianRupee />
              <p className="ml-1">{job.salary}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <span className="bg-blue-100 flex items-center text-blue-500 text-sm font-medium px-3 py-1 rounded-full">
                <Clock8 /> {job.posted}
              </span>
              <p className="ml-2 text-gray-500 text-sm">{job.type}</p>
            </div>
            <a href="#" className='flex text-blue-500  gap-2 '>
              Apply Now <CircleArrowRight />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
