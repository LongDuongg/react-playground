import { useNavigate, useParams, Link } from "react-router-dom";

import { FollowButton } from "../article/follow-button.js";
import { ArticleTabs } from "./article-tabs.js";

export const Profile = () => {
    return (
        <div className="profile-page">
            <div className="user-info">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-10 offset-md-1">
                            <img src={profile.value.profile?.image} className="user-img" />
                            {auth.user.username === profile.value.profile?.username ? (
                                <>
                                    {" "}
                                    <h4>{auth.user.username}</h4>
                                    <p>{auth.user.bio}</p>
                                    <Link to={"/settings"}>
                                        <button className="btn btn-sm btn-outline-secondary action-btn">
                                            <i className="ion-gear-a"></i>
                                            &nbsp; Edit Profile Settings
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {" "}
                                    <h4>{profile.value.profile?.username}</h4>
                                    <p>{profile.value.profile?.bio}</p>
                                    {FollowButton({
                                        userInfo: profile.value.profile,
                                        className: " action-btn",
                                        onFollow: (updatedProfile) => {
                                            profile.onChange({
                                                ...profile.value,
                                                profile: updatedProfile,
                                            });
                                        },
                                    })}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                        <ArticleTabs profile={profile.value?.profile} />
                    </div>
                </div>
            </div>
        </div>
    );
};
