let length, width;
document.getElementById("areaButton").onclick = function() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    const maxLimit = 999999;

    let area = length * width;
    if (isNaN(length) || isNaN(width)) {
        document.getElementById("area-result").textContent = `0`;
    }
    else if ( length > maxLimit || width > maxLimit) {
        document.getElementById("area-result").textContent = `Input is limited to 999,999.`;
    }
    else {
        if (Number.isInteger(area)) {
            let areaResult = parseInt(area.toFixed(2));
            document.getElementById("area-result").textContent = area.toLocaleString();
        }
        else {
            document.getElementById("area-result").textContent = area.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        
    } 
}