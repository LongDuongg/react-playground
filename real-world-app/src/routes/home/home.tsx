import {useState} from "react";

import {TagPanel} from "./tag-panel.tsx";
import {Layout} from "../layout/layout.tsx";
import {FeedPanel} from "./feed-panel.tsx";

export const Home = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");
  return (
    <Layout>
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <FeedPanel selectedTag={selectedTag} onChange={() => setSelectedTag("")} />
            </div>

            <div className="col-md-3">
              <TagPanel title="Favourite Tags" onSelect={(tag: string) => setSelectedTag(tag)} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
