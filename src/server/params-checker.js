
export function checker(request, params) {
    let length = params.length;
    return (length == params.filter(x => request.body[x]).length);
};

export function handler(err, res) {
    if (!err) return true;
    console.log(err);
    res.end(JSON.stringify({err : 'system error'}));
    return false;
};

export function paramsRange(request) {
    return (
        [2000, 4000, 6000, 8000, 10000]
            .includes(request.body.time) &&
        ['GCC', 'G++', 'Java']
            .includes(request.body.lang) &&
        [8, 16, 32, 64, 128]
            .includes(request.body.memory)
    );
};
