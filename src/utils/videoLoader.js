import JSZip from 'jszip';

const videoCache = new Map();

export async function loadVideoFromZip(videoName) {
    // If video is already in cache, return it
    if (videoCache.has(videoName)) {
        return videoCache.get(videoName);
    }

    try {
        // Fetch the zip file
        const response = await fetch('/videos.zip');
        const zipData = await response.arrayBuffer();
        
        // Load the zip file
        const zip = new JSZip();
        await zip.loadAsync(zipData);
        
        // Get the video file from the zip
        const videoFile = zip.file(videoName);
        if (!videoFile) {
            throw new Error(`Video ${videoName} not found in zip`);
        }
        
        // Convert the video file to blob
        const videoBlob = await videoFile.async('blob');
        const videoUrl = URL.createObjectURL(videoBlob);
        
        // Cache the video URL
        videoCache.set(videoName, videoUrl);
        
        return videoUrl;
    } catch (error) {
        console.error('Error loading video from zip:', error);
        throw error;
    }
}

// Clean up cache when component unmounts
export function cleanupVideoCache() {
    videoCache.forEach(url => URL.revokeObjectURL(url));
    videoCache.clear();
}
