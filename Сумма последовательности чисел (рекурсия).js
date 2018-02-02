const sequenceSum = (begin, end) => {
    if(begin > end) return NaN;
    else if(begin == end) return begin;
    else return begin + sequenceSum(begin + 1, end);
};

export default sequenceSum;