import classNames from "classnames";
import { Fragment } from "react/jsx-runtime";

type Props = {
    isActive: (v1: any, v2: number) => boolean;
    tabs: Array<any>;
    onChange: (v: number) => void;
};

export const Tabs = ({ tabs, onChange, isActive }: Props) => {
    const activeTab = tabs.find((tab, i) => isActive(tab, i));

    return (
        <>
            <div className="feed-toggle">
                {TabHeader({
                    isActive,
                    tabs,
                    onChange,
                })}
            </div>

            <Fragment key={activeTab?.key}>{activeTab?.render()}</Fragment>
        </>
    );
};

const TabHeader = ({ isActive, tabs, onChange }: Props) => {
    const renderItem = (tab: any, i: number) => {
        return (
            <div
                style={{ cursor: "pointer" }}
                className={classNames("nav-link", { active: isActive(tab, i) })}
                onClick={() => {
                    onChange?.(i);
                }}
            >
                {tab.label}
            </div>
        );
    };
    return (
        <ul className="nav nav-pills outline-active">
            {tabs.map((tab, i) => {
                return (
                    <li key={i} className="nav-item">
                        {tab.renderLabel ? tab.renderLabel(renderItem(tab, i)) : renderItem(tab, i)}
                    </li>
                );
            })}
        </ul>
    );
};
