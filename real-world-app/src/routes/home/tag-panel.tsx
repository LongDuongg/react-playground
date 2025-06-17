export const TagPanel = ({ title, selectedTag }) => {
    return (
        <div className="sidebar">
            <p>{title}</p>
            <div className="tag-list">
                {tags?.tags.slice(0, 89).map((tag, i) => (
                    <div
                        style={{ cursor: "pointer" }}
                        key={i}
                        className="tag-pill tag-default"
                        onClick={() => {
                            selectedTag.onChange(tag);
                        }}
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
};
