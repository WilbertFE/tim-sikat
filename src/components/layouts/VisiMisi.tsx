import { AppleCard } from "@/components/layouts";

export default function VisiMisi() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-slate-100 mt-12 rounded-xl mx-2 p-4">
      <div className="w-full space-y-2">
        <h1 className="text-center font-bold text-3xl tracking-wider">
          Visi & Misi
        </h1>
        <p className="text-center">
          Paslon Tiga Memiliki Visi Untuk Menerapkan Sistem{" "}
          <span className="tracking-wide bg-gradient-to-r from-teal-500 to-green-600 bg-clip-text text-transparent">
            SIKAT
          </span>{" "}
          Pada Sekolah
        </p>
      </div>
      <div className="w-full">
        <AppleCard />
      </div>
    </div>
  );
}
