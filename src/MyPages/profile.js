import { PaperClipIcon } from '@heroicons/react/20/solid'
import Header from './../MyComponents/Header';       
import Doughnut from './../MyComponents/Chart';       
export default function profile() {
  return (
    <>
    <Header/>
    <div className="overflow-hidden bg-gray-500 shadow">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-xl font-semibold leading-6 text-white">Your Profile</h2>
        <h3 className="mt-1 max-w-2xl text-m text-gray-300">Personal Details and Information</h3>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-m font-medium text-gray-500">Full Name</dt>
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">Full Name will be displayed here</dd>
          </div>
          
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-m font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">email@example.com</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-m font-medium text-gray-500">Role</dt>
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">Student</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-m font-medium text-gray-500">Disability Type</dt>
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">Visually Impaired</dd>
          </div>
        </dl>
      </div>
    </div>
    <Doughnut/>
    </>
  )
}