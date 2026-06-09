import Link from "next/link";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";

interface SearchModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function SearchModal({ isOpen, setIsOpen }: SearchModalProps) {
  return (
    <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)}>
      <DialogBackdrop
        transition
        className="fixed inset-0 z-99999 bg-gray-900/20 transition-opacity duration-200 ease-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 top-20 z-99999 mb-4 flex items-start justify-center overflow-hidden px-4 sm:px-6 md:top-28">
        <DialogPanel transition className="max-h-full w-full max-w-2xl overflow-auto rounded-xl bg-white shadow-lg duration-300 ease-out data-closed:translate-y-4 data-closed:opacity-0">
          {/* Search form */}
          <form className="border-b border-gray-200">
            <div className="flex items-center">
              <label htmlFor="search-modal" className="sr-only">
                Search
              </label>
              <svg
                className="ml-4 h-4 w-4 shrink-0 fill-gray-500"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
              </svg>
              <input
                id="search-modal"
                data-autofocus
                className="w-full appearance-none border-0 bg-white py-3 pl-2 pr-4 text-sm placeholder-gray-400 focus:ring-transparent"
                type="search"
                placeholder="Search for anything…"
              />
            </div>
          </form>
          <div className="p-2">
            <ul>
              <li>
                <Link
                  className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-gray-700 outline-hidden focus-within:bg-gray-100 hover:bg-gray-100"
                  href="#0"
                >
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-gray-400"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                  </svg>
                  <span>Alternative Schemas</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-gray-700 outline-hidden focus-within:bg-gray-100 hover:bg-gray-100"
                  href="#0"
                >
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-gray-400"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                  </svg>
                  <span>Query string parameters</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-gray-700 outline-hidden focus-within:bg-gray-100 hover:bg-gray-100"
                  href="#0"
                >
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-gray-400"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                  </svg>
                  <span>Integrations</span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center rounded-lg px-2 py-1 text-sm leading-6 text-gray-700 outline-hidden focus-within:bg-gray-100 hover:bg-gray-100"
                  href="#0"
                >
                  <svg
                    className="mr-3 h-3 w-3 shrink-0 fill-gray-400"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                  >
                    <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                  </svg>
                  <span>Organize Contacts with Tags</span>
                </Link>
              </li>
            </ul>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
