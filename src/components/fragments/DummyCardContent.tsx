import Image from "next/image";

export default function DummyContent({
  content,
  src,
}: {
  content: string;
  src: string;
}) {
  return (
    <>
      <div
        key={"dummy-content"}
        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          {content}
        </p>
        <Image
          src={src}
          alt="dummy-content"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-12 rounded-lg"
        />
      </div>
    </>
  );
}
