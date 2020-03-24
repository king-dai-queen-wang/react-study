import React from "react";
import {Link} from 'react-router-dom';
import {RouterModel} from "../../model/router-model/router.model";
import './MenuHeader.scss';

interface IProps {
    routers: RouterModel[],
}

function LinkItem(route: RouterModel) {
    return (
        <div className="link">
            <Link to={route.path} >{route.name}</Link>
            {route.children && <MenuHeader routers={route.children}/>}
        </div>

    )
}
export class MenuHeader extends React.Component <IProps>{
    render() {
        const {routers} = this.props;
        return <div className="">
            {routers && routers.map((route, index) =>
                <LinkItem key={index} {...route}>{route.children}</LinkItem>
            )}
        </div>;
    }
}
