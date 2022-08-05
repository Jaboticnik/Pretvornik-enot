export default function (stevilo, vrsta) {
    if (vrsta === "a") {
        if (stevilo === 1) {
            return "er"
        } else if (stevilo === 2 || Number.isInteger(stevilo) === false) {
            return "ra"
        } else if (stevilo === 3 || stevilo === 4) {
            return "ri"
        } else if (stevilo >= 5 || stevilo < 1) {
            return "rov"
        }
    }else if (vrsta === "b") {
        if (stevilo === 1) {
            return ""
        } else if (stevilo === 2 || Number.isInteger(stevilo) === false) {
            return "a"
        } else if (stevilo === 3 || stevilo === 4) {
            return "i"
        } else if (stevilo >= 5 || stevilo < 1) {
            return "ov"
        }
    }else if (vrsta === "c") {
        if (stevilo === 1) {
            return "a"
        } else if (stevilo === 2) {
            return "i"
        } else if (stevilo === 3 || stevilo === 4 || Number.isInteger(stevilo) === false) {
            return "e"
        } else if (stevilo >= 5 || stevilo < 1) {
            return ""
        }
    }else if (vrsta === "d") {
        if (stevilo === 1) {
            return "elj"
        } else if (stevilo === 2 || Number.isInteger(stevilo) === false) {
            return "lja"
        } else if (stevilo === 3 || stevilo === 4) {
            return "lji"
        } else if (stevilo >= 5 || stevilo < 1) {
            return "ljev"
        }
    }
}