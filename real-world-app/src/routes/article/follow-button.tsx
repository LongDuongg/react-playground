import classNames from "classnames";
import {useApis} from "../../context/apis";
import {ProfilePayload} from "../../types/profile";
import {useMutation} from "@tanstack/react-query";

type Props = {userInfo: ProfilePayload; className?: string; onFollow: (profile: ProfilePayload) => void};

export const FollowButton = ({userInfo, className = "", onFollow}: Props) => {
  const {apis} = useApis();

  const mutation = useMutation({
    mutationFn: async () => {
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
        onFollow(res.profile);
      }
    },
  });

  return (
    <button
      className={classNames("btn btn-sm btn-outline-secondary", className)}
      disabled={mutation.isPending}
      onClick={async () => {
        mutation.mutate();
      }}
    >
      {userInfo?.following ? "" : <i className="ion-plus-round"></i>}
      &nbsp; {userInfo?.following ? "Following" : "Follow"} {userInfo?.username}{" "}
      <span className="counter">({userInfo?.followersCount})</span>
    </button>
  );
};
