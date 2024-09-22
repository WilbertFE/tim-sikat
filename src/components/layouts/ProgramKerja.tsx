import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";

export default function ProgramKerja() {
  return (
    <div className="flex flex-col gap-y-8 mt-12 rounded-xl mx-2 p-4 bg-slate-100">
      <div>
        <h1 className="text-center font-bold text-3xl">Program Unggulan</h1>
        <p className="text-muted-foreground text-center">
          Program Spesifik yang Akan Kami Realisasikan. <strong>Tekan</strong>{" "}
          Untuk Informasi Lebih Lanjut.
        </p>
      </div>
      <ExpandableCardDemo />
    </div>
  );
}
