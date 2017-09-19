export function calc(a, b, operation) {
    const numA = Number(a);
    const numB = Number(b);
    
    switch (operation) {
        case '+':
            return numA + numB;
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;
        case '/': 
            return numA / numB;
        case '^': 
            return Math.pow(numA, numB);
        default:
            return 0;
    }
}

export function kramer(params) {
    const dm = [[params.a1, params.b1], [params.a2, params.b2]];
    const dm1 = [[params.c1, params.b1], [params.c2, params.b2]];
    const dm2 = [[params.a1, params.c1], [params.a2, params.c2]];
    
    const getDeterminant = m => m[0][0]*m[1][1] - m[0][1]*m[1][0];
    
    const d = getDeterminant(dm);
    const dx1 = getDeterminant(dm1);
    const dx2 = getDeterminant(dm2);
    
    if (d != 0) {
        const x1 = dx1 / d;
        const x2 = dx2 / d;
      
        return `${x1} ${x2}`;
    } else {
        return 'Determinant is equal to zero! No answer.';
    }
}