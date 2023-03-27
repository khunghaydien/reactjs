import { useState } from 'react';
import './Layout.scss';
export type image = {
    src: string,
    className?: string,
    alt: string
}
export type routerItem = {
    id: string,
    name: string,
    icon?: image,
    path: string,
    chidren?: routerItem[],
    title?: string
}
type LayoutMenuProps = {
    listRouter: routerItem[],
    handleClickRoute: (routerItem: routerItem) => void,
    rootClass: string,
    currentRoute?: string,
    parentPath?: string
}
const LayoutMenu = ({ handleClickRoute, rootClass, listRouter, currentRoute, parentPath }: LayoutMenuProps) => {
    const ROOT = rootClass
    const [currentIdActive, setCurrentIdActive] = useState('learn_1')
    const handleClick = (routerItem: routerItem, routerItemId?: string) => {
        routerItem = { ...routerItem, path: parentPath ? parentPath + routerItem.path : routerItem.path }
        handleClickRoute(routerItem)
        if (routerItemId) {
            setCurrentIdActive(routerItemId)
        }
    }
    const isActive = (currentRoute: string | undefined, parentPath: string | undefined, routerItem: routerItem) => {
        return currentRoute === (parentPath ? parentPath + routerItem.path : routerItem.path) || (currentRoute?.split('/').includes(routerItem.path.split('/')[1]) && !parentPath)
    }
    return (
        <div className={ROOT}>
            {listRouter?.map((routerItem: routerItem) => (
                <>
                    <div className={`${ROOT}__item ${isActive(currentRoute, parentPath, routerItem) ? 'active' : ''} `} key={routerItem.id} onClick={() => handleClick(routerItem, routerItem.id)}>
                        {routerItem.icon && (
                            <img src={routerItem.icon.src} className={routerItem.icon.className} alt={routerItem.icon.alt} />
                        )}
                        {routerItem.name}
                    </div>
                    {routerItem.chidren?.map((subRouterItem: routerItem) => (
                        <div key={subRouterItem.id} className={`${ROOT}__item ${isActive(currentRoute, parentPath, subRouterItem) ? 'active' : ''} ${currentIdActive !== routerItem.id ? 'display-none' : ''} `} onClick={() => handleClick(subRouterItem)}>
                            {subRouterItem.name}
                        </div>
                    ))}
                </>
            ))}
        </div>
    )
}
export default LayoutMenu