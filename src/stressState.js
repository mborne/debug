/** Shared state for stress endpoints (e.g. CPU stress running). */
let stressCpuRunning = false;

export function getStressCpuRunning() {
    return stressCpuRunning;
}

export function setStressCpuRunning(value) {
    stressCpuRunning = value;
}
