// src/pages/index.tsx
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-gray-200 rounded-xl shadow-neumorphism p-8 max-w-2xl w-full md:max-w-3xl text-center md:text-left flex flex-col md:flex-row items-center md:items-start">
        <Image
          src="/business-card/1.png"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full mb-4 md:mb-0 md:mr-8 shadow-neumorphism"
          unoptimized
        />
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">古田　篤哉</h1>
          <p className="text-gray-500">27卒IT学生</p>
          <p className="mt-2 text-gray-600">f.atsuya.personal@gmail.com</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="https://x.com/yamadacojp27" target="_blank" className="text-blue-500 hover:text-blue-600">Twitter</a>
            <a href="https://github.com/yamadacojp27" target="_blank" className="text-blue-500 hover:text-blue-600">GitHub</a>
            <a href="https://qiita.com/yamadacojp27" target="_blank" className="text-blue-500 hover:text-blue-600">Qiita</a>
            <a href="https://connpass.com/user/yamada_co_jp/" target="_blank" className="text-blue-500 hover:text-blue-600">connpass</a>
            <a href="https://www.wantedly.com/id/atsuya2027" target="_blank" className="text-blue-500 hover:text-blue-600">wantedly</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
