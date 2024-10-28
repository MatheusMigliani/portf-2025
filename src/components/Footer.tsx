import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; 2024 Matheus Migliani. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/MatheusMigliani"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/matheus-migliani/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
