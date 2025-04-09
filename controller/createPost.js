const post = require("../models/schema");


exports.createPost = async (req, res) => {
    try {
        const { id, title, Article, Likes, Comments } = req.body;

        const Data = await post.create({ id, title, Article, Likes, Comments });
        console.log(Data);

        res.status(200).json({
            success: true,
            data: Data,
            message: "Entry created successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message // ✅ This is the correct way
        });
    }
};
