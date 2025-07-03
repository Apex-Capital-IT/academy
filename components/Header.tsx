import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f9f9f9] border-b border-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-brand-primary">
            Apex Академи
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-brand-accent hover:text-brand-primary"
            >
              Бидний тухай
            </Link>
            <Link
              href="#courses"
              className="text-brand-accent hover:text-brand-primary"
            >
              Сургалтууд
            </Link>
            <Link
              href="#teachers"
              className="text-brand-accent hover:text-brand-primary"
            >
              Багш нар
            </Link>
            <Link
              href="#contact"
              className="text-brand-accent hover:text-brand-primary"
            >
              Холбоо барих
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link
              href="/auth/login"
              className="text-sm px-4 py-2 border border-brand-primary rounded hover:bg-brand-primary hover:text-white text-brand-primary"
            >
              Нэвтрэх
            </Link>
            <Link
              href="/auth/signup"
              className="text-sm px-4 py-2 bg-brand-primary text-white rounded hover:bg-brand-accent hover:text-white"
            >
              Бүртгүүлэх
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
