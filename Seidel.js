let epsilon = 1e-3;

function Seidel(matrix, b) {
    let bigger_than_epsilon = true;
    let x = [0, 0, 0, 0];

    while(bigger_than_epsilon) {
        bigger_than_epsilon = false;

        for(let i = 0; i < N; i++) {
            let tmp = x[i];

            x[i] = b[i];
            for(let j = 0; j < N; j++) {
                if(j != i) {
                    x[i] -= matrix[i][j]*x[j];
                }
            }
            x[i] /= matrix[i][i];

            if(Math.abs(x[i] - tmp) >= epsilon) bigger_than_epsilon = true;
        }
    }
    
    return x;
}