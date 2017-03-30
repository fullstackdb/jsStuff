function createStringPermutation(text) {
    var arr = text.split(''),
        len = arr.length,
        perms = [],
        rest,
        picked,
        restPerms,
        next;

    if (len == 0)
        return [text];

    for (var i=0; i<len; i++) {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = createStringPermutation(rest.join(''));

        for (var j=0, jLen = restPerms.length; j< jLen; j++) {
            next = picked.concat(restPerms[j]);
            perms.push(next.join(''));
        }
    }

    return perms;
}
