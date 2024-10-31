// src/pages/index.tsx
import Image from 'next/image'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-gray-200 rounded-xl shadow-neumorphism p-8 max-w-2xl w-full md:max-w-3xl text-center md:text-left flex flex-col md:flex-row items-center md:items-start">
        <Image
          src="/business-card/1.png"
          alt="Profile Picture"
          width={300}
          height={300}
          className="rounded-full mb-10 md:mb-0 md:mr-8 shadow-neumorphism"
          unoptimized
        />
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">古田　篤哉</h1>
          <p className="text-gray-500 mb-3">27卒IT学生</p>
          <p className="text-gray-600 mb-5">f.atsuya.personal@gmail.com</p>
          <p className="text-gray-600">趣味</p>
          <p className="text-gray-500 mb-6">ライブ、旅行、カラオケ、ギター</p>
          <p className="text-gray-600">推し</p>
          <p className="text-gray-500 mb-6">Ado</p>
          <p className="text-gray-600">好きな言葉</p>
          <p className="text-gray-500 mb-6">Life does not have to be perfect to be wonderful</p>
          <p className="text-gray-600">スキル</p>
          <p className="text-gray-500 mb-6">HTML/CSS/JavaScript/TypeScript/React/Next.js</p>
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
