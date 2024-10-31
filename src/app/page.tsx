// src/pages/index.tsx
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-xs text-center">
        <Image
          src="/1.png"
          alt="Profile Picture"
          width={100}
          height={100}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-semibold text-gray-800">山田 太郎</h1>
        <p className="text-gray-500">フロントエンドエンジニア</p>
        <p className="mt-2 text-gray-600">yamada@example.com</p>
        <p className="text-gray-600">+81-90-1234-5678</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://twitter.com/yourhandle" target="_blank" className="text-blue-500 hover:text-blue-600">Twitter</a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" className="text-blue-500 hover:text-blue-600">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Home
