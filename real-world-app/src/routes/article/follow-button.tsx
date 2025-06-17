export const FollowButton = ({ userInfo, className = "", onChange }) => {
    return (
        <button
            className={cx1("btn btn-sm btn-outline-secondary", className)}
            disabled={isLoading.value}
            onClick={async () => {
                isLoading.onChange(true);
                let res = null;
                if (userInfo?.following) {
                    res = await apis.profile.unfollowUser({
                        username: userInfo?.username,
                    });
                } else {
                    res = await apis.profile.followUser({
                        username: userInfo?.username,
                    });
                }

                if (!res.errors) {
                    onChange(res.profile);
                }

                isLoading.onChange(false);
                // console.log(res);
            }}
        >
            {userInfo?.following ? "" : <i className="ion-plus-round"></i>}
            &nbsp; {userInfo?.following ? "Following" : "Follow"} {userInfo?.username}{" "}
            <span className="counter">({userInfo?.followersCount})</span>
        </button>
    );
};
