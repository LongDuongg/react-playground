import {useParams, Link} from "react-router-dom";

import {FollowButton} from "../article/follow-button.js";
import {ArticleTabs} from "./article-tabs.js";
import {useAuth} from "../../context/auth.js";
import {useApis} from "../../context/apis.js";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {QUERY_KEYS} from "../../constant/query-keys.js";
import {Layout} from "../layout/layout.js";

export const Profile = () => {
  const queryClient = useQueryClient();

  const params = useParams();
  const {user} = useAuth();
  const {apis} = useApis();

  const profile = useQuery({
    queryKey: [QUERY_KEYS.auth.profile, params.username],
    queryFn: () => apis.profile.getProfile({username: params.username}),
  });

  if (profile.isLoading) {
    return "Loading...";
  }

  if (profile.data.errors) {
    return profile.data.errors.body[0];
  }

  return (
    <Layout>
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <img src={profile.data.profile.image} className="user-img" />
                {user.username === profile.data.profile.username ? (
                  <>
                    {" "}
                    <h4>{user.username}</h4>
                    <p>{user.bio}</p>
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
                    <h4>{profile.data.profile.username}</h4>
                    <p>{profile.data.profile.bio}</p>
                    <FollowButton
                      userInfo={profile.data.profile}
                      className={"action-btn"}
                      onFollow={(updatedProfile) => {
                        queryClient.setQueryData([QUERY_KEYS.auth.profile, params.username], {...profile.data, profile: updatedProfile});
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <ArticleTabs profile={profile.data.profile} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
