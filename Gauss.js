function Gauss(matrix, b) {
    triangle_form(matrix, b);
    
    return calc_x(matrix, b);
}

function triangle_form(matrix, b) {

    for(let k = 0; k < N; k++) {

        let i_max = max_in_col(matrix, k);
        if(matrix[i_max][k] == 0) return "error";
        swap_rows(matrix, b, k, i_max);

        for(let i = k+1; i < N; i++) {
            let f = matrix[i][k] / matrix[k][k];

            for(let j = k+1; j < N; j++) {
                matrix[i][j] -= matrix[k][j] * f;
            }
            b[i] -= b[k] * f;

            matrix[i][k] = 0;
        } 
    }

    return [matrix, b];
}

function max_in_col(matrix, col) {
    let max_val = Math.abs(matrix[col][col]);
    let num = col;
    for(let i = col + 1; i < N; i++) {
        if(max_val < Math.abs(matrix[i][col])) {
            [num, max_val] = [i, matrix[i][col]];
        }
    }
    return num;
}

function swap_rows(matrix, b, x, y) {
    for(let i = 0; i < N; i++) {
        [matrix[x][i], matrix[y][i]] = [matrix[y][i], matrix[x][i]];
    }
    [b[x], b[y]] =[b[y], b[x]];
}

function calc_x(matrix, b) {
    let x = [0, 0, 0, 0];
    for(let k = N-1; k >= 0; k--) {
        x[k] = b[k];
        for(let i = 0; i < N; i++) {
            if(i != k)
                x[k] -= matrix[k][i]*x[i];
        }
        x[k] /= matrix[k][k];
    }

    return x;
}