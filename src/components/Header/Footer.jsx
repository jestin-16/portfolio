import {React} from 'react';

const Footer = () => {
    return(
        <footer className="w-full border-t bg-slate-900 border-slate-800">
          <div className="flex flex-col items-center justify-center px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <p className="text-sm text-slate-400">
              &copy; {new Date().getFullYear()} JESTIN.dev. All rights reserved.
            </p>
            <div className="flex mt-2 space-x-4">
              <a
                href="" > link</a>
                <a href="" > link</a>
                <a href="" > link</a>
            </div>
          </div>
        </footer>
    );
}