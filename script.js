let N;
let type;

function init(_type) {
    let input = {'Gauss': Gauss_input, 'Tridiagonal': Tridiagonal_input, 'Seidel': Seidel_input};
    let eval = {'Gauss': Gauss, 'Tridiagonal': Tridiagonal, 'Seidel': Seidel};

    type = _type;
    N = (type == 'Tridiagonal' ? 3 : 4);

    let [matrix, b] = input[type]();
    let ans = eval[type](copy(matrix), copy(b));

    document.querySelectorAll('.row').forEach(e => e.remove());

    let active = document.getElementsByClassName('active')[0];
    active.classList.remove('active');
    document.getElementById(type).classList.add('active');

    document.getElementById("1").innerHTML += print_vector(ans);

    let det = determinant(copy(matrix), copy(b));
    document.getElementById("2").innerHTML += "<div class=\"row\">" + det.toLocaleString(undefined, { 
        maximumSignificantDigits: 2 
      }) + "</div>";

    let matrix_m1 = A_m1(copy(matrix));
    document.getElementById("3").innerHTML += print_matrix(matrix_m1);
}

function Gauss_input() {
    let matrix = [
        [5, 2, 1, 0],
        [1, 3, 2, 8],
        [4, -6, 1, 0],
        [5, 0, 3, 2]
    ];
    let b = [
        15,
        58,
        -10,
        27
    ];
    return [matrix, b];
}

function Tridiagonal_input() {
    let matrix = [
        [2, 4, 0],
        [4, 1, 5],
        [0, 5, 2]
    ];
    let b = [
        18,
        33,
        30
    ];
    return [matrix, b];
}

function Seidel_input() {
    let matrix = [
        [6, 0, 2, 3],
        [0, 4, 2, 1],
        [2, 2, 5, 0],
        [1, 1, 0, 3]
    ];
    let b = [
        24,
        18,
        21,
        15
    ];
    return [matrix, b];
}

function print_vector(x) {
    let out = "<div class=\"row\">";
    for(let i = 0; i < N; i++) {
        out += "<div class=\"col\">" + x[i].toLocaleString(undefined, { 
            maximumSignificantDigits: 2 
          }) + "</div>";
    }
    out += "</div>";
    return out;
}

function print_matrix(matrix) {
    let out = "";
    for(let i = 0; i < N; i++) {
        out += "<div class=\"row\">";
        for(let j = 0; j < N; j++) {
            out += "<div class=\"col\">" + matrix[i][j].toLocaleString(undefined, { 
                maximumSignificantDigits: 2 
              }) + "</div>";
        }
        out += "</div>";
    }
    return out;
}