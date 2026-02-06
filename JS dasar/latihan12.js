function tampilAngka(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    return tampilAngka(n-1);
}
tampilAngka(10);

function hitungFaktorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * hitungFaktorial(n-1);
}
console.log(hitungFaktorial(5));