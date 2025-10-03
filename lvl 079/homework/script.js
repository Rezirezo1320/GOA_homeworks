function countArea(shape, ...dimensions) {
    if (shape === 'rectangle') {
        const [length, width] = dimensions;
        return length * width;
    } else if (shape === 'circle') {
        const [radius] = dimensions;
        return Math.PI * Math.pow(radius, 2);
    } else if (shape === 'triangle') {
        const [a, b, c] = dimensions;
        const s = (a + b + c) / 2;  
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return area;
    } else {
        return "Invalid shape";
    }
}
