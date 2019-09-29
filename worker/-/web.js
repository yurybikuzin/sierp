"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_easing_value(initial, target, t, fn = $$.$me_easing.linear) {
            return initial + (target - initial) * fn(t);
        }
        $$.$me_easing_value = $me_easing_value;
        $$.$me_easing = {
            linear: (t) => t,
            easeInQuad: (t) => t * t,
            easeOutQuad: (t) => t * (2 - t),
            easeInOutQuad: (t) => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
            easeInCubic: (t) => t * t * t,
            easeOutCubic: (t) => (--t) * t * t + 1,
            easeInOutCubic: (t) => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
            easeInQuart: (t) => t * t * t * t,
            easeOutQuart: (t) => 1 - (--t) * t * t * t,
            easeInOutQuart: (t) => t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
            easeInQuint: (t) => t * t * t * t * t,
            easeOutQuint: (t) => 1 + (--t) * t * t * t * t,
            easeInOutQuint: (t) => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t
        };
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//easing.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        let isArray = Array.isArray;
        let keyList = Object.keys;
        let hasProp = Object.prototype.hasOwnProperty;
        function $me_equal(a, b) {
            if (a === b)
                return true;
            if (a && b && typeof a == 'object' && typeof b == 'object') {
                const arrA = isArray(a), arrB = isArray(b);
                if (arrA != arrB)
                    return false;
                if (arrA && arrB) {
                    const length = a.length;
                    if (length != b.length)
                        return false;
                    for (let i = length; i-- !== 0;)
                        if (!$me_equal(a[i], b[i])) {
                            return false;
                        }
                    return true;
                }
                const setA = a instanceof Set, setB = b instanceof Set;
                if (setA != setB)
                    return false;
                if (setA && setB) {
                    if (a.size != b.size)
                        return false;
                    let iter = a.keys();
                    let next = iter.next();
                    while (!next.done) {
                        if (!b.has(next.value))
                            return false;
                        next = iter.next();
                    }
                    iter = b.keys();
                    next = iter.next();
                    while (!next.done) {
                        if (!a.has(next.value))
                            return false;
                        next = iter.next();
                    }
                    return true;
                }
                const mapA = a instanceof Map, mapB = b instanceof Map;
                if (mapA != mapB)
                    return false;
                if (mapA && mapB)
                    return $me_equal([...a], [...b]);
                const dateA = a instanceof Date, dateB = b instanceof Date;
                if (dateA != dateB)
                    return false;
                if (dateA && dateB)
                    return a.getTime() == b.getTime();
                const regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
                if (regexpA != regexpB)
                    return false;
                if (regexpA && regexpB)
                    return a.toString() == b.toString();
                const keys = keyList(a);
                const length = keys.length;
                if (length !== keyList(b).length)
                    return false;
                for (let i = length; i-- !== 0;)
                    if (!hasProp.call(b, keys[i]))
                        return false;
                for (let i = length; i-- !== 0;) {
                    const key = keys[i];
                    if (!$me_equal(a[key], b[key]))
                        return false;
                }
                return true;
            }
            return a !== a && b !== b;
        }
        $$.$me_equal = $me_equal;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//equal.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        function $me_word_plural(count, word1, word2_4, word5more) {
            if (word5more === undefined) {
                word5more = word2_4;
            }
            let result = word5more;
            const decimal = Math.floor(count / 10) % 10;
            if (decimal != 1) {
                const unit = count % 10;
                if (unit == 1) {
                    result = word1;
                }
                else if (unit >= 2 && unit <= 4) {
                    result = word2_4;
                }
            }
            return result;
        }
        $$.$me_word_plural = $me_word_plural;
        $$.$me_throw_silent = false;
        function $me_throw(msg, ...p) {
            if (!$$.$me_throw_silent)
                console.error.apply(console, [msg, ...p]);
            throw new Error(msg);
        }
        $$.$me_throw = $me_throw;
        $$.$me_stop = false;
        $$.$me_rect = () => ({ left: 0, top: 0, right: 0, bottom: 0 });
        $$.$me_rect_width = (rect) => rect.right - rect.left;
        $$.$me_rect_height = (rect) => rect.bottom - rect.top;
        $$.$me_pos = () => ({ left: 0, top: 0 });
        $$.$me_point_in_rect = (x, y, rect, tolerance = 0) => rect.left - tolerance < x && x < rect.right + tolerance &&
            rect.top - tolerance < y && y < rect.bottom + tolerance;
        $$.$me_dist_to_rect = (x, y, rect) => $$.$me_point_in_rect(x, y, rect) ? 0 :
            Math.max(Math.min(Math.abs(rect.left - x), Math.abs(rect.right - x)), Math.min(Math.abs(rect.top - y), Math.abs(rect.bottom - y)));
        function $me_point_in_rect_offset(x, y, offsetRect, clientRect) {
            x -= clientRect.left;
            y -= clientRect.top;
            const result = offsetRect && clientRect &&
                offsetRect.left < x && x < offsetRect.right &&
                offsetRect.top < y && y < offsetRect.bottom &&
                true;
            return result;
        }
        $$.$me_point_in_rect_offset = $me_point_in_rect_offset;
        $$.$me_enum_names = (val) => {
            if (_enum_names_cache.has(val))
                return _enum_names_cache.get(val);
            const result = Object.keys(val).filter(key => typeof val[key] == 'number');
            _enum_names_cache.set(val, result);
            return result;
        };
        const _enum_names_cache = new Map();
        $$.$me_enum_values = (val) => {
            if (_enum_values_cache.has(val))
                return _enum_values_cache.get(val);
            const result = Object.keys(val).reduce((result, key) => {
                const n = +key;
                if (Number.isFinite(n))
                    result.push(n);
                return result;
            }, Array());
            _enum_values_cache.set(val, result);
            return result;
        };
        const _enum_values_cache = new Map();
        $$.$me_enum_pairs = (val) => {
            if (_enum_pairs_cache.has(val))
                return _enum_pairs_cache.get(val);
            const result = $$.$me_enum_values(val).map(value => [value, val[value]]);
            _enum_pairs_cache.set(val, result);
            return result;
        };
        const _enum_pairs_cache = new Map();
        let $me_rect_corners_enum;
        (function ($me_rect_corners_enum) {
            $me_rect_corners_enum[$me_rect_corners_enum["leftTop"] = 0] = "leftTop";
            $me_rect_corners_enum[$me_rect_corners_enum["rightTop"] = 1] = "rightTop";
            $me_rect_corners_enum[$me_rect_corners_enum["leftBottom"] = 2] = "leftBottom";
            $me_rect_corners_enum[$me_rect_corners_enum["rightBottom"] = 3] = "rightBottom";
        })($me_rect_corners_enum = $$.$me_rect_corners_enum || ($$.$me_rect_corners_enum = {}));
        let $me_rect_sides_enum;
        (function ($me_rect_sides_enum) {
            $me_rect_sides_enum[$me_rect_sides_enum["left"] = 0] = "left";
            $me_rect_sides_enum[$me_rect_sides_enum["top"] = 1] = "top";
            $me_rect_sides_enum[$me_rect_sides_enum["right"] = 2] = "right";
            $me_rect_sides_enum[$me_rect_sides_enum["bottom"] = 3] = "bottom";
        })($me_rect_sides_enum = $$.$me_rect_sides_enum || ($$.$me_rect_sides_enum = {}));
        let $me_align;
        (function ($me_align) {
            $me_align[$me_align["left"] = 0] = "left";
            $me_align[$me_align["top"] = 0] = "top";
            $me_align[$me_align["right"] = 1] = "right";
            $me_align[$me_align["bottom"] = 1] = "bottom";
            $me_align[$me_align["center"] = 2] = "center";
        })($me_align = $$.$me_align || ($$.$me_align = {}));
        function $me_align_correction(align, correction) {
            return (align == $me_align.left ? 0 : correction() / align);
        }
        $$.$me_align_correction = $me_align_correction;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//me.js.map
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const requests = new Map();
        onmessage = (event) => {
            if (event.data.cmd == 'drawn') {
                const { drawn, step } = event.data;
                let step_request = requests.get(step);
                if (step_request) {
                    if (step_request.has(drawn[0]))
                        return;
                }
                else {
                    step_request = new Set();
                    requests.set(step, step_request);
                }
                step_request.add(drawn[0]);
                const level = step + 1;
                let result = {};
                let qt = 0;
                for (const i_drawn of drawn) {
                    const base = i_drawn * 3;
                    for (let j = 0; j < 3; j++) {
                        const idx = base + j;
                        result[idx] = data(idx, level);
                        qt++;
                    }
                    if (qt > 600) {
                        postMessage({ cmd: 'cache', level, cache: result });
                        qt = 0;
                        result = {};
                    }
                }
                if (qt)
                    postMessage({ cmd: 'cache', level, cache: result });
            }
        };
        const size_initial = 1000;
        const MAGIC = .135;
        const data_cache = new Map();
        function data(i, level) {
            if (i < 0 || i >= Math.pow(3, level))
                $$.$me_throw(`i: ${i}, level: ${level}`);
            let result;
            const level_cache = data_cache.get(level);
            if (level_cache) {
                result = level_cache.get(i);
                if (result)
                    return result;
            }
            if (!i && !level) {
                result = {
                    x: 0,
                    y: 0,
                };
            }
            else {
                const group_i = Math.floor(i / 3);
                const parent = data(group_i, level - 1);
                const idx = i - group_i * 3;
                const size = size_initial / Math.pow(2, level);
                result =
                    !idx ?
                        {
                            x: parent.x,
                            y: parent.y - size * (1 - MAGIC),
                        } :
                        {
                            x: parent.x + (idx == 2 ? 1 : -1) * size,
                            y: parent.y + size * (1 - MAGIC),
                        };
            }
            if (!data_cache.has(level))
                data_cache.set(level, new Map());
            data_cache.get(level).set(i, result);
            return result;
        }
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//worker.js.map
//# sourceMappingURL=web.js.map