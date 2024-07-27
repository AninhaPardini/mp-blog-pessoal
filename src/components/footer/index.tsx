
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-pink-500 py-4">
      <div className="flex justify-center space-x-4">
        <Link href="https://example.com/facebook" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={'linkedin'} name="facebook" className="h-6 w-6 text-white" /> */}
          Linkedin
        </Link>
        <Link href="https://example.com/instagram" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={'twitter'}  className="h-6 w-6 text-white" /> */}
          Twitter
        </Link>
        <Link href="https://example.com/twitter" target="_blank" rel="noopener noreferrer">
          {/* <FontAwesomeIcon icon={'behance'} className="h-6 w-6 text-white" /> */}
          Behance
        </Link>
      </div>
      <p className="text-center text-white mt-4">© 2022 Your Website. All rights reserved.</p>
    </footer>
  );
}