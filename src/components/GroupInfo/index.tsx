import Image from "next/image";

export const GroupInfo = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">グループ紹介</h2>
        <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto">
          {/* TODO: 実際のグループ画像パスに置き換える */}
          <Image
            src="/group-photo.jpg"
            alt="グループ写真"
            fill
            className="object-contain"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg mb-4">
            2024年6月にデビュー予定のNiziProject 1.5グループ
          </p>
          <p>
            JYPエンターテインメントとソニーミュージックによる共同プロジェクト
          </p>
        </div>
      </div>
    </section>
  );
};
