function A (num){
    return num + 1;
}

function B (num) {
    return num + 2;
}

function C (num) {
    return num + 3;
}

A (B(C(2)));

// expects 8