export default function Home() {
  const waNumber = "6282123286914";
  const heroWaLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Halo Admin Ilmupediakonsultan, saya tertarik layanan publikasi jurnal."
  )}`;

  const chatWaLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    "Halo Admin Ilmupediakonsultan, saya ingin diskusi tentang target jurnal, kesiapan artikel, dan strategi publikasi terbaik untuk paper saya"
  )}`;

  const getPackageWaLink = (packageName: string) =>
    `https://wa.me/${waNumber}?text=${encodeURIComponent(
      `Halo Admin Ilmupediakonsultan, saya ingin konsultasi lebih lanjut mengenai paket publikasi ${packageName}`
    )}`;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <section className="bg-gradient-to-br from-blue-900 to-slate-800 text-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <div className="mb-6">
              <p className="text-cyan-300 font-semibold tracking-widest uppercase mb-2">
                Ilmupediakonsultan — Smart Partner for Scientific Publication
              </p>

              <h1 className="text-5xl font-bold text-white leading-tight">
                Jasa Pendampingan Publikasi
                <span className="block text-cyan-400">Scopus & SINTA</span>
              </h1>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-slate-200">
              Pendampingan profesional mulai dari proofreading, formatting,
              submit jurnal, revisi reviewer, hingga Letter of Acceptance
              sesuai proses editorial jurnal.
            </p>

            <a
              href={heroWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-green-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-600"
            >
              Konsultasi via WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-4xl font-bold text-cyan-300">Q1</h3>
                <p className="mt-2 text-sm">Top 25% SJR</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-cyan-300">Q2</h3>
                <p className="mt-2 text-sm">25%-50% SJR</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-cyan-300">Q3</h3>
                <p className="mt-2 text-sm">50%-75% SJR</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-cyan-300">Q4</h3>
                <p className="mt-2 text-sm">75%-100% SJR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold">Layanan Kami</h2>
            <p className="text-lg text-gray-600">
              Pendampingan publikasi untuk dosen, mahasiswa, peneliti, dan
              praktisi.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Proofreading Akademik",
                desc: "Perbaikan bahasa, struktur kalimat, dan gaya penulisan akademik.",
              },
              {
                title: "Formatting Jurnal",
                desc: "Penyesuaian artikel dengan template dan author guidelines jurnal.",
              },
              {
                title: "Pendampingan Submit",
                desc: "Bantuan submit, komunikasi editor, revisi reviewer, dan resubmission.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >
                <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
                <p className="leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold">Paket Publikasi</h2>
            <p className="text-lg text-gray-600">
              Pilih layanan sesuai target publikasi Anda.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                title: "SINTA 2",
                price: "Rp4 Juta",
                border: "border-green-500",
                messageName: "Sinta 2",
              },
              {
                title: "Scopus Q4",
                price: "Rp6,5 Juta",
                border: "border-blue-500",
                messageName: "Scopus Q4",
              },
              {
                title: "Scopus Q3",
                price: "Rp9,3 Juta",
                border: "border-purple-500",
                messageName: "Scopus Q3",
              },
              {
                title: "Scopus Q1/Q2",
                price: "Rp12–15 Juta",
                border: "border-yellow-500",
                messageName: "Scopus Q1/Q2",
              },
            ].map((pkg) => (
              <div
                key={pkg.title}
                className={`flex flex-col justify-between rounded-3xl border-t-8 ${pkg.border} bg-white p-8 shadow-lg`}
              >
                <div>
                  <h3 className="mb-4 text-2xl font-bold">{pkg.title}</h3>
                  <p className="mb-6 text-3xl font-bold">{pkg.price}</p>

                  <ul className="space-y-3 text-gray-600">
                    <li>✔ Proofreading</li>
                    <li>✔ Formatting</li>
                    <li>✔ Submit Jurnal</li>
                    <li>✔ Revisi Reviewer</li>
                  </ul>
                </div>

                <a
                  href={getPackageWaLink(pkg.messageName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 rounded-2xl bg-slate-900 py-3 text-center font-semibold text-white transition hover:bg-slate-700"
                >
                  Konsultasi
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">Kenapa Memilih Kami?</h2>

            <div className="space-y-5 text-lg leading-relaxed text-gray-700">
              <p>✔ Skema pembayaran bertahap dan transparan</p>
              <p>✔ Pendampingan hingga revisi reviewer</p>
              <p>✔ Menghindari jurnal predator atau discontinued</p>
              <p>✔ Komunikasi proses publikasi lebih terbuka</p>
              <p>✔ Cocok untuk dosen, mahasiswa, dan peneliti</p>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-700 p-10 text-white shadow-2xl">
            <h3 className="mb-6 text-3xl font-bold">
              Konsultasi Gratis Sekarang
            </h3>

            <p className="mb-8 text-lg text-cyan-100">
              Diskusikan target jurnal, kesiapan artikel, dan strategi
              publikasi terbaik untuk paper Anda.
            </p>

            <a
              href={chatWaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 shadow-lg transition hover:bg-slate-200"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 px-6 py-10 text-center text-slate-300">
        <p className="mb-2 text-lg font-semibold">
          Ilmupedia Konsultan — Smart Partner for Scientific Publication
        </p>

        <p className="text-sm text-slate-400">
          Pendampingan Publikasi Scopus & SINTA secara Profesional,
          Transparan, dan Terpercaya.
        </p>

        <p className="mt-4 text-xs text-slate-500">
          © 2026 Ilmupediakonsultan. All Rights Reserved
        </p>
      </footer>
    </main>
  );
}