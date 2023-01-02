const { User } = require("../model");

exports.pagination = async(req,res) => {
    res.json(res.paginatedResults);
}
exports.paginatedResults = async () => {
    let users = await User.findAll({
        raw: true 
    });
    return async (req,res,next) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
    
        // 첫 게시글 번호, 끝 게시글 번호
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        // 각 페이지에서 보일 게시글
        const results = {}
        if (endIndex < users.length) {
            results.next = {
                page: page + 1, //기존페이지 + 1
                limit: limit
            }
        }
        if (startIndex > 0) {
            results.prev = {
                page: page - 1,
                limit: limit
            }
        }
        // results.results = model.slice(startIndex, endIndex);
        try {
            results.results = await users.find().limit(limit).skip(startIndex).exec();
            res.paginatedResults = results;
            next();
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}