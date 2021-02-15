/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // when to merge?
    // (4, 12) (10, 15) b.start < a.end -> (4,15)
    // (5, 10) (5,11) -> same start -> b.start < a.end  -> (5, )
        // a.start > b.end -> (5, 11)
    // (1,6) (10, 20) -> no overlap
    
    // sort and linear operation
    // sort by the start time
    
    let res = [];
    intervals = intervals.sort((a,b) => (a[0] > b[0]) ? 1 : -1);
    for(let interval of intervals) {
        if (res.length == 0 || res[res.length - 1][1] < interval[0]) {
            res.push(interval);
        } else { // overlap
            res[res.length - 1][1] = Math.max(
                res[res.length - 1][1], interval[1]
            );
        }
    }
    return res;
};

function mergeIntervals(a, b) {
    return c
}