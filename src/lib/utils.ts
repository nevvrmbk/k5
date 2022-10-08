export {}

export async function share() {
    if (navigator.canShare()) {
        await navigator.share({
            // files: [],
            text: 'ShareData Text',
            title: 'ShareData Title',
            url: 'https://render.com',
        })
    }
}
