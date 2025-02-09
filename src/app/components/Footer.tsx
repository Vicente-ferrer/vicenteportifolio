export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 py-6">
      <div className="container mx-auto px-4 text-center text-white">
        <p>
          &copy; {new Date().getFullYear()} Vicente de Sousa. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
