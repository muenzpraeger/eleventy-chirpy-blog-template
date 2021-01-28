const copyUrlToClipboard = async () => {
    try {
        await navigator.clipboard.writeText(location.href);
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
};

export { copyUrlToClipboard };
