import { PaperClipIcon } from '@heroicons/react/20/solid'
import Header from './../MyComponents/Header';       
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
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">Tutor</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-m font-medium text-gray-500">About</dt>
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">
              Lorem ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-m font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-m text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">resume_tutor.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                {/* <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li> */}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </>
  )
}