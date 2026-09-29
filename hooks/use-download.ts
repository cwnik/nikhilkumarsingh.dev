import { useCallback, useState } from "react";

type DownloadOptions = { url: string; filename?: string };

export function useDownload() {
    const [isDownloading, setIsDownloading] = useState(false);

    const download = useCallback(async ({ url, filename = "download" }: DownloadOptions) => {
        try {
            setIsDownloading(true);

            const response = await fetch(url);

            if (!response.ok) throw new Error(`Failed to download file: ${response.status}`);

            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = blobUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            link.remove();

            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            console.error("Download failed:", error);
        } finally {
            setIsDownloading(false);
        }
    }, []);

    return { isDownloading, download };
}
