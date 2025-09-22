import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            KANSAI COLLECTION 2024/5/5 出演
          </h1>
          <div className="relative w-full aspect-video">
            {/* TODO: 実際の画像パスに置き換える */}
            <Image
              src="/kansai-collection.jpg"
              alt="KANSAI COLLECTION"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-lg">NiziProject 1.5 メンバーが出演決定！</p>
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">
              オーディション応募はこちら
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
