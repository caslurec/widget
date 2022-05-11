export function resetFrameSizeWindowParent() {
    //

    let height = document.getElementById("popover")?.offsetHeight ?? 0;
    let width = document.getElementById("popover")?.offsetWidth ?? 0;

    window.parent.postMessage({ width, height }, "*");

    // console.log(`Send window.parent width:${width} height: ${height}`);
}
