async function loadMetadata() {
    const response = await fetch("/api/metadata");
    const metadata = await response.json();
    document.getElementById('version').textContent = metadata.version;
    document.getElementById('hostname').textContent = metadata.hostname;
}

loadMetadata().catch(function(e){
    console.error(e);
});