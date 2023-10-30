import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import InfoText from "@/components/InfoText";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT </h1>

      <div className="flex space-x-2 text-center">
        <InfoText
          infoIcon={<SunIcon className="h-8 w-8 " />}
          title="Examples"
          content1="Explain Something to me!!!"
          content2="What is the differenc between dog and cat? "
          content3="What is the color of the sun?"
        />
        <InfoText
          infoIcon={<BoltIcon className="h-8 w-8 " />}
          title="Capabilities"
          content1="Change the ChatGPT model to use."
          content2="Message are stored in the firebase&lsquo;s firestore."
          content3="Hot Toast notification while chatGPT is thinking!!! "
        />
        <InfoText
          infoIcon={<ExclamationTriangleIcon className="h-8 w-8 " />}
          title="Limitiation"
          content1="May occasionally generate incorrect information."
          content2="May occasionally produce harmfull instruction or content ."
          content3="Limited information of the world after the 2021."
        />
      </div>
    </main>
  );
}
