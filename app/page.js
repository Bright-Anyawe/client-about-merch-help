import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
        <p className="text-lg mb-8">Explore our pages to learn more about us, our merchandise, and get help.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/about" className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Image
              src="/file.svg"
              alt="About icon"
              width={40}
              height={40}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">About Us</h2>
            <p className="text-gray-600 text-center">Learn more about our company and our mission.</p>
          </Link>
          
          <Link href="/merch" className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Image
              src="/window.svg"
              alt="Merch icon"
              width={40}
              height={40}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Merchandise</h2>
            <p className="text-gray-600 text-center">Check out our latest merchandise and products.</p>
          </Link>
          
          <Link href="/help" className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Image
              src="/globe.svg"
              alt="Help icon"
              width={40}
              height={40}
              className="mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Help Center</h2>
            <p className="text-gray-600 text-center">Get assistance and find answers to your questions.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
