function add(x, y, z) {
    if (typeof z === 'number') {
        return x + y + z;
    }
    return x + y;
}
add(1, 2);
