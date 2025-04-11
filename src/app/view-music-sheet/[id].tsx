"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useMusicSheets } from "@/src/hooks/useMusicSheets";
import Loading from "@/src/components/loading";
import { toast } from "react-toastify";

export default function ViewMusicSheet({ params }: { params: { id: string } }) {
    const { musicSheets, convertMusicSheetToMXL } = useMusicSheets();
    const router = useRouter();
    const [mxlUrl, setMxlUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAndConvert = async () => {
            try {
                const sheet = musicSheets.find((sheet) => sheet.id === params.id);
                if (!sheet || !sheet.file) {
                    toast.error("Arquivo da partitura não encontrado.");
                    router.push("/");
                    return;
                }

                const convertedUrl = await convertMusicSheetToMXL(sheet.file);
                setMxlUrl(convertedUrl);
            } catch (error) {
                toast.error("Erro ao converter a partitura.");
                router.push("/");
            } finally {
                setLoading(false);
            }
        };

        fetchAndConvert();
    }, [params.id, musicSheets, convertMusicSheetToMXL, router]);

    if (loading) return <Loading />;

    return (
        <main className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-8">Visualizar Partitura</h1>
            {mxlUrl ? (
                <div>
                    <embed
                        src={mxlUrl}
                        type="application/vnd.recordare.musicxml+xml"
                        className="w-full h-96"
                    />
                    <div className="mt-4">
                        <button
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={() => {
                                const audio = new Audio(mxlUrl);
                                audio.play();
                            }}
                        >
                            Reproduzir Partitura
                        </button>
                    </div>
                </div>
            ) : (
                <p>Erro ao carregar a partitura.</p>
            )}
        </main>
    );
}
