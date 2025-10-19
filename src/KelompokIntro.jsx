import React, { useEffect, useState } from "react";
import {
    Mail,
    MapPin,
    Heart,
    User,
    Menu,
    X,
    ChevronUp,
    Instagram,
    MessageCircle,
    CalendarDays,
    Utensils,
    CupSoda,
} from "lucide-react";
import { motion } from "framer-motion";

// WhatsApp Icon (custom minimal)
const WhatsAppIcon = (props) => (
    <svg
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={props.className}
        aria-hidden="true"
    >
        <circle cx="12" cy="12" r="9" />
        {/* handset-like shape */}
        <path d="M15.5 14.5c-1 .8-2 .8-3.2.1-1.2-.7-2.1-1.8-2.8-3-.6-1.1-.6-2 .2-3l.7-.8 1.6 1.6-.5.7c-.2.3 0 .7.2 1 .4.6 1 .1 1.7.7.6.5 1.1 1.1.7 1.7-.1.2-.3.4-.6.7Z" />
    </svg>
);

// Single-page perkenalan Kelompok 4
// Tema: hijau gelap & putih, responsif laptop & HP
// Tipografi elegan (Playfair Display + Inter)

// ---------- Util ----------
function digitsOnly(v) {
    return (v || "")
        .split("")
        .filter((c) => c >= "0" && c <= "9")
        .join("");
}
function waLink(v) {
    const d = digitsOnly(v);
    if (!d) return "#";
    if (d.startsWith("0")) return "https://wa.me/62" + d.slice(1);
    if (d.startsWith("62")) return "https://wa.me/" + d;
    if (d.startsWith("+62")) return "https://wa.me/" + d.slice(1);
    return "https://wa.me/" + d;
}

export default function KelompokIntro() {
    const [open, setOpen] = useState(false);

    const siswa = [
        {
            id: "siswa-1",
            nama: "Alvaro",
            longName: "Satria Alvaro Nefandra",
            nickname: "Al",
            birthPlace: "Bekasi",
            birthDate: "8 April 2011",
            hobi: ["Main Mobile Legends", "Main Basket", "Mendengarkan Musik"],
            favFood: "Mie ayam",
            favDrink: "Matcha",
            email: "satrialvaro08@gmail.com",
            instagram: "https://instagram.com/alvarocuyy",
            whatsapp: "087785744655",
            alamat: "Bekasi",
            tentang: "Disiplin, konsisten menabung, dan senang mencoba hal baru di bidang TIK.",
            inisial: "AL",
            foto: "/foto/alvaro.jpg",
        },
        {
            id: "siswa-2",
            nama: "Fathir",
            longName: "Fathir Mulia Razan",
            nickname: "Patung",
            birthPlace: "Bekasi",
            birthDate: "11 Desember 2010",
            hobi: ["Main Bola", "Main Roblox", "Main Basket"],
            favFood: "Dendeng",
            favDrink: "Es teh",
            email: "ruokt695@gmail.com",
            instagram: "",
            whatsapp: "089530163984",
            alamat: "Bekasi",
            tentang: "Rajin, gemar olahraga dan gim, serta antusias mempelajari TIK.",
            inisial: "FA",
            foto: "/foto/fathir.jpg",
        },
        {
            id: "siswa-3",
            nama: "Hamka",
            longName: "Hamka Syahid Al Hakim",
            nickname: "Ham",
            birthPlace: "Bekasi",
            birthDate: "29 April 2011",
            hobi: ["Main futsal", "Main bola", "Mendengarkan musik"],
            favFood: "Nasi goreng",
            favDrink: "Milo",
            email: "hamkasyahid2@gmail.com",
            instagram: "https://instagram.com/hamzz_z5",
            whatsapp: "0895384179390",
            alamat: "Bekasi",
            tentang: "Suka berkolaborasi, aktif di olahraga, dan tertarik mengasah dasar TIK.",
            inisial: "HA",
            foto: "/foto/hamka.jpg",
        },
        {
            id: "siswa-4",
            nama: "Ghasan",
            longName: "Ghasan Azzahrif",
            nickname: "Ghasan",
            birthPlace: "Kranji",
            birthDate: "19 Juni 2011",
            hobi: ["Main Bola"],
            favFood: "Mie Ayam",
            favDrink: "Teh",
            email: "ffg770533@gmail.com",
            instagram: "https://instagram.com/ghasanazzahrif19",
            whatsapp: "088213400265",
            alamat: "Kranji",
            tentang: "Bersemangat, gemar bermain bola, dan siap belajar hal baru di TIK.",
            inisial: "GH",
            foto: "/foto/ghasan.jpg",
        },
    ];

    // ---- simple self-tests (runtime) ----
    useEffect(() => {
        console.assert(Array.isArray(siswa) && siswa.length === 4, "Data siswa harus 4 entri.");
        siswa.forEach((s) => {
            ["id", "nama", "longName", "nickname", "birthPlace", "birthDate", "email", "instagram"].forEach((k) => {
                console.assert(s[k] !== undefined, `Field ${k} wajib diisi untuk ${s.nama}`);
            });
        });
    }, []);

    const navItems = [...siswa.map((s) => ({ label: s.nama, href: `#${s.id}` }))];

    return (
        <div className="scroll-smooth min-h-screen bg-emerald-950 text-emerald-50 text-[14px] md:text-base">
            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
                rel="stylesheet"
            />

            {/* Navbar */}
            <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-emerald-950/70 bg-emerald-950/80 border-b border-emerald-800">
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                    <a href="#home" className="group inline-flex items-center gap-2">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 grid place-items-center shadow-md">
                            <User className="h-5 w-5" />
                        </div>
                        <span className="font-serif text-xl tracking-wide">Kelompok 4</span>
                    </a>

                    <button
                        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-700 hover:bg-emerald-900"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Buka menu"
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>

                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map((it) => (
                            <li key={it.href}>
                                <a
                                    href={it.href}
                                    className="px-3 py-2 rounded-xl hover:bg-emerald-900 transition text-sm"
                                >
                                    {it.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile menu */}
                {open && (
                    <div className="md:hidden border-t border-emerald-800">
                        <ul className="mx-auto max-w-6xl px-4 py-2 grid gap-1">
                            {navItems.map((it) => (
                                <li key={it.href}>
                                    <a
                                        href={it.href}
                                        onClick={() => setOpen(false)}
                                        className="block px-3 py-2 rounded-xl hover:bg-emerald-900 text-sm"
                                    >
                                        {it.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </header>

            {/* Hero / Home */}
            <section id="home" className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_20%_30%,rgba(16,185,129,0.20),transparent_60%),radial-gradient(600px_400px_at_80%_10%,rgba(16,185,129,0.12),transparent_60%)]" />
                <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-serif text-2xl md:text-5xl leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Kelompok 4
                    </motion.h1>

                    <div className="mt-2 inline-flex rounded-full border border-emerald-700 bg-emerald-900/60 px-3 py-1 text-xs md:text-sm">
                        KUMPULAN ANAK-ANAK YANG RAJIN, PANDAI MENABUNG, DAN SAYANG ORANG TUA
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.05 }}
                        className="mt-4 max-w-3xl text-emerald-200 text-sm md:text-base"
                        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
                    >
                        Di era serba digital saat ini, mata pelajaran TIK menjadi bekal penting—tidak hanya memahami
                        komputer, tetapi juga mengubah ide menjadi karya melalui teknologi. Situs web ini dibuat oleh
                        Kelompok 4 sebagai penerapan materi kelas: menyusun tampilan, merancang isi, dan menyatukan
                        gagasan agar hasilnya bermanfaat dan menarik. Sepanjang proses, kami belajar bekerja dalam tim,
                        berbagi peran, dan bertanggung jawab. Melalui situs ini, kami ingin menunjukkan bahwa TIK bukan
                        sekadar teori atau pemrograman semata, melainkan juga ruang untuk berkreasi, berkolaborasi, dan
                        terus mengeksplorasi hal baru.
                    </motion.p>

                    {/* Tujuan singkat */}
                    <div className="mt-6 grid gap-2 text-sm md:text-base">
                        <div className="font-semibold text-emerald-100">Tujuan</div>
                        <ul className="grid gap-2 list-disc pl-5 text-emerald-200">
                            <li>Memenuhi tugas dari Pak Ferdiansyah pada mata pelajaran TIK.</li>
                            <li>Menjadi wadah untuk memperkenalkan anggota Kelompok 4.</li>
                            <li>Melatih kemampuan kerja sama, komunikasi, dan tanggung jawab dalam satu proyek.</li>
                            <li>Mengasah dasar-dasar pembuatan serta pengelolaan situs web sederhana.</li>
                            <li>
                                Menunjukkan bahwa pembelajaran TIK bersifat menarik dan kreatif, tidak hanya berfokus
                                pada pemrograman.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Bagian Siswa: satu siswa = satu halaman (section) penuh */}
            <main className="mx-auto max-w-none pb-0">
                {siswa.map((s, idx) => (
                    <motion.section
                        id={s.id}
                        key={s.id}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5 }}
                        className="relative min-h-screen w-full border-top border-emerald-900"
                    >
                        {/* Background accents */}
                        <div className="pointer-events-none absolute inset-0 opacity-60">
                            <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-emerald-800 blur-3xl" />
                            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-700 blur-3xl" />
                        </div>

                        <div
                            className={`mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 md:grid-cols-2 ${
                                idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                            }`}
                        >
                            {/* Foto */}
                            <div className="relative h-screen md:h-auto">
                                <div className="absolute inset-0">
                                    <img src={s.foto} alt={`Foto ${s.nama}`} className="h-full w-full object-cover" />
                                    <div className="absolute inset-0 bg-emerald-950/40 mix-blend-multiply" />
                                </div>
                            </div>

                            {/* Konten */}
                            <div className="relative flex items-center">
                                <div className="z-10 w-full px-4 py-14 sm:px-8 md:px-10 lg:px-14">
                                    <h2
                                        className="mt-4 font-serif text-2xl leading-tight md:text-5xl"
                                        style={{ fontFamily: "'Playfair Display', serif" }}
                                    >
                                        {s.nama}
                                    </h2>

                                    <p className="mt-3 max-w-prose text-emerald-100 text-sm md:text-base lg:text-lg">
                                        {s.tentang}
                                    </p>

                                    <div className="mt-6 grid gap-3 text-sm md:text-base">
                                        <div className="grid gap-1">
                                            <div className="text-emerald-100 font-semibold">{s.longName}</div>
                                            <div className="text-emerald-300 text-sm">Nama panggilan: {s.nickname}</div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <MapPin className="h-4 w-4" />
                                            <span className="text-emerald-200">Tempat lahir: {s.birthPlace}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="h-4 w-4" />
                                            <span className="text-emerald-200">Tanggal lahir: {s.birthDate}</span>
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <Heart className="mt-0.5 h-4 w-4" />
                                            <div className="flex flex-wrap gap-2">
                                                {s.hobi.map((h) => (
                                                    <span
                                                        key={h}
                                                        className="rounded-full border border-emerald-700 bg-emerald-900/40 px-3 py-1 text-xs"
                                                    >
                                                        {h}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Utensils className="h-4 w-4" />
                                            <span className="text-emerald-200">Makanan favorit: {s.favFood}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <CupSoda className="h-4 w-4" />
                                            <span className="text-emerald-200">Minuman favorit: {s.favDrink}</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Mail className="h-4 w-4" />
                                            <a
                                                className="underline-offset-2 hover:underline"
                                                href={`mailto:${s.email}`}
                                            >
                                                {s.email}
                                            </a>
                                        </div>

                                        {s.instagram && s.instagram !== "-" ? (
                                            <div className="flex items-center gap-2">
                                                <Instagram className="h-4 w-4" />
                                                <a
                                                    className="underline-offset-2 hover:underline"
                                                    href={s.instagram}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    @{(s.instagram || "").split("/").pop().replace(/^@/, "")}
                                                </a>
                                            </div>
                                        ) : null}

                                        <div className="flex items-center gap-2">
                                            <MessageCircle className="h-4 w-4" />
                                            <a
                                                className="underline-offset-2 hover:underline"
                                                href={waLink(s.whatsapp)}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {s.whatsapp}
                                            </a>
                                        </div>

                                        <div className="flex items-start gap-2">
                                            <MapPin className="mt-0.5 h-4 w-4" />
                                            <span className="text-emerald-200">{s.alamat}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </main>

            {/* Footer */}
            <footer className="border-t border-emerald-800/60 bg-emerald-950">
                <div className="mx-auto max-w-6xl px-4 py-10 text-xs md:text-sm text-emerald-200 text-center">
                    <p>© {new Date().getFullYear()} Kelompok 4</p>
                </div>
            </footer>

            {/* Back to top button */}
            <a
                href="#home"
                className="fixed bottom-4 right-4 inline-flex items-center gap-1 rounded-xl border border-emerald-700 bg-emerald-900/70 px-3 py-2 backdrop-blur hover:bg-emerald-800 shadow-lg"
                aria-label="Kembali ke atas"
            >
                <ChevronUp className="h-4 w-4" />
                <span className="text-xs md:text-sm">Atas</span>
            </a>

            <style>{`
        :root { --font-serif: 'Playfair Display', serif; --font-sans: Inter, system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; }
        .font-serif { font-family: var(--font-serif); }
        body { font-family: var(--font-sans); }
      `}</style>
        </div>
    );
}
