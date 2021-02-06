/* eslint-disable import/no-unresolved */
import Link from 'next/Link';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Sick Fits</Link>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
    </header>
  );
}
