import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className='text-primary font-semibold text-2xl' href="/">ፈጣኝ ፉድ
        </Link>
        <nav className='flex items-center gap-8 text-gray-600 font-semibold'>
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Menu</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Contact</Link>
        </nav>
    
        <nav className='flex items-center gap-8 text-gray-600 font-semibold'>
        <Link href={'/login'} className='mr-2'>
          Login
        </Link>
        <Link href={'/register'} className='bg-primary rounded-full text-white px-8 py-2'>
        Register
        </Link>
        </nav>
      </header>
    </>
  );
}
