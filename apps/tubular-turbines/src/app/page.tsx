import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <span className="p-4">
        <Image src="/cloudyTur.jpg" alt="Cloudy Work yard" width="300" height="250" />
      </span>
      <span className="p-4">
        <Image src="/foggyPart.jpg" alt="Cloudy Work yard" width="300" height="250" />
      </span>
      <p className="p-4">How do I do this all again????</p>
    </div>
  )
}
