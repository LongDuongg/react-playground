import { TagPanel } from "./tag-panel.js";
import { Layout } from "../layout/layout.js";
import { FeedPanel } from "./feed-panel.js";

import { cs } from "../../common/chain-services.js";
import { State } from "../../common/react/state.js";

export const Home = () => {
    return (
        <div className="home-page">
            <div className="banner">
                <div className="container">
                    <h1 className="logo-font">conduit</h1>
                    <p>A place to share your knowledge.</p>
                </div>
            </div>

            <div className="container page">
                <div className="row">
                    <div className="col-md-9">{FeedPanel({ selectedTag })}</div>

                    <div className="col-md-3">
                        {TagPanel({
                            title: "Popular Tags",
                            selectedTag,
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
