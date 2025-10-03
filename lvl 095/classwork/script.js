function charachters(s) {
    for (let i = 0; i < s.length; i++) {
        for (let b = i + 1; b < s.length; j++) {
            if (s[i] === s[b]) {
                return false;  
            }
        }
    }
    return true;  
}


function charachters(s) {
    for (let i = 0; i < s.length; i++) {
        let isUnique = true;
        for (let a = 0; a < s.length; a++) {
            if (i !== a && s[i] === s[a]) {
                isUnique = false;  
                break;
            }
        }
        if (isUnique) {
            return s[i];
        }
    }
    return null;
}

