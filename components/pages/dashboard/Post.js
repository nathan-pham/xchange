const Post = () => {
    return (
        <article className="mt-6 p-4 border">
            <div className="flex gap-2">
                <img
                    src="https://avatars.githubusercontent.com/u/43102813?v=4"
                    className="w-6 h-6 object-cover"
                />
                <span className="text-slate-500">@phamn23</span>
            </div>
            <p className="mt-2">Example post content about a seed</p>
        </article>
    );
};

export default Post;
