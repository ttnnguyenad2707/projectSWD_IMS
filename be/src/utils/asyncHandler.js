const asyncHanler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
export default asyncHanler
//chx rõ để làm gì