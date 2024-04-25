import React from 'react';
import HeadSearch from './HeadSearch';
import HeadTitle from './HeadTitle';
import HeadRightButtons from './HeadRightButtons';
export interface Props {}

const Header: React.FC<Props> = (props: Props) => {
    return (
        <>
            <div className="action_bar">
                <div className="navigation">
                    <ul>
                        <li className="search_li">
                            <HeadSearch></HeadSearch>
                        </li>
                    </ul>
                </div>
                <HeadTitle></HeadTitle>
                <div className="control">
                    <HeadRightButtons></HeadRightButtons>
                </div>
            </div>
        </>
    );
};

export default Header;
