function A_m1(matrix) {
    let ans = [[], [], [], []];

    for(let i = 0; i < N; i++) {
        let b = [0, 0, 0, 0];
        b[i] = 1;
        let x = Gauss(copy(matrix), b);
        for(let j = 0; j < N; j++) {
            ans[j][i] = x[j];
        }
    }

    return ans;
}

function determinant(matrix, b) {
    triangle_form(matrix, b);

    let det = 1;
    for(let i = 0; i < N; i++) det *= matrix[i][i];

    return det;
}

function copy(matrix) {
    return JSON.parse(JSON.stringify(matrix));
}