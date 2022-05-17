function Tridiagonal(matrix, d) {
    let alpha = [], beta = [];

    let a = [], b = [], c = [];
    for(let i = 0; i < N; i++) {
        if(i != 0) a = [...a, matrix[i][i-1]];
        else a = [...a, 0];
        b = [...b, matrix[i][i]];
        if(i != N-1) c = [...c, matrix[i][i+1]];
        else c = [...c, 0];
    }

    for(let i = 0; i < N; i++) {
        if(i == 0) {
            alpha = [...alpha, -c[0]/b[0]];
            beta = [...beta, d[0]/b[0]];
        } else {
            alpha = [...alpha, -c[i]/(a[i]*alpha[i-1] + b[i])];
            beta = [...beta, (d[i] - a[i]*beta[i-1])/(a[i]*alpha[i-1] + b[i])];
        }
    }

    let x = [];
    for(let i = N-1; i >= 0; i--) {
        if(i == N-1) {
            x[i] = beta[i];
        } else {
            x[i] = alpha[i]*x[i+1] + beta[i];
        }
    }

    return x;
}